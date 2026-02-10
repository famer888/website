<script setup>
/**
 * 登出页面
 * 
 * 广告主管理后台点击"登出"后，跳转到此页面。
 * 此页面会清除登录状态，然后重定向到登录页。
 * 
 * 使用方式：管理后台登出时跳转到 /auth/logout
 */
definePageMeta({
  layout: 'blank'
})

const { clearAuthData } = useAuth()

onMounted(() => {
  // 清除认证信息
  clearAuthData()
  // 跳转到登录页
  navigateTo('/auth/login')
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p class="text-gray-500">正在退出登录...</p>
    </div>
  </div>
</template>
