<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-2xl font-bold text-gray-900">
              官网
            </NuxtLink>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink to="/" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                首页
              </NuxtLink>
              <NuxtLink to="/video" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                视频
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
        <div v-if="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NuxtLink 
              to="/" 
              class="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              @click="mobileMenuOpen = false"
            >
              首页
            </NuxtLink>
            <NuxtLink 
              to="/video" 
              class="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              @click="mobileMenuOpen = false"
            >
              视频
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main>
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="bg-white border-t mt-auto">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500 text-sm">
          © 2024 官网. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>

