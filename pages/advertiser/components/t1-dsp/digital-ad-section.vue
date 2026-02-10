<template>
  <FeatureCardsSection
    id="digital"
    title="体验真正的数字广告"
    :description="description"
    :items="items"
    bg-color="bg-white"
    :scroll-ref="scrollEl"
    :card-refs="cardEls"
    :active-index="activeIndex"
    :on-scroll="onScroll"
    :set-card-ref="setCardRef"
    cta-link="/ad-styles"
    cta-text="查看更多"
  />
</template>

<script setup>
import FeatureCardsSection from '~/components/FeatureCardsSection.vue'

const description =
  '借助 T1DSP，您可以构建更智能的数据驱动型广告系列，扩大覆盖范围，并制定策略以最大限度地提高投资回报率，同时控制高昂的成本。'

const items = [
  {
    title: '目标特征',
    desc: '利用我们的定向功能，精准触达目标受众。通过不同精细度的定向设置，掌控您的覆盖范围。',
    icon: 'advertiser-svg11',
  },
  {
    title: '自动化功能',
    desc: '利用我们的自动化功能，轻松扩展高效营销活动。使用自动驾驶等功能，帮助您的营销活动实现高投资回报率。',
    icon: 'advertiser-svg12',
  },
  {
    title: '优化功能',
    desc: '利用我们的优化功能，掌控您的广告系列效果。设定每次转化费用目标，我们的算法将自动优化您的广告系列效果。',
    icon: 'advertiser-svg13',
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
