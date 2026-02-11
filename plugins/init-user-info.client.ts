/**
 * 初始化用户信息插件
 * 在客户端初始化时调用用户信息接口，并将状态打印到控制台
 */

export default defineNuxtPlugin(async () => {
    // 只在客户端执行
    if (process.server) return

    try {
        // 导入用户信息接口
        const { getUserInfo } = await import('~/api/user')

        // 调用接口获取用户信息（通过 Cookie 自动携带 Session ID）
        const result = await getUserInfo()

        // 获取 API 地址用于日志显示
        const config = useRuntimeConfig()
        const apiBaseUrl = import.meta.dev
            ? config.public.apiBaseUrl
            : window.location.origin
        const apiUrl = `${apiBaseUrl}/api/userinfo`

        // 打印到控制台
        console.log('========== 用户状态信息 ==========')
        console.log('接口地址:', apiUrl)
        console.log('当前域名:', window.location.origin)
        console.log('Cookie 会自动携带（credentials: include）')


        if (result.code === 200 && result.data) {
            console.log('登录状态:', '已登录')
        } else {
            console.log('登录状态:', '未登录')
            console.log('用户数据:', result.data)
        }

        console.log('完整响应:', JSON.stringify(result, null, 2))
        console.log('================================')

        // 如果用户已登录，可以更新认证状态
        if (result.code === 200 && result.data) {
            // 这里可以根据实际需求更新 useAuth 的状态
            // const { login } = useAuth()
            // login(token, result.data)
        }
    } catch (error) {
        console.error('初始化用户信息失败:', error)
    }
})

