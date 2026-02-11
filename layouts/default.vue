<template>
  <div class="min-h-screen bg-white">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm sticky top-0 z-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 relative">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <img :src="logoImageSrc" alt="T1 Logo" class="h-10 w-auto" />
            </NuxtLink>
          </div>

          <!-- PC端导航 - 居中 -->
          <div class="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <!-- 为什么选择我们 -->
            <div class="relative group">
              <button @click="toggleDropdown('why')"
                class="flex items-center hover:text-brand px-3 py-2 text-sm font-medium transition-colors rounded-[24px] h-12 w-[180px] justify-center whitespace-nowrap"
                :class="activeDropdown === 'why' || route.path.startsWith('/why/') ? 'text-brand' : 'text-gray-700'">
                {{ getWhyMenuText }}
                <svg class="ml-1 h-4 w-4" :class="{ 'rotate-180': activeDropdown === 'why' }" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="activeDropdown === 'why' || route.path.startsWith('/why/')"
                class="absolute left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brand" style="bottom: -8px;"></div>
              <div v-if="activeDropdown === 'why'"
                class="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <NuxtLink to="/why/who-are-we"
                  :class="route.path === '/why/who-are-we' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  我们是谁</NuxtLink>
                <NuxtLink to="/why/advantages"
                  :class="route.path === '/why/advantages' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  我们的优势</NuxtLink>
                <NuxtLink to="/why/statistics"
                  :class="route.path === '/why/statistics' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  数据统计</NuxtLink>
                <NuxtLink to="/why/mobile-ads"
                  :class="route.path === '/why/mobile-ads' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  移动广告</NuxtLink>
              </div>
            </div>

            <!-- 广告商 -->
            <div class="relative group">
              <button @click="toggleDropdown('advertiser')"
                class="flex items-center hover:text-brand px-3 py-2 text-sm font-medium transition-colors rounded-[24px] h-12 w-[100px] justify-center"
                :class="activeDropdown === 'advertiser' || route.path.startsWith('/advertiser/') ? 'text-brand' : 'text-gray-700'">
                {{ getAdvertiserMenuText }}
                <svg class="ml-1 h-4 w-4" :class="{ 'rotate-180': activeDropdown === 'advertiser' }" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="activeDropdown === 'advertiser' || route.path.startsWith('/advertiser/')"
                class="absolute left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brand" style="bottom: -8px;"></div>
              <div v-if="activeDropdown === 'advertiser'"
                class="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <NuxtLink to="/advertiser/how-to-operate"
                  :class="route.path === '/advertiser/how-to-operate' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  如何操作</NuxtLink>
                <NuxtLink to="/advertiser/t1-dsp"
                  :class="route.path === '/advertiser/t1-dsp' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  T1 DSP</NuxtLink>
                <NuxtLink to="/advertiser/target-function"
                  :class="route.path === '/advertiser/target-function' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  目标功能</NuxtLink>
              </div>
            </div>

            <!-- 广告样式 -->
            <NuxtLink to="/ad-styles"
              class="text-gray-700 hover:text-brand px-3 py-2 text-sm font-medium transition-colors rounded-[24px] h-12 flex items-center justify-center w-[100px]"
              :class="{ 'text-brand bg-[#F7F7FA]': route.path === '/ad-styles' }">
              广告样式
            </NuxtLink>

            <!-- 联系我们 -->
            <div class="relative group">
              <button @click="toggleDropdown('contact')"
                class="flex items-center hover:text-brand px-3 py-2 text-sm font-medium transition-colors rounded-[24px] h-12 w-[120px] justify-center"
                :class="activeDropdown === 'contact' || route.path.startsWith('/contact') ? 'text-brand' : 'text-gray-700'">
                {{ getContactMenuText }}
                <svg class="ml-1 h-4 w-4" :class="{ 'rotate-180': activeDropdown === 'contact' }" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="activeDropdown === 'contact' || route.path.startsWith('/contact')"
                class="absolute left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brand" style="bottom: -8px;"></div>
              <div v-if="activeDropdown === 'contact'"
                class="absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <NuxtLink to="/contact"
                  :class="route.path === '/contact' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  联系我们</NuxtLink>
                <NuxtLink to="/contact/help-center"
                  :class="route.path === '/contact/help-center' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  帮助中心</NuxtLink>
                <NuxtLink to="/contact/quality-guide"
                  :class="route.path === '/contact/quality-guide' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">
                  质量指南</NuxtLink>
                <!-- <NuxtLink to="/contact/download-media-kit" :class="route.path === '/contact/download-media-kit' ? 'block mx-2 px-3 py-2 text-sm text-brand rounded-lg hover:bg-[#5380DD19]' : 'block mx-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#5380DD19]'">下载媒体资源包</NuxtLink> -->
              </div>
            </div>
          </div>

          <!-- 登录和注册 / 广告主管理 (已隐藏注册登录) -->
          <div class="hidden md:flex items-center space-x-4 ml-4">
            <!-- 已登录状态：显示广告主管理按钮 -->
            <template v-if="isLoggedIn">
              <button @click="goToAdminDashboard"
                class="bg-brand text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                广告主管理
              </button>
            </template>
          </div>

          <!-- 移动端菜单按钮 -->
          <div class="md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-700 hover:text-gray-900 focus:outline-none">
              <img :src="menuIconSrc" alt="Menu" class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- 移动端菜单 - 固定定位抽屉，从导航栏下方开始 -->
    <Transition name="drawer">
      <div v-if="mobileMenuOpen" class="md:hidden fixed top-16 left-0 right-0 bottom-0 z-[60]">
        <!-- 背景遮罩 -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm drawer-backdrop" @click="mobileMenuOpen = false">
        </div>

        <!-- 抽屉内容 - 从右侧滑出 -->
        <div class="absolute inset-0 bg-white px-6 shadow-lg overflow-y-auto drawer-content">
          <div class="px-0 py-0">
            <!-- 为什么选择我们 -->
            <div>
              <button @click="toggleMobileDropdown('why')"
                class="w-full flex items-center justify-between px-4 py-4 font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-justify text-[#626671] border-b transition-colors"
                :class="mobileDropdown === 'why' ? 'border-[#3A82F9]' : 'border-gray-100'">
                <span>为什么选择我们?</span>
                <img :src="openIconSrc" alt="Toggle" class="h-6 w-6 transition-transform -rotate-90"
                  :class="{ 'rotate-0': mobileDropdown === 'why' }" />
              </button>
              <div v-if="mobileDropdown === 'why'" class="bg-white border-b border-gray-100">
                <NuxtLink to="/why/who-are-we" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  我们是谁</NuxtLink>
                <NuxtLink to="/why/advantages" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  我们的优势</NuxtLink>
                <NuxtLink to="/why/statistics" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  数据统计</NuxtLink>
                <NuxtLink to="/why/mobile-ads" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  移动广告</NuxtLink>
              </div>
            </div>

            <!-- 广告商 -->
            <div>
              <button @click="toggleMobileDropdown('advertiser')"
                class="w-full flex items-center justify-between px-4 py-4 font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-justify text-[#626671] border-b transition-colors"
                :class="mobileDropdown === 'advertiser' ? 'border-[#3A82F9]' : 'border-gray-100'">
                <span>广告商</span>
                <img :src="openIconSrc" alt="Toggle" class="h-6 w-6 transition-transform -rotate-90"
                  :class="{ 'rotate-0': mobileDropdown === 'advertiser' }" />
              </button>
              <div v-if="mobileDropdown === 'advertiser'" class="bg-white border-b border-gray-100">
                <NuxtLink to="/advertiser/how-to-operate" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  如何操作</NuxtLink>
                <NuxtLink to="/advertiser/t1-dsp" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  T1 DSP</NuxtLink>
                <NuxtLink to="/advertiser/target-function" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  目标功能</NuxtLink>
              </div>
            </div>

            <!-- 广告样式 -->
            <NuxtLink to="/ad-styles" @click="mobileMenuOpen = false"
              class="w-full flex items-center px-4 py-4 font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-justify text-[#626671] border-b border-gray-100">
              <span>广告样式</span>
            </NuxtLink>

            <!-- 联系我们 -->
            <div>
              <button @click="toggleMobileDropdown('contact')"
                class="w-full flex items-center justify-between px-4 py-4 font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-justify text-[#626671] border-b transition-colors"
                :class="mobileDropdown === 'contact' ? 'border-[#3A82F9]' : 'border-gray-100'">
                <span>联系我们</span>
                <img :src="openIconSrc" alt="Toggle" class="h-6 w-6 transition-transform -rotate-90"
                  :class="{ 'rotate-0': mobileDropdown === 'contact' }" />
              </button>
              <div v-if="mobileDropdown === 'contact'" class="bg-white border-b border-gray-100">
                <NuxtLink to="/contact" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  联系我们</NuxtLink>
                <NuxtLink to="/contact/help-center" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  帮助中心</NuxtLink>
                <NuxtLink to="/contact/quality-guide" @click="mobileMenuOpen = false"
                  class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">
                  质量指南</NuxtLink>
                <!-- <NuxtLink to="/contact/download-media-kit" @click="mobileMenuOpen = false" class="block px-8 py-3.5 font-pingfang font-normal text-[14px] leading-[20px] tracking-normal text-justify text-[#93959c]">下载媒体资源包</NuxtLink> -->
              </div>
            </div>

            <!-- 登录和注册按钮 / 广告主管理 (已隐藏注册登录) -->
            <div class="px-[2px] pt-12 pb-4 flex flex-col gap-4 border-gray-200">
              <!-- 已登录状态：显示广告主管理按钮 -->
              <template v-if="isLoggedIn">
                <button @click="mobileMenuOpen = false; goToAdminDashboard()"
                  class="block w-full text-center bg-brand text-white px-4 py-3 rounded-full text-base font-medium">
                  广告主管理
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </Transition>

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

