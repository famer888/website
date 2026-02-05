<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="relative overflow-hidden h-[260px] sm:h-[320px] md:h-[420px] lg:h-[560px]">
      <!-- 顶部大图：用 img + object-cover，自适应不同屏幕（1920x560） -->
      <img
        :src="img_t1dsp6x"
        alt="T1 DSP"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />

      <!-- 轻微遮罩，保证文字可读（不改变整体风格） -->
      <div class="absolute inset-0 bg-black/10" aria-hidden="true" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div class="h-full flex items-center">
          <div class="w-full flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <!-- 文案 -->
            <div class="w-full md:w-1/2 text-white">
              <h1 class="font-pingfang font-medium text-[32px] sm:text-[40px] md:text-[48px] leading-[44px] sm:leading-[54px] md:leading-[64px] tracking-normal mb-4">
                什么是<br />
                T1 DSP?
              </h1>
              <p class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] tracking-normal text-white/80">
                广告投放站点
              </p>
            </div>

            <!-- 占位列：保证 PC 端文案保持在左半边（背景图在右侧） -->
            <div class="hidden md:block md:w-1/2" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>

    <!-- 简介 -->
    <section class="bg-white py-10 sm:py-14 lg:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[46px] md:leading-[52px] tracking-normal text-[#111827] mb-4">
          T1 DSP
        </h2>
        <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] tracking-normal text-[#A2A3A5] max-w-[760px] mx-auto mb-6">
          T1 DSP 是一个需求方平台，允许广告商通过程序化方式从我们独家的高质量发布商处购买广告位。广告商可以购买视频、展示和其他广告格式，以实现他们的广告目标。
        </p>
        <div class="flex justify-center">
          <NuxtLink
            to="/register"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]"
          >
            立即开始
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 图文：拓展业务 -->
    <section class="bg-white py-10 sm:py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <!-- 左侧文案 -->
          <div class="w-full md:w-1/2">
            <h3 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[46px] md:leading-[52px] tracking-normal text-[#111827] mb-4">
              借助 T1 DSP 拓展<br class="hidden sm:block" />
              您的广告业务
            </h3>
            <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] tracking-normal text-[#A2A3A5] max-w-[560px]">
              通过投放我们的网站受众平台，您可以访问我们的优质广告资源，触达更多潜在客户，并制定更具创新性的营销策略。评估您的广告系列效果，了解哪些系列能够真正推动线上线下业务增长，创造实际价值。
            </p>
          </div>

          <!-- 右侧插图 -->
          <div class="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              :src="img_dsp7"
              alt="拓展广告业务"
              class="w-full h-auto max-w-[560px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 我们的独特之处 -->
    <section class="bg-[#F5F7FB] py-12 sm:py-14 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="font-pingfang font-medium text-[22px] sm:text-[24px] md:text-[28px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-normal text-[#111827] text-center mb-8">
          我们的独特之处是什么?
        </h3>

        <!-- PC：三列卡片 -->
        <div class="hidden md:grid grid-cols-3 gap-6">
          <div
            v-for="item in uniqueFeatures"
            :key="item.title"
            class="bg-white rounded-[12px] shadow-sm border border-[#EEF0F4] p-8 text-center"
          >
            <!-- <img :src="item.icon" :alt="item.title" class="w-12 h-12 mx-auto mb-4 object-contain" /> -->
            <SvgIcon :name="item.icon" class="w-12 h-12 mx-auto mb-4 object-contain" alt="图标" />
            <h4 class="font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-[#111827] mb-2">
              {{ item.title }}
            </h4>
            <p class="font-pingfang font-normal text-[12px] leading-[20px] tracking-normal text-[#A2A3A5]">
              {{ item.desc }}
            </p>
          </div>
        </div>

        <!-- H5：横向滑动 + 圆点 -->
        <div class="md:hidden">
          <div
            ref="uniqueScrollEl"
            class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4"
            @scroll.passive="onUniqueScroll"
          >
            <div
              v-for="(item, idx) in uniqueFeatures"
              :key="item.title"
              :ref="(el) => setUniqueCardRef(el, idx)"
              class="snap-center shrink-0 w-[78%] bg-white rounded-[12px] shadow-sm border border-[#EEF0F4] p-7 text-center"
            >
              <!-- <img :src="item.icon" :alt="item.title" class="w-12 h-12 mx-auto mb-4 object-contain" /> -->
              <SvgIcon :name="item.icon" class="w-12 h-12 mx-auto mb-4 object-contain" alt="图标" />
              <h4 class="font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-[#111827] mb-2">
                {{ item.title }}
              </h4>
              <p class="font-pingfang font-normal text-[12px] leading-[20px] tracking-normal text-[#A2A3A5]">
                {{ item.desc }}
              </p>
            </div>
          </div>
          <div class="flex justify-center gap-2 mt-2">
            <span
              v-for="(_, i) in uniqueFeatures"
              :key="i"
              class="w-2 h-2 rounded-full transition-colors"
              :class="activeUniqueIndex === i ? 'bg-brand' : 'bg-[#D8DDE6]'"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 体验真正的数字广告 -->
    <section class="bg-white py-12 sm:py-14 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="font-pingfang font-medium text-[22px] sm:text-[24px] md:text-[28px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-normal text-[#111827] text-center mb-2">
          体验真正的数字广告
        </h3>
        <p class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] tracking-normal text-[#A2A3A5] text-center max-w-[760px] mx-auto mb-8">
          借助 T1DSP，您可以构建更智能的数据驱动型广告系列，扩大覆盖范围，并制定策略以最大限度地提高投资回报率，同时控制高昂的成本。
        </p>

        <!-- PC：三列卡片 -->
        <div class="hidden md:grid grid-cols-3 gap-6 mb-8">
          <div
            v-for="item in digitalAdFeatures"
            :key="item.title"
            class="bg-white rounded-[12px] shadow-sm border border-[#EEF0F4] p-8 text-center"
          >
            <!-- <img :src="item.icon" :alt="item.title" class="w-12 h-12 mx-auto mb-4 object-contain" /> -->
            <SvgIcon :name="item.icon" class="w-12 h-12 mx-auto mb-4 object-contain" alt="图标" />
            <h4 class="font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-[#111827] mb-2">
              {{ item.title }}
            </h4>
            <p class="font-pingfang font-normal text-[12px] leading-[20px] tracking-normal text-[#A2A3A5]">
              {{ item.desc }}
            </p>
          </div>
        </div>

        <!-- H5：横向滑动 + 圆点 -->
        <div class="md:hidden mb-6">
          <div
            ref="digitalScrollEl"
            class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4"
            @scroll.passive="onDigitalScroll"
          >
            <div
              v-for="(item, idx) in digitalAdFeatures"
              :key="item.title"
              :ref="(el) => setDigitalCardRef(el, idx)"
              class="snap-center shrink-0 w-[78%] bg-white rounded-[12px] shadow-sm border border-[#EEF0F4] p-7 text-center"
            >
              <!-- <img :src="item.icon" :alt="item.title" class="w-12 h-12 mx-auto mb-4 object-contain" /> -->
              <SvgIcon :name="item.icon" class="w-12 h-12 mx-auto mb-4 object-contain" alt="图标" />
              <h4 class="font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-[#111827] mb-2">
                {{ item.title }}
              </h4>
              <p class="font-pingfang font-normal text-[12px] leading-[20px] tracking-normal text-[#A2A3A5]">
                {{ item.desc }}
              </p>
            </div>
          </div>
          <div class="flex justify-center gap-2 mt-2">
            <span
              v-for="(_, i) in digitalAdFeatures"
              :key="i"
              class="w-2 h-2 rounded-full transition-colors"
              :class="activeDigitalIndex === i ? 'bg-brand' : 'bg-[#D8DDE6]'"
            />
          </div>
        </div>

        <div class="flex justify-center">
          <NuxtLink
            to="/ad-styles"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]"
          >
            查看更多
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white py-12 sm:py-14 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="font-pingfang font-medium text-[22px] sm:text-[24px] md:text-[28px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-normal text-[#111827] text-center mb-8">
          DSP常见问题解答
        </h3>

        <div class="border-t border-[#E6ECF5]">
          <div
            v-for="(item, idx) in faqItems"
            :key="item.q"
            class="border-b border-[#E6ECF5]"
          >
            <button
              type="button"
              class="w-full flex items-center justify-between py-4 text-left"
              @click="toggleFaq(idx)"
            >
              <span class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] tracking-normal text-[#111827]">
                {{ item.q }}
              </span>
              <svg
                class="w-5 h-5 text-[#7B8798] transition-transform"
                :class="openFaqIndex === idx ? 'rotate-180' : 'rotate-0'"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="openFaqIndex === idx" class="pb-4">
              <p class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[20px] sm:leading-[22px] tracking-normal text-[#A2A3A5]">
                {{ item.a }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <NuxtLink
            to="/contact/help-center"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]"
          >
            更多问题
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 底部 CTA -->
    <section class="bg-[#F5F7FB] py-12 sm:py-14 lg:py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="font-pingfang font-medium text-[22px] sm:text-[24px] md:text-[28px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-normal text-[#3A82F9] mb-3">
          成为广告商！！
        </h3>
        <p class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] tracking-normal text-[#A2A3A5] mb-6">
          让我们协助您实现最核心的营销目标。
        </p>
        <div class="flex justify-center">
          <NuxtLink
            to="/register"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]"
          >
            报名
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SvgIcon from '~/components/SvgIcon.vue'
import img_dsp7 from '~/assets/imgaes/advertiser/DSP7.png'
import img_t1dsp6x from '~/assets/imgaes/advertiser/img_t1dsp6x.png'
// SEO 配置
useHead({
  title: '什么是 T1 DSP - T1',
  meta: [
    { name: 'description', content: '了解 T1 DSP：高质量库存、数据驱动营销、智能化营销活动、目标特征、自动化功能与优化能力。' }
  ]
})

const uniqueFeatures = [
  {
    title: '数据驱动型营销活动',
    desc: '利用我们丰富的数据资源，支持更智能、更高效的程序化投放与持续优化。',
    icon: 'advertiser-svg8'
  },
  {
    title: '高质量库存',
    desc: '覆盖优质发布商与多样化位置，为您的广告系列带来更稳定的流量与效果。',
    icon: 'advertiser-svg9'
  },
  {
    title: '智能营销活动',
    desc: '通过自动化与策略工具，让投放更简单，快速找到适合的受众与站点组合。',
    icon: 'advertiser-svg10'
  }
]

const digitalAdFeatures = [
  {
    title: '目标特征',
    desc: '利用我们强大的定向能力，帮助您更精确地触达目标受众并提升转化。',
    icon: 'advertiser-svg11'
  },
  {
    title: '自动化功能',
    desc: '利用我们的自动化功能，让投放更高效，释放更多策略与创意空间。',
    icon: 'advertiser-svg12'
  },
  {
    title: '优化功能',
    desc: '通过实时数据与可视化分析，持续优化投放策略，提升 ROI 表现。',
    icon: 'advertiser-svg13'
  }
]

const faqItems = [
  {
    q: '什么是需求方平台(DSP)?',
    a: 'DSP 是帮助广告主通过程序化方式购买广告资源的平台，可在多个站点与位置高效投放并进行数据分析与优化。'
  },
  {
    q: '什么是程序化广告?',
    a: '程序化广告是通过自动化技术与数据驱动策略完成广告购买与展示的方式，可更快速、精准地触达目标受众。'
  },
  {
    q: '我可以在 T1 DSP 上购买哪些广告?',
    a: '您可以购买展示、视频等多种广告形式，并结合站点、位置、受众等维度进行组合投放。'
  },
  {
    q: '我该如何管理我的营销活动?',
    a: '从目标与预算开始，上传素材并选择站点与位置，投放后根据关键指标（展示、点击、转化等）持续优化出价与定向。'
  }
]

const openFaqIndex = ref(null)
const toggleFaq = (idx) => {
  openFaqIndex.value = openFaqIndex.value === idx ? null : idx
}

// H5 卡片：滚动定位圆点（尽量贴近高保真）
const uniqueScrollEl = ref(null)
const digitalScrollEl = ref(null)
const uniqueCardEls = ref([])
const digitalCardEls = ref([])
const activeUniqueIndex = ref(0)
const activeDigitalIndex = ref(0)

const setUniqueCardRef = (el, idx) => {
  if (!el) return
  uniqueCardEls.value[idx] = el
}

const setDigitalCardRef = (el, idx) => {
  if (!el) return
  digitalCardEls.value[idx] = el
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

const onUniqueScroll = () => {
  activeUniqueIndex.value = calcActiveIndex(uniqueScrollEl.value, uniqueCardEls.value)
}

const onDigitalScroll = () => {
  activeDigitalIndex.value = calcActiveIndex(digitalScrollEl.value, digitalCardEls.value)
}

onMounted(() => {
  // 初始化一次，避免首屏圆点不对
  nextTick(() => {
    onUniqueScroll()
    onDigitalScroll()
  })
})
</script>

