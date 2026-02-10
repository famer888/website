/**
 * 认证状态管理 composable
 * 
 * 管理用户登录状态，提供登录/登出方法，
 * 以及根据登录状态智能导航的工具函数。
 */
// 注意：reactive, computed, useRouter, useRuntimeConfig, navigateTo 
// 均由 Nuxt 自动导入，无需显式 import
// 如果 IDE 显示类型错误，请运行 `npx nuxi prepare` 生成类型文件

// 广告主管理后台地址（可在 runtimeConfig 中覆盖）
const ADMIN_DASHBOARD_URL = '/admin'

// 全局状态（跨组件共享）
const authState = reactive({
  isLoggedIn: false,
  user: null as { account: string } | null,
  initialized: false,
})

export const useAuth = () => {
  const router = useRouter()
  const runtimeConfig = useRuntimeConfig()

  // 管理后台地址，优先使用 runtimeConfig 配置
  const adminDashboardUrl = computed(() => {
    return (runtimeConfig.public as any).adminDashboardUrl || ADMIN_DASHBOARD_URL
  })

  /**
   * 初始化认证状态（从 localStorage 读取）
   */
  const initAuth = () => {
    if (!process.client || authState.initialized) return

    try {
      const token = localStorage.getItem('auth_token')
      const userStr = localStorage.getItem('auth_user')
      
      if (token) {
        authState.isLoggedIn = true
        authState.user = userStr ? JSON.parse(userStr) : null
      }
    } catch (e) {
      console.warn('读取认证信息失败:', e)
      clearAuthData()
    }
    
    authState.initialized = true
  }

  /**
   * 登录成功后保存认证信息
   */
  const login = (token: string, user?: { account: string }) => {
    if (!process.client) return

    localStorage.setItem('auth_token', token)
    if (user) {
      localStorage.setItem('auth_user', JSON.stringify(user))
    }
    
    authState.isLoggedIn = true
    authState.user = user || null
  }

  /**
   * 登出并清除认证信息
   */
  const logout = () => {
    clearAuthData()
    // 跳转到登录页
    navigateTo('/auth/login')
  }

  /**
   * 清除认证数据
   */
  const clearAuthData = () => {
    if (!process.client) return

    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
    authState.isLoggedIn = false
    authState.user = null
  }

  /**
   * 获取认证 token
   */
  const getToken = (): string | null => {
    if (!process.client) return null
    return localStorage.getItem('auth_token')
  }

  /**
   * 智能导航：已登录跳转管理后台，未登录跳转登录/注册页
   * @param fallbackPath - 未登录时跳转的路径，默认 '/auth/register'
   */
  const navigateToAuthOrDashboard = (fallbackPath: string = '/auth/register') => {
    if (authState.isLoggedIn) {
      // 已登录，跳转到管理后台
      goToAdminDashboard()
    } else {
      // 未登录，跳转到登录/注册页
      navigateTo(fallbackPath)
    }
  }

  /**
   * 跳转到广告主管理后台
   */
  const goToAdminDashboard = () => {
    const url = adminDashboardUrl.value
    if (url.startsWith('http://') || url.startsWith('https://')) {
      // 外部地址，使用 window.location
      if (process.client) {
        window.location.href = url
      }
    } else {
      // 内部路由
      navigateTo(url)
    }
  }

  // 在客户端自动初始化
  if (process.client) {
    initAuth()
  }

  return {
    // 状态
    isLoggedIn: computed(() => authState.isLoggedIn),
    user: computed(() => authState.user),
    adminDashboardUrl,

    // 方法
    initAuth,
    login,
    logout,
    clearAuthData,
    getToken,
    navigateToAuthOrDashboard,
    goToAdminDashboard,
  }
}
