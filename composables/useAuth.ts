/**
 * 认证状态管理 composable
 * 
 * 管理用户登录状态，提供登录/登出方法，
 * 以及根据登录状态智能导航的工具函数。
 * 
 * 注意：现在使用 Pinia store 来管理用户状态
 */
// 注意：computed, useRouter, useRuntimeConfig, navigateTo 
// 均由 Nuxt 自动导入，无需显式 import
// 如果 IDE 显示类型错误，请运行 `npx nuxi prepare` 生成类型文件

// 广告主管理后台地址（可在 runtimeConfig 中覆盖）
const ADMIN_DASHBOARD_URL = '/admin'

export const useAuth = () => {
  const router = useRouter()
  const runtimeConfig = useRuntimeConfig()

  // 使用 Pinia store 管理用户状态
  const userStore = useUserStore()

  // 管理后台地址，优先使用 runtimeConfig 配置
  const adminDashboardUrl = computed(() => {
    return (runtimeConfig.public as any).adminDashboardUrl || ADMIN_DASHBOARD_URL
  })

  /**
   * 登录成功后保存认证信息（已废弃，现在由 Pinia store 管理）
   * @deprecated 使用 userStore.setUserInfo() 代替
   */
  const login = (token: string, user?: { account: string }) => {
    console.warn('useAuth().login() 已废弃，请使用 userStore.setUserInfo()')
    // 保留兼容性，但不做任何操作
    // 用户信息现在由 /api/userinfo 接口和 Pinia store 管理
  }

  /**
   * 登出并清除认证信息
   */
  const logout = () => {
    userStore.clearUserInfo()
    // 跳转到登录页
    navigateTo('/auth/login')
  }

  /**
   * 清除认证数据（已废弃，现在由 Pinia store 管理）
   * @deprecated 使用 userStore.clearUserInfo() 代替
   */
  const clearAuthData = () => {
    console.warn('useAuth().clearAuthData() 已废弃，请使用 userStore.clearUserInfo()')
    userStore.clearUserInfo()
  }

  /**
   * 获取认证 token（已废弃，现在通过 Cookie 管理）
   * @deprecated 现在使用 Cookie 进行认证
   */
  const getToken = (): string | null => {
    console.warn('useAuth().getToken() 已废弃，现在使用 Cookie 进行认证')
    return null
  }

  /**
   * 智能导航：已登录跳转管理后台，未登录跳转登录/注册页
   * @param fallbackPath - 未登录时跳转的路径，默认 '/auth/register'
   */
  const navigateToAuthOrDashboard = (fallbackPath: string = '/auth/register') => {
    if (userStore.isLoggedIn) {
      // 已登录，跳转到管理后台
      goToAdminDashboard()
    } else {
      // 未登录，跳转到登录/注册页
      navigateTo(fallbackPath)
    }
  }

  /**
   * 跳转到广告主管理后台
   * 直接使用当前域名拼接 /admin
   */
  const goToAdminDashboard = () => {
    if (process.client) {
      window.location.href = `${window.location.origin}/admin`
    }
  }

  return {
    // 状态（从 Pinia store 获取）
    isLoggedIn: computed(() => userStore.isLoggedIn),
    user: computed(() => userStore.userInfo),
    adminDashboardUrl,

    // 方法
    login,
    logout,
    clearAuthData,
    getToken,
    navigateToAuthOrDashboard,
    goToAdminDashboard,
  }
}