// 认证状态
const { isLoggedIn, goToAdminDashboard } = useAuth()

// 判断是否是开发环境
const isDev = import.meta.dev

// 获取登录/注册跳转地址
const authUrl = computed(() => {
  // 如果是开发环境，使用原来的地址
  if (isDev) {
    return 'https://officialauth.adcs01.top/'
  }
  // 如果是生产环境，使用当前域名拼接 /login
  // 在服务端渲染时，返回相对路径（浏览器会自动解析为当前域名）
  // 在客户端，使用 window.location.origin 获取完整域名
  if (process.client) {
    console.log(window.location.origin);
    console.log('生产环境');

    return `${window.location.origin}/login`
  }
  // 服务端渲染时返回相对路径
  return '/login'
})

// 获取链接的 target 属性
const linkTarget = computed(() => isDev ? '_blank' : '_self')

// 获取链接的 rel 属性
const linkRel = computed(() => isDev ? 'noopener noreferrer' : '')

// 根据路由获取菜单显示文本
const getWhyMenuText = computed(() => {
  if (route.path === '/why/who-are-we') return '我们是谁'
  if (route.path === '/why/advantages') return '我们的优势'
  if (route.path === '/why/statistics') return '数据统计'
  if (route.path === '/why/mobile-ads') return '移动广告'
  return '为什么选择我们?'
})

