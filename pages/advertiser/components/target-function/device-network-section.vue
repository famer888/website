<template>
  <!-- 设备和网络功能（4 卡片） -->
  <section class="bg-white py-14 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3
        class="font-pingfang font-medium tracking-normal text-[#111827] text-center text-[36px] md:text-[56px] leading-[56px] md:leading-[96px] mb-6"
      >
        设备和网络功能
      </h3>
      <p
        class="font-pingfang font-normal text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-normal text-[#93959C] max-w-[560px] mx-auto mb-8"
      >
        此功能允许您根据特定条件（例如 ISP、移动设备、IP
        地址和设备）来定向投放广告，深入了解并精准触达目标受众。
      </p>

      <!-- PC：2x2 -->
      <div class="hidden md:grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div
          v-for="item in deviceNetworkFeatures"
          :key="item.title"
          class="bg-white rounded-[12px] xl:w-[582px] xl:h-[220px] shadow-[0_2px_24px_0_rgba(0,0,0,0.096)] border-none p-8 flex gap-6 items-center max-w-[90vw]"
        >
          <SvgIcon
            :name="item.icon"
            class="w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] object-contain flex-shrink-0"
            alt="图标"
          />
          <div class="flex-1">
            <h4
              class="font-pingfang font-medium text-[28px] leading-[36px] tracking-normal text-[#111827] mb-4"
            >
              {{ item.title }}
            </h4>
            <p
              class="font-pingfang font-normal text-[18px] leading-[26px] tracking-normal text-[#626671]"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- H5：横向滑动 + 圆点 -->
      <div class="md:hidden">
        <div
          ref="deviceScrollEl"
          class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          @scroll.passive="onDeviceScroll"
        >
          <div
            v-for="(item, idx) in deviceNetworkFeatures"
            :key="item.title"
            :ref="(el) => setDeviceCardRef(el, idx)"
            class="w-[260px] h-[266px] snap-center shrink-0 bg-white rounded-[12px] shadow-[0_5px_8px_-2px_rgba(0,0,0,0.025),0_2px_3px_-1px_rgba(0,0,0,0.01)] border border-[#EEF0F4] p-4 py-12 flex flex-col items-center justify-center"
          >
            <SvgIcon
              :name="item.icon"
              class="w-[80px] h-[80px] mx-auto mb-6 object-contain"
              alt="图标"
            />
            <h4
              class="font-pingfang font-medium text-[18px] leading-[27px] tracking-normal text-[#111827] mb-3 text-center w-full"
            >
              {{ item.title }}
            </h4>
            <p
              class="font-pingfang font-normal text-[14px] leading-[21px] tracking-normal text-[#626671] text-left w-full"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
        <div class="flex justify-center gap-2 mt-2">
          <span
            v-for="(_, i) in deviceNetworkFeatures"
            :key="i"
            class="w-2 h-2 rounded-full transition-colors"
            :class="activeDeviceIndex === i ? 'bg-brand' : 'bg-[#D8DDE6]'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SvgIcon from '~/components/SvgIcon.vue'

const deviceNetworkFeatures = [
  {
    title: '设备目标定位',
    desc: '通过台式机、平板电脑和移动设备与受众互动，传递有影响力的信息。',
    icon: 'advertiser-svg20',
  },
  {
    title: 'IP定位',
    desc: '根据特定 IP 地址定位访客，或定义IP 地址范围来定位您的受众。',
    icon: 'advertiser-svg21',
  },
  {
    title: 'ISP 目标定位',
    desc: '按无线运营商或互联网服务提供商锁定目标受众。可访问包含数千家全球移动互联网服务提供商的庞大列表。',
    icon: 'advertiser-svg22',
  },
  {
    title: '移动连接',
    desc: '根据用户通过 WiFi 或运营商网络连接的互联网连接情况来锁定目标受众。',
    icon: 'advertiser-svg23',
  },
]

const deviceScrollEl = ref(null)
const deviceCardEls = ref([])
const activeDeviceIndex = ref(0)

const setDeviceCardRef = (el, idx) => {
  if (el) deviceCardEls.value[idx] = el
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

const onDeviceScroll = () => {
  activeDeviceIndex.value = calcActiveIndex(
    deviceScrollEl.value,
    deviceCardEls.value,
  )
}

onMounted(() => {
  nextTick(() => {
    onDeviceScroll()
  })
})
</script>
