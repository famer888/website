<template>
  <div class="min-h-screen bg-white">
    <!-- Tab 导航栏 - 固定定位 -->
    <div class="sticky top-0 z-50 bg-gray-50 border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto">
        <!-- 移动端：横向滚动 -->
        <nav class="flex items-center gap-4 md:gap-6 lg:gap-8 py-3 md:py-4 overflow-x-auto scrollbar-hide md:justify-center px-4 sm:px-6 lg:px-8">
          <NuxtLink
            to="/terms?tab=terms"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
            :class="activeTab === 'terms' ? 'text-blue-600 border-b-2 border-blue-600 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            使用条款
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=department"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
            :class="activeTab === 'department' ? 'text-blue-600 border-b-2 border-blue-600 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            部门制度
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=privacy"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
            :class="activeTab === 'privacy' ? 'text-blue-600 border-b-2 border-blue-600 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            隐私声明
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=cookie"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
            :class="activeTab === 'cookie' ? 'text-blue-600 border-b-2 border-blue-600 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            Cookie 政策
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=sitemap"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
            :class="activeTab === 'sitemap' ? 'text-blue-600 border-b-2 border-blue-600 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            网站地图
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=contact"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
            :class="activeTab === 'contact' ? 'text-blue-600 border-b-2 border-blue-600 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            联系我们
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <!-- 联系我们组件 -->
    <div v-if="activeTab === 'contact'" class="w-full">
      <ContactUsComponent />
    </div>
    
    <!-- 其他内容 -->
    <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" :class="{ 'max-w-7xl': activeTab === 'sitemap' }">
      <!-- 标题和日期 -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ currentTab.title }}
        </h1>
        <p v-if="activeTab !== 'sitemap' && activeTab !== 'contact'" class="text-gray-600 text-sm md:text-base">
          最后更新日期: {{ currentTab.lastUpdated }}
        </p>
      </div>

      <!-- 内容区域 -->
      <div class="prose max-w-none">
        <div class="text-gray-700 leading-relaxed space-y-6">
          <!-- 介绍段落 -->
          <p class="text-base">
            {{ currentTab.intro }}
          </p>

          <!-- 动态内容 -->
          <div v-html="currentTab.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PrivacyStatement } from '@/utils/constants'
import ContactUsComponent from './components/index.vue'
const route = useRoute()

// 根据查询参数确定当前tab，默认为使用条款
const activeTab = computed(() => {
  const tab = (Array.isArray(route.query.tab) ? route.query.tab[0] : route.query.tab) || 'terms'
  // 验证tab是否有效，如果无效则默认为terms
  const validTabs = ['terms', 'department', 'privacy', 'cookie', 'sitemap', 'contact']
  return validTabs.includes(tab) ? tab : 'terms'
})

// Tab内容配置
const tabsContent = {
  terms: TermsTermsContent,
  department: TermsDepartmentContent,
  privacy:PrivacyStatement,
  cookie: CookiePolicy,
  sitemap: WetmentbMap,
  contact: {
    title: '',
    lastUpdated: '',
    intro: '',
    content: `
     
    `
  }
}

// 当前tab的内容
const currentTab = computed(() => {
  return tabsContent[activeTab.value] || tabsContent.terms
})

// SEO 配置
useHead({
  title: `${currentTab.value.title} - T1`,
  meta: [
    { name: 'description', content: currentTab.value.intro }
  ]
})

// 监听路由变化，确保tab切换时页面滚动到顶部
watch(() => route.query.tab, () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
</script>

<style scoped>
.prose :deep(h2) {
  @apply text-2xl font-semibold text-gray-900 mb-4 mt-8;
}

.prose :deep(h3) {
  @apply text-xl font-semibold text-gray-900 mb-3 mt-6;
}

.prose :deep(p) {
  @apply mb-4 text-gray-700 leading-relaxed;
}

.prose :deep(ul) {
  @apply list-disc list-inside space-y-2 mb-4;
}

.prose :deep(li) {
  @apply text-gray-700;
}

/* 网站地图样式 */
.prose :deep(.sitemap-container) {
  @apply w-full;
}

.prose :deep(.sitemap-column) {
  @apply flex flex-col box-border;
}

.prose :deep(.sitemap-section) {
  @apply mb-6;
}

.prose :deep(.sitemap-heading) {
  @apply mb-4;
}

.prose :deep(.sitemap-heading a) {
  @apply text-blue-600 text-base md:text-lg font-medium pb-1 border-b-2 border-blue-600 inline-block;
  text-decoration: none;
}

.prose :deep(.sitemap-heading a:hover) {
  @apply text-blue-700;
}

.prose :deep(.sitemap-list) {
  @apply list-none pl-0 mt-4 space-y-2;
}

.prose :deep(.sitemap-list li) {
  @apply text-gray-700 text-sm md:text-base mb-2;
  list-style: none;
}

.prose :deep(.sitemap-list li a) {
  @apply text-gray-700 hover:text-blue-600 transition-colors;
  text-decoration: none;
}

/* 隐藏滚动条但保持滚动功能 */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
</style>

