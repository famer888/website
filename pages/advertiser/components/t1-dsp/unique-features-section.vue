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
    title: '数据驱动型营销活动',
    desc: '利用我们的数据报告功能，您可以免费查看您的广告系列效果。',
    icon: 'advertiser-svg8',
  },
  {
    title: '高质量库存',
    desc: '立即接触全球各地的独特受众并享受来自我们出版商网站的独家优质广告资源。',
    icon: 'advertiser-svg9',
  },
  {
    title: '智能营销活动',
    desc: '利用我们优化的营销活动创建流程，打造更好、更有针对性、更精准的营销活动。',
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
