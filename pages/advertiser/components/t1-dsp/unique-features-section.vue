<template>
  <FeatureCardsSection
    id="unique"
    title="我们的独特之处是什么?"
    :description="description"
    :items="items"
    bg-color="bg-[#F5F7FB]"
    :scroll-ref="scrollEl"
    :card-refs="cardEls"
    :active-index="activeIndex"
    :on-scroll="onScroll"
    :set-card-ref="setCardRef"
  />
</template>

<script setup>
import FeatureCardsSection from './FeatureCardsSection.vue'

const description =
  '借助我们强大的技术，助您实现广告目标，该技术可帮助您以程序化方式购买广告位。利用我们全新优化的引擎，把握最适合您广告系列的机遇。'

const items = [
  {
    title: '透明报表与可追溯对账',
    desc: '提供投放报表与交付核验，口径清晰可追溯，便于复盘与对账结算。',
    icon: 'advertiser-svg8',
  },
  {
    title: '优质媒体资源覆盖',
    desc: '覆盖多地区优质媒体资源，支持视频、展示等常见广告形式，满足不同投放需求。',
    icon: 'advertiser-svg9',
  },
  {
    title: '对接式上线更省心',
    desc: '从需求确认到资源匹配与排期上线，流程清晰可控，降低沟通与返工成本。',
    icon: 'advertiser-svg10',
  },
]

// 滚动逻辑
const scrollEl = ref(null)
const cardEls = ref([])
const activeIndex = ref(0)

const setCardRef = (el, idx) => {
  if (el) cardEls.value[idx] = el
}

const calcActiveIndex = (containerEl, cards) => {
  if (!containerEl || !cards?.length) return 0
  const containerRect = containerEl.getBoundingClientRect()
  const containerCenter = containerRect.left + containerRect.width / 2
  let bestIdx = 0
  let bestDist = Infinity
  cards.forEach((el, idx) => {
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

const onScroll = () => {
  activeIndex.value = calcActiveIndex(scrollEl.value, cardEls.value)
}

onMounted(() => {
  nextTick(() => onScroll())
})
</script>
