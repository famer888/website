<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Tab 导航栏 - 固定定位 -->
    <!-- 移动端：可以滚动覆盖layout导航栏后固定；PC端：固定在layout导航栏下方 -->
    <div
      class="sticky top-0 md:top-16 z-[60] md:z-40 bg-gray-50 border-b border-gray-200 shadow-sm"
    >
      <div class="max-w-7xl mx-auto">
        <!-- 移动端：横向滚动 -->
        <nav
          class="flex items-center gap-4 md:gap-6 lg:gap-8 py-3 md:py-4 overflow-x-auto scrollbar-hide md:justify-center px-4 sm:px-6 lg:px-8"
        >
          <NuxtLink
            v-for="tab in tabs"
            :key="tab.id"
            :to="`/terms?tab=${tab.id}`"
            class="px-3 md:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
            :class="
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 pb-2'
                : 'text-gray-600 hover:text-gray-900'
            "
          >
            {{ tab.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- 主要内容区域 - 使用 flex-1 占据剩余空间 -->
    <div class="flex-1">
      <!-- 联系我们组件 (当activeTab为contact时) -->
      <div v-if="activeTab === 'contact'" class="w-full">
        <ContactUsComponent />
      </div>

      <!-- 其他内容 -->
      <div v-else>
        <div
          class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          :class="{ 'max-w-7xl': activeTab === 'sitemap' }"
        >
          <!-- 标题和日期 -->
          <div class="mb-8">
            <h1 class="text-3xl md:text-4xl font-bold md:text-[#626671] text-[#171A1D] mb-4">
              {{ currentTab.title }}
            </h1>
            <p v-if="activeTab !== 'sitemap' && activeTab !== 'contact'" class="text-[#626671] md:mt-[26px] mt-[12px] text-sm md:text-base">
              最后更新日期: {{ currentTab.lastUpdated }}
            </p>
          </div>

          <!-- 内容区域 -->
          <div class="prose max-w-none">
            <div class="text-gray-700 leading-relaxed space-y-6">
              <!-- 介绍段落 -->
              <p v-if="currentTab.intro" class="text-base mb-4 text-gray-700 leading-relaxed">
                {{ currentTab.intro }}
              </p>

              <!-- 动态内容 -->
              <div v-html="currentTab.content"></div>
            </div>
          </div>
        </div>

        <!-- 联系我们组件 -->
        <ContactSection />
      </div>
    </div>

    <!-- 页脚 - 固定在底部 -->
    <Footer />
  </div>
</template>

<script setup>
import { PrivacyStatement } from "@/utils/constants";
import ContactUsComponent from "./components/index.vue";
import ContactSection from "@/components/ContactSection.vue";
const route = useRoute();

// Tab 配置
const tabs = [
  { id: "terms", label: "使用条款" },
  { id: "department", label: "规则与条例" },
  { id: "privacy", label: "隐私声明" },
  { id: "cookie", label: "Cookie 政策" },
  { id: "sitemap", label: "网站地图" },
  { id: "contact", label: "联系我们" },
];

// 根据查询参数确定当前tab，默认为使用条款
const activeTab = computed(() => {
  const tab =
    (Array.isArray(route.query.tab) ? route.query.tab[0] : route.query.tab) ||
    "terms";
  // 验证tab是否有效，如果无效则默认为terms
  const validTabs = tabs.map((t) => t.id);
  return validTabs.includes(tab) ? tab : "terms";
});

// Tab内容配置
const tabsContent = {
  terms: TermsTermsContent,
  department: TermsDepartmentContent,
  privacy: PrivacyStatement,
  cookie: CookiePolicy,
  sitemap: WetmentbMap,
};

// 当前tab的内容
const currentTab = computed(() => {
  return tabsContent[activeTab.value] || tabsContent.terms;
});

// SEO 配置
useHead({
  title: `${currentTab.value.title} - T1`,
  meta: [{ name: "description", content: currentTab.value.intro }],
});

// 监听路由变化，确保tab切换时页面滚动到顶部
watch(
  () => route.query.tab,
  () => {
    if (process.client) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
);
</script>

<style scoped>
/* 使用 Tailwind @apply 为 v-html 插入的内容添加样式 */
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
