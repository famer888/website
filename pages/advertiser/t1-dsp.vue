<template>
  <div class="bg-white">
    <!-- Hero -->
    <section
      class="relative overflow-hidden h-[260px] sm:h-[320px] md:h-[420px] lg:h-[560px]"
    >
      <!-- 顶部大图：用 img + object-cover，自适应不同屏幕（1920x560） -->
      <img
        :src="img_t1dsp6x"
        alt="T1 DSP"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div class="h-full flex items-center">
          <div
            class="w-full flex flex-col md:flex-row items-center gap-8 lg:gap-12"
          >
            <!-- 文案 -->
            <div class="w-full md:w-1/2 text-white">
              <h1
                class="font-pingfang font-medium text-[32px] md:text-[80px] leading-[44px] md:leading-[110px] tracking-normal mb-6 md:mb-8"
              >
                什么是<br />
                T1 DSP?
              </h1>
              <!-- 一条线 -->
              <div
                class="w-[120px] sm:w-[160px] md:w-[240px] h-[1px] bg-white/60 mb-8"
              ></div>

              <p
                class="font-pingfang font-normal text-[14px] sm:text-[16px] md:text-[24px] leading-[22px] sm:leading-[26px] tracking-normal text-white/80"
              >
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
    <section class="bg-white py-12 sm:py-28">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          class="font-pingfang font-medium text-[36px] md:text-[56px] leading-[36px] md:leading-[96px] tracking-normal text-[#111827] mb-8"
        >
          T1 DSP
        </h2>
        <p
          class="font-pingfang font-normal text-[18px] sm:text-[14px] md:text-[18px] leading-[26px] sm:leading-[22px] md:leading-[26px] tracking-normal text-[#93959C] max-w-[760px] mx-auto mb-8 md:mb12"
        >
          T1 DSP
          是一个需求方平台，允许广告商通过程序化方式从我们独家的高质量发布商处购买广告位。广告商可以购买视频、展示和其他广告格式，以实现他们的广告目标。
        </p>
        <div class="flex justify-center">
          <NuxtLink
            to="/register"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] leading-[60px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[40px] md:w-[240px] md:h-[60px]"
          >
            立即开始
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 图文：拓展业务 -->
    <section class="bg-white py-10 sm:py-14 lg:py-20 text-center md:text-left">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <!-- 左侧文案 -->
          <div class="w-full md:w-1/2">
            <h3
              class="font-pingfang font-medium text-[36px] sm:text-[32px] md:text-[56px] leading-[36px] sm:leading-[46px] md:leading-[80px] tracking-normal text-[#111827] mb-4"
            >
              借助 T1 DSP 拓展<br class="hidden sm:block" />
              您的广告业务
            </h3>
            <p
              class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] tracking-normal text-[#93959C] max-w-[560px]"
            >
              通过接入我们的交易平台，您可以访问我们的优质广告资源，触达更多潜在客户，并制定更具创新性的营销策略。评估您的广告系列效果，了解哪些系列能够真正推动线上线下业务增长，创造实际价值。
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
      :cta-link="section.ctaLink"
      :cta-text="section.ctaText"
    />

    <!-- FAQ -->
    <section class="bg-white py-12 sm:py-14 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          class="font-pingfang font-medium text-[36px] sm:text-[24px] md:text-[56px] leading-[36px] sm:leading-[32px] md:leading-[56px] tracking-normal text-[#111827] text-center mb-12"
        >
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
              <span
                class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] tracking-normal text-[#111827]"
              >
                {{ item.q }}
              </span>
              <svg
                class="w-5 h-5 text-[#7B8798] transition-transform"
                :class="openFaqIndex === idx ? 'rotate-180' : 'rotate-0'"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div v-if="openFaqIndex === idx" class="pb-4">
              <p
                class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[20px] sm:leading-[22px] tracking-normal text-[#93959C]"
              >
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
        <h3
          class="font-pingfang font-medium text-[36px] sm:text-[24px] md:text-[56px] leading-[32px] sm:leading-[36px] md:leading-[96px] tracking-normal text-[#3A82F9] mb-3"
        >
          成为广告商！！
        </h3>
        <p
          class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] tracking-normal text-[#93959C] mb-6"
        >
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
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import FeatureCardsSection from '~/components/FeatureCardsSection.vue'
import img_dsp7 from '~/assets/imgaes/advertiser/DSP7.png'
import img_t1dsp6x from '~/assets/imgaes/advertiser/img_t1dsp6x.jpg'

// SEO 配置
useHead({
  title: '什么是 T1 DSP - T1',
  meta: [
    {
      name: 'description',
      content:
        '了解 T1 DSP：高质量库存、数据驱动营销、智能化营销活动、目标特征、自动化功能与优化能力。',
    },
  ],
})

// 数据
const uniqueFeatures = [
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

const digitalAdFeatures = [
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

const faqItems = [
  {
    q: '什么是需求方平台(DSP)?',
    a: 'DSP 是帮助广告主通过程序化方式购买广告资源的平台，可在多个站点与位置高效投放并进行数据分析与优化。',
  },
  {
    q: '什么是程序化广告?',
    a: '程序化广告是通过自动化技术与数据驱动策略完成广告购买与展示的方式，可更快速、精准地触达目标受众。',
  },
  {
    q: '我可以在 T1 DSP 上购买哪些广告?',
    a: '您可以购买展示、视频等多种广告形式，并结合站点、位置、受众等维度进行组合投放。',
  },
  {
    q: '我该如何管理我的营销活动?',
    a: '从目标与预算开始，上传素材并选择站点与位置，投放后根据关键指标（展示、点击、转化等）持续优化出价与定向。',
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
const uniqueScrollEl = ref(null)
const digitalScrollEl = ref(null)
const uniqueCardEls = ref([])
const digitalCardEls = ref([])
const activeUniqueIndex = ref(0)
const activeDigitalIndex = ref(0)

const setUniqueCardRef = (el, idx) => {
  if (el) uniqueCardEls.value[idx] = el
}

const setDigitalCardRef = (el, idx) => {
  if (el) digitalCardEls.value[idx] = el
}

const cardSections = [
  {
    id: 'unique',
    title: '我们的独特之处是什么?',
    description:
      '借助我们强大的技术，助您实现广告目标，该技术可帮助您以程序化方式购买广告位。利用我们全新优化的引擎，把握最适合您广告系列的机遇。',
    items: uniqueFeatures,
    bgColor: 'bg-[#F5F7FB]',
    scrollRef: uniqueScrollEl,
    cardRefs: uniqueCardEls,
    activeIndex: activeUniqueIndex,
    onScroll: createScrollHandler(
      uniqueScrollEl,
      uniqueCardEls,
      activeUniqueIndex,
    ),
    setCardRef: setUniqueCardRef,
  },
  {
    id: 'digital',
    title: '体验真正的数字广告',
    description:
      '借助 T1DSP，您可以构建更智能的数据驱动型广告系列，扩大覆盖范围，并制定策略以最大限度地提高投资回报率，同时控制高昂的成本。',
    items: digitalAdFeatures,
    bgColor: 'bg-white',
    scrollRef: digitalScrollEl,
    cardRefs: digitalCardEls,
    activeIndex: activeDigitalIndex,
    onScroll: createScrollHandler(
      digitalScrollEl,
      digitalCardEls,
      activeDigitalIndex,
    ),
    setCardRef: setDigitalCardRef,
    ctaLink: '/ad-styles',
    ctaText: '查看更多',
  },
]

// FAQ
const openFaqIndex = ref(null)
const toggleFaq = (idx) => {
  openFaqIndex.value = openFaqIndex.value === idx ? null : idx
}

onMounted(() => {
  nextTick(() => {
    cardSections.forEach((section) => {
      if (section.onScroll) section.onScroll()
    })
  })
})
</script>
