<template>
  <div class="min-h-screen bg-white">
    <!-- Tab 导航栏 -->
    <div class="bg-gray-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 py-3 md:py-4">
          <NuxtLink
            to="/terms?tab=terms"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            :class="activeTab === 'terms' ? 'text-gray-900 border-b-2 border-gray-900 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            使用条款
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=department"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            :class="activeTab === 'department' ? 'text-gray-900 border-b-2 border-gray-900 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            部门制度
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=privacy"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            :class="activeTab === 'privacy' ? 'text-gray-900 border-b-2 border-gray-900 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            隐私声明
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=cookie"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            :class="activeTab === 'cookie' ? 'text-gray-900 border-b-2 border-gray-900 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            Cookie 政策
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=sitemap"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            :class="activeTab === 'sitemap' ? 'text-gray-900 border-b-2 border-gray-900 pb-2' : 'text-gray-600 hover:text-gray-900'"
          >
            网站地图
          </NuxtLink>
          <NuxtLink
            to="/terms?tab=contact"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            :class="activeTab === 'contact' ? 'text-gray-900 border-b-2 border-gray-900 pb-2' : 'text-gray-600 hover:text-gray-900'"
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
          <div v-html="currentTab.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    intro: '通过访问和使用本网站，您同意遵守以下使用条款和条件。如果您不同意这些条款，请不要使用本网站。',
    content: `
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. 解释</h2>
        <div class="space-y-4">
          <div>
            <p class="mb-2"><strong>"广告位"</strong> 指卖方网站或电子邮件通讯等资产，用于提供广告空间。</p>
          </div>
          <div>
            <p class="mb-2"><strong>"广告"</strong> 指所有形式的数字文本、图形、富媒体和其他广告。</p>
          </div>
          <div>
            <p class="mb-2"><strong>"T1"</strong> 指 Aylo Freesites Ltd.。</p>
          </div>
          <div>
            <p class="mb-2"><strong>"会员"</strong> 指网站上的任何账户，包括买方和卖方。</p>
          </div>
          <div>
            <p class="mb-2"><strong>"网站"</strong> 指 T1 网站，域名为 www.T1.com。</p>
          </div>
          <div>
            <p class="mb-2"><strong>"您"、"您的"和"用户"</strong> 指访问 T1 网站的任何人员。</p>
          </div>
        </div>
        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">一般解释</h3>
          <p>单数形式的词语包括复数形式，反之亦然。性别特定的词语包括所有性别。指代人员的词语包括个人、团体和公司。</p>
        </div>
      </section>
    `
  },
  department: {
    title: '部门制度',
    lastUpdated: '2026年1月5日',
    intro: '本部门制度规定了公司各部门的职责、工作流程和管理规范。',
    content: `
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">部门制度内容</h2>
        <p>部门制度详细内容将在此处显示...</p>
      </section>
    `
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
</style>

