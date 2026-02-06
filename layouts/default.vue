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
                <NuxtLink to="/why/who-are-we" :class="route.path === '/why/who-are-we' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">我们是谁</NuxtLink>
                <NuxtLink to="/why/advantages" :class="route.path === '/why/advantages' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">我们的优势</NuxtLink>
                <NuxtLink to="/why/statistics" :class="route.path === '/why/statistics' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">数据统计</NuxtLink>
                <NuxtLink to="/why/mobile-ads" :class="route.path === '/why/mobile-ads' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">移动广告</NuxtLink>
              </div>
            </div>

            <!-- 广告商 -->
            <div class="relative group">
              <button 
                @click="toggleDropdown('advertiser')"
                class="flex items-center text-gray-700 hover:text-brand px-3 py-2 text-sm font-medium transition-colors"
                :class="{ 'text-brand border-b-2 border-brand': activeDropdown === 'advertiser' }"
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
                <NuxtLink to="/advertiser/how-to-operate" :class="route.path === '/advertiser/how-to-operate' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">如何操作</NuxtLink>
                <NuxtLink to="/advertiser/t1-dsp" :class="route.path === '/advertiser/t1-dsp' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">T1 DSP</NuxtLink>
                <NuxtLink to="/advertiser/target-function" :class="route.path === '/advertiser/target-function' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">目标功能</NuxtLink>
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
                :class="{ 'text-brand border-b-2 border-brand': activeDropdown === 'contact' }"
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
                <NuxtLink to="/contact" :class="route.path === '/contact' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">联系我们</NuxtLink>
                <NuxtLink to="/contact/help-center" :class="route.path === '/contact/help-center' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">帮助中心</NuxtLink>
                <NuxtLink to="/contact/quality-guide" :class="route.path === '/contact/quality-guide' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">质量指南</NuxtLink>
                <NuxtLink to="/contact/download-media-kit" :class="route.path === '/contact/download-media-kit' ? 'block px-4 py-2 text-sm text-brand hover:bg-gray-50' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'">下载媒体资源包</NuxtLink>
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
              <img :src="menuIconSrc" alt="Menu" class="h-5 w-5" />
            </button>
          </div>
        </div>

        <!-- 移动端菜单 -->
        <div v-if="mobileMenuOpen" class="md:hidden border-t">
          <div class="px-0 py-0">
            <!-- 为什么选择我们 -->
            <div>
              <button 
                @click="toggleMobileDropdown('why')"
                class="w-full flex items-center justify-between px-4 py-4 font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-justify text-[#626671] border-b transition-colors"
                :class="mobileDropdown === 'why' ? 'border-[#3A82F9]' : 'border-gray-100'"
              >
                <span>为什么选择我们?</span>
                <img :src="openIconSrc" alt="Toggle" class="h-6 w-6 transition-transform -rotate-90" :class="{ 'rotate-0': mobileDropdown === 'why' }" />
              </button>
              <div v-if="mobileDropdown === 'why'" class="bg-white border-b border-gray-100">
                <NuxtLink to="/why/who-are-we" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">我们是谁</NuxtLink>
                <NuxtLink to="/why/advantages" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">我们的优势</NuxtLink>
                <NuxtLink to="/why/statistics" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">数据统计</NuxtLink>
                <NuxtLink to="/why/mobile-ads" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">移动广告</NuxtLink>
              </div>
            </div>
            
            <!-- 广告商 -->
            <div>
              <button 
                @click="toggleMobileDropdown('advertiser')"
                class="w-full flex items-center justify-between px-4 py-4 font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-justify text-[#626671] border-b transition-colors"
                :class="mobileDropdown === 'advertiser' ? 'border-[#3A82F9]' : 'border-gray-100'"
              >
                <span>广告商</span>
                <img :src="openIconSrc" alt="Toggle" class="h-6 w-6 transition-transform -rotate-90" :class="{ 'rotate-0': mobileDropdown === 'advertiser' }" />
              </button>
              <div v-if="mobileDropdown === 'advertiser'" class="bg-white border-b border-gray-100">
                <NuxtLink to="/advertiser/how-to-operate" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">如何操作</NuxtLink>
                <NuxtLink to="/advertiser/t1-dsp" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">T1 DSP</NuxtLink>
                <NuxtLink to="/advertiser/target-function" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">目标功能</NuxtLink>
              </div>
            </div>
            
            <!-- 广告样式 -->
            <NuxtLink 
              to="/ad-styles" 
              @click="mobileMenuOpen = false"
              class="w-full flex items-center px-4 py-4 font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-justify text-[#626671] border-b border-gray-100"
            >
              <span>广告样式</span>
            </NuxtLink>
            
            <!-- 联系我们 -->
            <div>
              <button 
                @click="toggleMobileDropdown('contact')"
                class="w-full flex items-center justify-between px-4 py-4 font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-justify text-[#626671] border-b transition-colors"
                :class="mobileDropdown === 'contact' ? 'border-[#3A82F9]' : 'border-gray-100'"
              >
                <span>联系我们</span>
                <img :src="openIconSrc" alt="Toggle" class="h-6 w-6 transition-transform -rotate-90" :class="{ 'rotate-0': mobileDropdown === 'contact' }" />
              </button>
              <div v-if="mobileDropdown === 'contact'" class="bg-white border-b border-gray-100">
                <NuxtLink to="/contact" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">联系我们</NuxtLink>
                <NuxtLink to="/contact/help-center" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">帮助中心</NuxtLink>
                <NuxtLink to="/contact/quality-guide" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">质量指南</NuxtLink>
                <NuxtLink to="/contact/download-media-kit" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">下载媒体资源包</NuxtLink>
              </div>
            </div>
            
            <!-- 登录和注册按钮 -->
            <div class="px-4 py-4 space-y-3 border-t border-gray-200">
              <NuxtLink to="/login" @click="mobileMenuOpen = false" class="block w-full text-center bg-brand text-white px-4 py-3 rounded-full text-base font-medium">登陆</NuxtLink>
              <NuxtLink to="/register" @click="mobileMenuOpen = false" class="block w-full text-center border-2 border-brand text-brand bg-white px-4 py-3 rounded-full text-base font-medium">注册</NuxtLink>
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
import menuIconSrc from '~/assets/imgaes/menu.svg'
import openIconSrc from '~/assets/imgaes/open.svg'

const route = useRoute()
const mobileMenuOpen = ref(false)
const activeDropdown = ref(null)
const mobileDropdown = ref(null)

const toggleDropdown = (name) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const toggleMobileDropdown = (name) => {
  mobileDropdown.value = mobileDropdown.value === name ? null : name
}

// 根据当前路由自动打开对应的下拉菜单
watch(() => route.path, (newPath) => {
  if (newPath.startsWith('/why/')) {
    activeDropdown.value = 'why'
  } else if (newPath.startsWith('/advertiser/')) {
    activeDropdown.value = 'advertiser'
  } else if (newPath.startsWith('/contact')) {
    activeDropdown.value = 'contact'
  }
}, { immediate: true })

// 点击外部关闭下拉菜单
onMounted(() => {
  const handleClickOutside = (event) => {
    const target = event.target
    // 检查点击是否在下拉菜单相关元素外部（包括按钮和下拉菜单本身）
    if (!target.closest('.relative.group')) {
      activeDropdown.value = null
    }
  }
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

