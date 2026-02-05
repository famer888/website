<template>
  <div class="min-h-screen bg-white">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <img :src="logoImageSrc" alt="T1 Logo" class="h-10 w-auto" />
            </NuxtLink>
          </div>
          
          <!-- PC端导航 -->
          <div class="hidden md:flex items-center space-x-6">
            <!-- 为什么选择我们 -->
            <div class="relative group">
              <button 
                @click="toggleDropdown('why')"
                class="flex items-center text-gray-700 hover:text-brand px-3 py-2 text-sm font-medium transition-colors"
                :class="{ 'text-brand border-b-2 border-brand': activeDropdown === 'why' }"
              >
                为什么选择我们?
                <svg class="ml-1 h-4 w-4" :class="{ 'rotate-180': activeDropdown === 'why' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                v-if="activeDropdown === 'why'"
                class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              >
                <NuxtLink to="/who-are-we" class="block px-4 py-2 text-sm text-brand hover:bg-gray-50">我们是谁</NuxtLink>
                <NuxtLink to="/advantages" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">我们的优势</NuxtLink>
                <NuxtLink to="/statistics" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">数据统计</NuxtLink>
                <NuxtLink to="/mobile-ads" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">移动广告</NuxtLink>
              </div>
            </div>

            <!-- 广告商 -->
            <div class="relative group">
              <button 
                @click="toggleDropdown('advertiser')"
                class="flex items-center text-gray-700 hover:text-brand px-3 py-2 text-sm font-medium transition-colors"
                :class="{ 'text-brand': activeDropdown === 'advertiser' }"
              >
                广告商
                <svg class="ml-1 h-4 w-4" :class="{ 'rotate-180': activeDropdown === 'advertiser' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                v-if="activeDropdown === 'advertiser'"
                class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              >
                <NuxtLink to="/how-to-operate" class="block px-4 py-2 text-sm text-brand hover:bg-gray-50">如何操作</NuxtLink>
                <NuxtLink to="/t1-dsp" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">T1 DSP</NuxtLink>
                <NuxtLink to="/target-function" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">目标功能</NuxtLink>
              </div>
            </div>

            <!-- 广告样式 -->
            <NuxtLink to="/ad-styles" class="text-gray-700 hover:text-brand px-3 py-2 text-sm font-medium transition-colors">
              广告样式
            </NuxtLink>

            <!-- 联系我们 -->
            <div class="relative group">
              <button 
                @click="toggleDropdown('contact')"
                class="flex items-center text-gray-700 hover:text-brand px-3 py-2 text-sm font-medium transition-colors"
                :class="{ 'text-brand': activeDropdown === 'contact' }"
              >
                联系我们
                <svg class="ml-1 h-4 w-4" :class="{ 'rotate-180': activeDropdown === 'contact' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                v-if="activeDropdown === 'contact'"
                class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              >
                <NuxtLink to="/contact" class="block px-4 py-2 text-sm text-brand hover:bg-gray-50">联系我们</NuxtLink>
                <NuxtLink to="/help-center" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">帮助中心</NuxtLink>
                <NuxtLink to="/quality-guide" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">质量指南</NuxtLink>
                <NuxtLink to="/download-media-kit" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">下载媒体资源包</NuxtLink>
              </div>
            </div>

            <!-- 登录和注册 -->
            <div class="flex items-center space-x-4 ml-4">
              <NuxtLink to="/login" class="text-gray-700 hover:text-brand px-3 py-2 text-sm font-medium transition-colors">
                登陆
              </NuxtLink>
              <NuxtLink to="/register" class="bg-brand text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand transition-colors">
                注册
              </NuxtLink>
            </div>
          </div>

          <!-- 移动端菜单按钮 -->
          <div class="md:hidden">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- 移动端菜单 -->
        <div v-if="mobileMenuOpen" class="md:hidden border-t">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <button 
              @click="toggleMobileDropdown('why')"
              class="w-full flex items-center justify-between text-gray-700 hover:text-brand px-3 py-2 rounded-md text-base font-medium"
            >
              为什么选择我们?
              <svg class="h-4 w-4" :class="{ 'rotate-180': mobileDropdown === 'why' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="mobileDropdown === 'why'" class="pl-4 space-y-1">
              <NuxtLink to="/who-are-we" class="block px-3 py-2 text-xs sm:text-sm text-brand">我们是谁</NuxtLink>
              <NuxtLink to="/advantages" class="block px-3 py-2 text-xs sm:text-sm text-gray-700">我们的优势</NuxtLink>
              <NuxtLink to="/statistics" class="block px-3 py-2 text-xs sm:text-sm text-gray-700">数据统计</NuxtLink>
              <NuxtLink to="/mobile-ads" class="block px-3 py-2 text-xs sm:text-sm text-gray-700">移动广告</NuxtLink>
            </div>
            <NuxtLink to="/advertiser" class="block text-gray-700 hover:text-brand px-3 py-2 rounded-md text-sm sm:text-base font-medium">广告商</NuxtLink>
            <NuxtLink to="/ad-styles" class="block text-gray-700 hover:text-brand px-3 py-2 rounded-md text-sm sm:text-base font-medium">广告样式</NuxtLink>
            <NuxtLink to="/contact" class="block text-gray-700 hover:text-brand px-3 py-2 rounded-md text-sm sm:text-base font-medium">联系我们</NuxtLink>
            <div class="pt-2 space-y-2">
              <NuxtLink to="/login" class="block text-center text-gray-700 hover:text-brand px-3 py-2 rounded-md text-sm sm:text-base font-medium">登陆</NuxtLink>
              <NuxtLink to="/register" class="block text-center bg-brand text-white px-3 py-2 rounded-full text-sm sm:text-base font-medium">注册</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
// 导入图片
import logoImageSrc from '~/assets/imgaes/logo.png'

const mobileMenuOpen = ref(false)
const activeDropdown = ref(null)
const mobileDropdown = ref(null)

const toggleDropdown = (name) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const toggleMobileDropdown = (name) => {
  mobileDropdown.value = mobileDropdown.value === name ? null : name
}

// 点击外部关闭下拉菜单
onMounted(() => {
  const handleClickOutside = (event) => {
    const target = event.target
    // 检查点击是否在下拉菜单相关元素外部
    if (!target.closest('.relative.group') && !target.closest('.absolute')) {
      activeDropdown.value = null
    }
  }
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

