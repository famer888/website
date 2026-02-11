<template>
  <div class="bg-white">
    <!-- Hero（1920x560 顶图，自适应） -->
    <HeroSection />

    <!-- 了解你的受众 -->
    <AudienceSection />

    <!-- 卡片列表部分 -->
    <FeatureCardsSection
      v-for="section in cardSections"
      :key="section.id"
      :id="section.id"
      :title="section.title"
      :description="section.description"
      :items="section.items"
      :bg-color="section.bgColor"
      :scroll-ref="section.scrollRef"
      :card-refs="section.cardRefs"
      :active-index="section.activeIndex"
      :on-scroll="section.onScroll"
      :set-card-ref="section.setCardRef"
    />

    <!-- 设备和网络功能（4 卡片） -->
    <DeviceNetworkSection />

    <!-- 浏览器和操作系统功能（3 卡片） -->
    <BrowserOsSection />

    <!-- 底部 CTA（双按钮） -->
    <CtaSection />

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import FeatureCardsSection from '~/components/FeatureCardsSection.vue'
import HeroSection from './components/target-function/hero-section.vue'
import AudienceSection from './components/target-function/audience-section.vue'
import DeviceNetworkSection from './components/target-function/device-network-section.vue'
import BrowserOsSection from './components/target-function/browser-os-section.vue'
import CtaSection from './components/target-function/cta-section.vue'

// SEO 配置
useHead({
  title: '目标功能 - T1',
  meta: [
    {
      name: 'description',
      content:
        '了解 T1 目标功能：受众定向、优化与自动化、设备与网络、浏览器与操作系统能力。',
    },
  ],
})

// 数据
const targetFeatures = [
  {
    title: '地点',
    desc: '无论目标受众身在何处，都能精准触达他们。根据他们的位置和距离，传递恰当的信息。',
    icon: 'advertiser-svg14',
  },
  {
    title: '人口统计',
    desc: '根据受众的人口统计信息，构建、定位或筛选广告系列的受众群体。',
    icon: 'advertiser-svg15',
  },
  {
    title: '关键词',
    desc: '利用关键词、搜索词和其他上下文目标，根据访客的喜好来定位您的广告系列。',
    icon: 'advertiser-svg16',
  },
]

const optimizationFeatures = [
  {
    title: '竞标者',
    desc: '设定目标每次转化费用(CPA)，让我们的算法自动优化您的竞价。',
    icon: 'advertiser-svg17',
  },
  {
    title: '规则',
    desc: '我们的规则功能允许您定义特定的行为模式，并剔除转化率低的来源。',
    icon: 'advertiser-svg18',
  },
  {
    title: '自动驾驶仪',
    desc: '使用自动投放功能，让您的广告自动运行。确保将最具吸引力和转化率的广告展示给潜在客户。',
    icon: 'advertiser-svg19',
  },
]

// 通用滚动逻辑
const createScrollHandler = (scrollEl, cardEls, activeIndex) => {
  const calcActiveIndex = (containerEl, cardEls) => {
    if (!containerEl || !cardEls?.length) return 0
    const containerRect = containerEl.getBoundingClientRect()
    const containerCenter = containerRect.left + containerRect.width / 2
    let bestIdx = 0
    let bestDist = Infinity
    cardEls.forEach((el, idx) => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.left + rect.width / 2
      const dist = Math.abs(center - containerCenter)
      if (dist < bestDist) {
        bestDist = dist
        bestIdx = idx
      }
    })
    return bestIdx
  }
  return () => {
    activeIndex.value = calcActiveIndex(scrollEl.value, cardEls.value)
  }
}

// 卡片部分配置
const targetScrollEl = ref(null)
const optScrollEl = ref(null)
const targetCardEls = ref([])
const optCardEls = ref([])
const activeTargetIndex = ref(0)
const activeOptIndex = ref(0)

const setTargetCardRef = (el, idx) => {
  if (el) targetCardEls.value[idx] = el
}

const setOptCardRef = (el, idx) => {
  if (el) optCardEls.value[idx] = el
}

const cardSections = [
  {
    id: 'target',
    title: '目标功能',
    description:
      '掌控您的广告系列效果。使用地理位置、人口统计和关键词等功能，达成您的广告系列目标。',
    items: targetFeatures,
    bgColor: 'bg-white',
    scrollRef: targetScrollEl,
    cardRefs: targetCardEls,
    activeIndex: activeTargetIndex,
    onScroll: createScrollHandler(
      targetScrollEl,
      targetCardEls,
      activeTargetIndex,
    ),
    setCardRef: setTargetCardRef,
  },
  {
    id: 'optimization',
    title: '优化与自动化',
    description:
      '即使在高峰状态下，您也可以使用我们的先进自动化和优化功能来优化广告系列的效果。自动竞价、优化广告来源和控制总体成本，从未如此简单。',
    items: optimizationFeatures,
    bgColor: 'bg-[#F5F7FB]',
    scrollRef: optScrollEl,
    cardRefs: optCardEls,
    activeIndex: activeOptIndex,
    onScroll: createScrollHandler(optScrollEl, optCardEls, activeOptIndex),
    setCardRef: setOptCardRef,
  },
]

onMounted(() => {
  nextTick(() => {
    cardSections.forEach((section) => {
      if (section.onScroll) section.onScroll()
    })
  })
})
</script>
