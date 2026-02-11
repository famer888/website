/**
 * 用户相关 API 接口
 * 
 * 所有用户相关的 API 接口都放在这个文件中维护
 */

const API_BASE_URL = 'https://bff.ad-test.cc'

/**
 * 用户信息数据类型
 */
export interface UserInfoData {
    userId: string
    userName: string
    loginEmail: string
}

/**
 * 用户信息接口响应类型
 */
export interface UserInfoResponse {
    code: number
    msg: string
    data: UserInfoData | null
}

/**
 * 获取用户信息
 * 
 * 接口地址：GET https://bff.ad-test.cc/api/userinfo
 * 请求参数：无（通过 Cookie 自动携带 Session ID）
 * 
 * 说明：
 * - credentials: 'include' 不是传递 Cookie，而是告诉浏览器在请求时自动包含当前域名下的所有 Cookie
 * - 浏览器会自动将 Cookie 中的 Session ID 附加到请求头中发送给服务器
 * - 服务器通过 Cookie 中的 Session ID 来识别用户身份
 * 
 * @returns Promise<UserInfoResponse>
 * 
 * @example
 * ```typescript
 * const result = await getUserInfo()
 * if (result.code === 200) {
 *   console.log('用户信息:', result.data)
 * } else {
 *   console.log('未登录:', result.msg)
 * }
 * ```
 */
export const getUserInfo = async (): Promise<UserInfoResponse> => {
    try {
        // 使用原生 fetch API 确保 credentials: 'include' 正常工作
        // credentials: 'include' 的作用是让浏览器自动携带当前域名下的所有 Cookie（包括 Session ID）
        const response = await fetch(`${API_BASE_URL}/api/userinfo`, {
            method: 'GET',
            credentials: 'include', // 重要：自动携带 Cookie（Session ID）
            headers: {
                'Content-Type': 'application/json',
                // 如果需要，可以添加其他请求头
                // 'Accept': 'application/json',
            },
        })

        // 打印响应状态，便于调试
        console.log('接口响应状态:', response.status, response.statusText)
        console.log('响应头:', Object.fromEntries(response.headers.entries()))

        // 检查响应状态
        if (!response.ok) {
            // 403 通常是权限或 CORS 问题
            if (response.status === 403) {
                console.error('403 错误 - 可能的原因:')
                console.error('1. CORS 跨域问题：服务器未允许当前域名的跨域请求')
                console.error('2. Cookie SameSite 属性：跨域请求时 Cookie 被阻止')
                console.error('3. 服务器权限配置：服务器端未正确配置 CORS 或权限')
                console.error('4. 请求头问题：缺少必要的请求头或请求头格式不正确')
            }

            // 尝试读取错误响应体
            let errorMessage = `HTTP error! status: ${response.status}`
            try {
                const errorData = await response.json()
                errorMessage = errorData.msg || errorMessage
                console.error('错误响应体:', errorData)
            } catch (e) {
                const errorText = await response.text()
                console.error('错误响应文本:', errorText)
            }

            throw new Error(errorMessage)
        }

        // 解析 JSON 响应
        const data: UserInfoResponse = await response.json()
        return data
    } catch (error: any) {
        console.error('获取用户信息失败:', error)

        // 如果是网络错误或 CORS 错误
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            console.error('可能是 CORS 跨域问题，请检查:')
            console.error('1. 服务器是否配置了正确的 CORS 头')
            console.error('2. Access-Control-Allow-Origin 是否包含当前域名')
            console.error('3. Access-Control-Allow-Credentials 是否设置为 true')
        }

        // 返回错误格式，保持与接口响应格式一致
        return {
            code: error.status || error.statusCode || 500,
            msg: error.message || '请求失败',
            data: null,
        }
    }
}

