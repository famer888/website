<template>
  <!-- 浏览器和操作系统功能（3 卡片） -->
  <section class="bg-[#F5F7FB] py-14 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3
        class="font-pingfang font-medium text-[36px] md:text-[56px] leading-[56px] md:leading-[96px] tracking-normal text-[#111827] text-center mb-2 md:mb-6">
        浏览器和操作系统功能
      </h3>
      <p
        class="font-pingfang font-normal text-left md:text-center text-[16px] md:text-[18px] leading-[26px] md:leading-[26px] tracking-normal text-[#93959C] max-w-[760px] mx-auto mb-12 md:mb-24">
        充分利用我们的浏览器和操作系统功能，根据用户使用的技术找到合适的受众。
      </p>

      <!-- PC：3 列 -->
      <div class="hidden md:grid grid-cols-3 gap-6">
        <div v-for="item in browserOsFeatures" :key="item.title"
          class="bg-white rounded-[12px] xl:w-[373px] xl:h-[480px] shadow-[0_2px_24px_0_rgba(0,0,0,0.096)] border-none p-8 md:pt-[55px] flex flex-col items-center justify-start mx-auto max-w-[90vw]">
          <SvgIcon :name="item.icon"
            class="w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] mx-auto mb-4 md:mb-[44px] object-contain" alt="图标" />
          <h4
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[27px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-3 md:mb-[25px] text-center w-full">
            {{ item.title }}
          </h4>
          <p
            class="font-pingfang font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[24px] md:leading-[27px] tracking-normal text-[#626671] text-left w-full">
            {{ item.desc }}
          </p>
        </div>
      </div>

      <!-- H5：横向滑动 + 圆点 -->
      <div class="md:hidden">
        <div ref="browserScrollEl"
          class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          @scroll.passive="onBrowserScroll">
          <div v-for="(item, idx) in browserOsFeatures" :key="item.title" :ref="(el) => setBrowserCardRef(el, idx)"
            class="w-[260px] h-[266px] snap-center shrink-0 bg-white rounded-[12px] shadow-[0_5px_8px_-2px_rgba(0,0,0,0.025),0_2px_3px_-1px_rgba(0,0,0,0.01)] border border-[#EEF0F4] p-4 py-12 flex flex-col items-center justify-center">
            <SvgIcon :name="item.icon" class="w-[80px] h-[80px] mx-auto mb-6 object-contain" alt="图标" />
            <h4
              class="font-pingfang font-medium text-[18px] leading-[27px] tracking-normal text-[#111827] mb-3 text-center w-full">
              {{ item.title }}
            </h4>
            <p
              class="font-pingfang font-normal text-[14px] leading-[21px] tracking-normal text-[#626671] text-left w-full">
              {{ item.desc }}
            </p>
          </div>
        </div>
        <div class="flex justify-center gap-2 mt-2">
          <span v-for="(_, i) in browserOsFeatures" :key="i" class="w-2 h-2 rounded-full transition-colors"
            :class="activeBrowserIndex === i ? 'bg-brand' : 'bg-[#D8DDE6]'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SvgIcon from '~/components/SvgIcon.vue'

const browserOsFeatures = [
  {
    title: '操作系统目标',
    desc: '此功能允许您按操作系统(例如 Windows.macOS、iOS、Android等)对受众进行细分。',
    icon: 'advertiser-svg24',
  },
  {
    title: '浏览器语言定向',
    desc: '您可以根据目标受众，选择包含或排除最多 5 种语言。',
    icon: 'advertiser-svg25',
  },
  {
    title: '浏览器定位',
    desc: '根据用户选择的浏览器定位目标受众。如果您的广告素材不符合Google的广告体验滥用规则，此功能非常有用。',
    icon: 'advertiser-svg26',
  },
]

const browserScrollEl = ref(null)
const browserCardEls = ref([])
const activeBrowserIndex = ref(0)

const setBrowserCardRef = (el, idx) => {
  if (el) browserCardEls.value[idx] = el
}

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

const onBrowserScroll = () => {
  activeBrowserIndex.value = calcActiveIndex(
    browserScrollEl.value,
    browserCardEls.value,
  )
}

onMounted(() => {
  nextTick(() => {
    onBrowserScroll()
  })
})
</script>