const getAdvertiserMenuText = computed(() => {
  if (route.path === '/advertiser/how-to-operate') return '如何操作'
  if (route.path === '/advertiser/t1-dsp') return 'T1 DSP'
  if (route.path === '/advertiser/target-function') return '目标功能'
  return '广告商'
})

const getContactMenuText = computed(() => {
  if (route.path === '/contact') return '联系我们'
  if (route.path === '/contact/help-center') return '帮助中心'
  if (route.path === '/contact/quality-guide') return '质量指南'
  // if (route.path === '/contact/download-media-kit') return '下载媒体资源包'
  return '联系我们'
})

const toggleDropdown = (name) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
  // 如果用户手动关闭了下拉菜单，记录到 sessionStorage
  if (activeDropdown.value === null) {
    if (process.client) {
      sessionStorage.setItem('dropdownClosed', 'true')
      sessionStorage.setItem('closedDropdownPath', route.path)
    }
  }
}

const toggleMobileDropdown = (name) => {
  mobileDropdown.value = mobileDropdown.value === name ? null : name
}

// 标记是否是首次加载
const isFirstLoad = ref(true)

// 根据当前路由自动打开对应的下拉菜单
watch(() => route.path, (newPath) => {
  // 首次加载时，不在这里处理，由 onMounted 处理
  if (isFirstLoad.value) {
    return
  }

  // 非首次加载（路由变化），清除关闭标记
  if (process.client) {
    sessionStorage.removeItem('dropdownClosed')
    sessionStorage.removeItem('closedDropdownPath')
  }

  // 根据路由决定是否打开下拉菜单
  if (newPath.startsWith('/why/')) {
    activeDropdown.value = 'why'
  } else if (newPath.startsWith('/advertiser/')) {
    activeDropdown.value = 'advertiser'
  } else if (newPath.startsWith('/contact')) {
    activeDropdown.value = 'contact'
  } else {
    activeDropdown.value = null
  }
}, { immediate: true })

