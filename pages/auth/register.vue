<script setup>
definePageMeta({
  layout: 'blank'
})

// 导入图片
import loginBgSrc from '~/assets/imgaes/login/login_bg.jpg'
import logoImageSrc from '~/assets/imgaes/logo.png'

// 认证
const { login, goToAdminDashboard } = useAuth()

// 表单数据
const form = reactive({
  account: '',
  password: '',
  confirmPassword: ''
})

// 显示/隐藏密码
const showPassword = ref(false)

// 加载状态
const loading = ref(false)

// 表单提交
const handleSubmit = async () => {
  if (form.password !== form.confirmPassword) {
    alert('两次输入的密码不一致')
    return
  }
  
  loading.value = true
  
  try {
    // TODO: 替换为实际的 API 调用
    // const response = await $fetch('/api/auth/register', {
    //   method: 'POST',
    //   body: { account: form.account, password: form.password }
    // })
    
    // 模拟注册成功（实际项目中替换为真实 API 响应）
    const mockToken = 'mock_token_' + Date.now()
    
    // 保存登录状态
    login(mockToken, { account: form.account })
    
    // 注册成功后，跳转到广告主管理后台
    goToAdminDashboard()
  } catch (error) {
    console.error('注册失败', error)
    alert('注册失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

// SEO 配置
useHead({
  title: '注册 - T1'
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center lg:justify-end relative overflow-hidden" :style="{ backgroundImage: `url(${loginBgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-center lg:justify-end min-h-screen">
        <!-- 表单 -->
        <div class="w-full max-w-md">
          <div class="bg-white rounded-2xl shadow-xl p-8 w-full">
            <!-- Logo 和标题 -->
            <div class="flex items-center mb-6">
              <img :src="logoImageSrc" alt="T1 Logo" class="h-10 w-auto mr-3" />
              <h1 class="text-2xl font-medium text-gray-900">
                欢迎注册T1!
              </h1>
            </div>

            <!-- 表单 -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- 账号/邮箱 -->
              <div>
                <label class="flex items-center text-gray-700 mb-2">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>账号/邮箱</span>
                </label>
                <input
                  v-model="form.account"
                  type="text"
                  placeholder="请输入账号或邮箱"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <!-- 密码 -->
              <div>
                <label class="flex items-center text-gray-700 mb-2">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>密码</span>
                </label>
                <div class="relative">
                  <input
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="请输入密码"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                    required
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0L3 3m3.29 3.29L3 3" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 确认密码 -->
              <div>
                <label class="flex items-center text-gray-700 mb-2">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>确认密码</span>
                </label>
                <input
                  v-model="form.confirmPassword"
                  type="password"
                  placeholder="请再次输入密码"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <!-- 提交按钮 -->
              <button
                type="submit"
                :disabled="loading"
                class="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ loading ? '处理中...' : '注册' }}
              </button>
            </form>

            <!-- 切换登录/注册 -->
            <div class="mt-6 text-center text-gray-600">
              <span>
                已有账号?请点此
                <NuxtLink to="/auth/login" class="text-blue-600 hover:text-blue-700 font-medium">登陆</NuxtLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 确保背景图铺满整个屏幕 */
.min-h-screen {
  min-height: 100vh;
}
</style>

