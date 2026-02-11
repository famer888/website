/**
 * 初始化用户信息插件
 * 在客户端初始化时调用用户信息接口，校验登录状态并更新 Pinia store
 * 
 * 逻辑：
 * - code === 0: 已登录，保存用户信息到 Pinia store
 * - code === 401: 未登录或登录失效，清空 Pinia store 中的用户信息
 */

export default defineNuxtPlugin(async () => {
    // 只在客户端执行
    if (process.server) return

    try {
        // 导入用户信息接口和 Pinia store
        const { getUserInfo } = await import('~/api/user')
        const { useUserStore } = await import('~/stores/user')

        // 获取用户 store
        const userStore = useUserStore()

        // 先尝试从 localStorage 恢复用户信息（快速显示）
        userStore.restoreUserInfo()

        // 调用接口获取用户信息（通过 Cookie 自动携带 Session ID）
        const result = await getUserInfo()

        // 获取 API 地址用于日志显示
        const apiBaseUrl = import.meta.dev
            ? '' // 开发环境使用相对路径，通过 Vite 代理
            : window.location.origin
        const apiUrl = apiBaseUrl ? `${apiBaseUrl}/api/userinfo` : '/api/userinfo'

        // 处理接口响应
        if (result.code === 0 && result.data) {
            // 登录成功：保存用户信息到 Pinia store
            const { loginEmail, userId, userName } = result.data
            userStore.setUserInfo({
                loginEmail,
                userId,
                userName,
            })
            console.log('========== 用户状态信息 ==========')
            console.log('接口地址:', apiUrl)
            console.log('当前域名:', window.location.origin)
            console.log('登录状态:', '已登录')
            console.log('用户信息:', { userId, userName, loginEmail })
            console.log('================================')
        } else if (result.code === 401) {
            // 登录失效：清空用户信息
            userStore.clearUserInfo()
            console.log('========== 用户状态信息 ==========')
            console.log('接口地址:', apiUrl)
            console.log('当前域名:', window.location.origin)
            console.log('登录状态:', '未登录（登录失效）')
            console.log('响应信息:', result.msg)
            console.log('================================')
        } else {
            // 其他错误情况：清空用户信息
            userStore.clearUserInfo()
            console.log('========== 用户状态信息 ==========')
            console.log('接口地址:', apiUrl)
            console.log('当前域名:', window.location.origin)
            console.log('登录状态:', '未登录')
            console.log('响应码:', result.code)
            console.log('响应信息:', result.msg)
            console.log('完整响应:', JSON.stringify(result, null, 2))
            console.log('================================')
        }
    } catch (error) {
        console.error('初始化用户信息失败:', error)
        // 发生错误时，清空用户信息以确保状态一致
        try {
            const { useUserStore } = await import('~/stores/user')
            const userStore = useUserStore()
            userStore.clearUserInfo()
        } catch (e) {
            console.error('清空用户信息失败:', e)
        }
    }
})