// 点击外部关闭下拉菜单
onMounted(() => {
  if (process.client) {
    // 刷新时，先关闭所有下拉菜单（模拟点击外部的行为）
    activeDropdown.value = null

    // 检查用户是否在当前路径手动关闭了下拉菜单
    const dropdownClosed = sessionStorage.getItem('dropdownClosed') === 'true'
    const closedDropdownPath = sessionStorage.getItem('closedDropdownPath')

    // 如果用户在当前路径手动关闭过下拉菜单，则不自动打开
    if (!(dropdownClosed && closedDropdownPath === route.path)) {
      // 如果用户没有手动关闭过，根据路由决定是否打开下拉菜单
      if (route.path.startsWith('/why/')) {
        activeDropdown.value = 'why'
      } else if (route.path.startsWith('/advertiser/')) {
        activeDropdown.value = 'advertiser'
      } else if (route.path.startsWith('/contact')) {
        activeDropdown.value = 'contact'
      }
    }

    // 标记首次加载完成
    isFirstLoad.value = false

    const handleClickOutside = (event) => {
      const target = event.target
      // 检查点击是否在下拉菜单相关元素外部（包括按钮和下拉菜单本身）
      if (!target.closest('.relative.group')) {
        activeDropdown.value = null
        // 记录用户手动关闭了下拉菜单
        sessionStorage.setItem('dropdownClosed', 'true')
        sessionStorage.setItem('closedDropdownPath', route.path)
      }
    }
    document.addEventListener('click', handleClickOutside)

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })
  }
})
</script>

<style scoped>
/* 抽屉整体过渡 - 从右侧滑入 */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active .drawer-content,
.drawer-leave-active .drawer-content {
  transition: transform 0.3s ease;
}

.drawer-enter-active .drawer-backdrop,
.drawer-leave-active .drawer-backdrop {
  transition: opacity 0.3s ease;
}

.drawer-enter-from {
  opacity: 0;
}

.drawer-enter-from .drawer-content {
  transform: translateX(100%);
}

.drawer-enter-from .drawer-backdrop {
  opacity: 0;
}

.drawer-enter-to {
  opacity: 1;
}

.drawer-enter-to .drawer-content {
  transform: translateX(0);
}

.drawer-enter-to .drawer-backdrop {
  opacity: 1;
}

.drawer-leave-from {
  opacity: 1;
}

.drawer-leave-from .drawer-content {
  transform: translateX(0);
}

.drawer-leave-from .drawer-backdrop {
  opacity: 1;
}

.drawer-leave-to {
  opacity: 0;
}

.drawer-leave-to .drawer-content {
  transform: translateX(100%);
}

.drawer-leave-to .drawer-backdrop {
  opacity: 0;
}
</style>
