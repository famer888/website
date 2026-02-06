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
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- 标题和日期 -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ currentTab.title }}
        </h1>
        <p class="text-gray-600 text-sm md:text-base">
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
          <div v-if="activeTab === 'terms'">
            <TermsTermsContent />
          </div>
          <div v-else-if="activeTab === 'department'">
            <TermsDepartmentContent />
          </div>
          <div v-else v-html="currentTab.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TermsTermsContent from './components/TermsContent.vue'
import TermsDepartmentContent from './components/DepartmentContent.vue'

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
  terms: {
    title: '使用条款 | 广告商',
    lastUpdated: '2026年1月5日',
    intro: '访问本网站即表示您已同意本使用条款以及我们的各项政策，包括但不限于我们的推荐计划条款及细则、我们的商品广告政策和我们的隐私声明（以下统称"条款"）。如果您不打算受本条款的法律约束，则不得访问或使用我们的网站及任何服务。',
    content: ` `
  },
  department: {
    title: '规则与条例 | 广告商',
    lastUpdated: '2024年4月16日',
    intro: '本规则和条例规定了广告商在使用本平台时需要遵守的各项规定和标准。',
    content: ` `
  },
  privacy: {
    title: '隐私声明',
    lastUpdated: '2026年1月5日',
    intro: '我们重视您的隐私。本隐私声明说明了我们如何收集、使用和保护您的个人信息。',
    content: `
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">信息收集</h2>
        <p>我们收集的信息类型包括...</p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">信息使用</h2>
        <p>我们如何使用收集的信息...</p>
      </section>
    `
  },
  cookie: {
    title: 'Cookie 政策',
    lastUpdated: '2026年1月5日',
    intro: '本 Cookie 政策说明了我们如何使用 Cookie 和类似技术来改善您的浏览体验。',
    content: `
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">什么是 Cookie</h2>
        <p>Cookie 是存储在您设备上的小文本文件...</p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">我们如何使用 Cookie</h2>
        <p>我们使用 Cookie 来...</p>
      </section>
    `
  },
  sitemap: {
    title: '网站地图',
    lastUpdated: '2026年1月5日',
    intro: '网站地图帮助您快速找到所需的内容和页面。',
    content: `
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">主要页面</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><NuxtLink to="/" class="text-blue-600 hover:underline">首页</NuxtLink></li>
          <li><NuxtLink to="/why/who-are-we" class="text-blue-600 hover:underline">我们是谁</NuxtLink></li>
          <li><NuxtLink to="/why/advantages" class="text-blue-600 hover:underline">我们的优势</NuxtLink></li>
          <li><NuxtLink to="/advertiser/how-to-operate" class="text-blue-600 hover:underline">如何操作</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-blue-600 hover:underline">联系我们</NuxtLink></li>
        </ul>
      </section>
    `
  },
  contact: {
    title: '联系我们',
    lastUpdated: '2026年1月5日',
    intro: '如果您有任何问题或需要帮助，请通过以下方式联系我们。',
    content: `
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">联系方式</h2>
        <div class="space-y-4">
          <p><strong>电话：</strong>+44(20)4577-0610</p>
          <p><strong>地址：</strong>Aylo Freesites Ltd. Block 1, 195-197 Old Nicosia-Limassol Road Dali IndustrialZone, Nicosia, 2540 Cyprus</p>
        </div>
      </section>
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

/* 隐藏滚动条但保持滚动功能 */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
</style>

