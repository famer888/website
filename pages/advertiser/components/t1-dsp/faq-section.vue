<template>
  <section class="bg-white py-12 sm:py-14 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3
        class="font-pingfang font-medium text-[36px] sm:text-[24px] md:text-[56px] leading-[36px] sm:leading-[32px] md:leading-[56px] tracking-normal text-[#111827] text-center mb-12"
      >
        DSP常见问题解答
      </h3>

      <div>
        <div
          v-for="(item, idx) in faqItems"
          :key="item.q"
          :class="[
            'border-b',
            idx === 0 ? 'border-t-[0]' : '',
            'border-[#3A82F9]',
          ]"
        >
          <button
            type="button"
            class="w-full flex items-center justify-between py-4 text-left border-b border-[#3A82F9]"
            @click="toggleFaq(idx)"
          >
            <span
              class="font-pingfang font-normal text-[16px] md:text-[24px] leading-[32px] md:leading-[48px] tracking-normal text-[#111827]"
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
          <div
            v-if="openFaqIndex === idx"
            class="px-4 py-3 my-3 md:px-8 md:py-6 md:my-6 bg-[#F4F5F9]"
          >
            <p
              class="font-pingfang font-normal text-[16px] md:text-[24px] leading-[32px] md:leading-[48px] tracking-normal text-[#626671]"
            >
              {{ item.a }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8 md:mt-20">
        <NuxtLink
          to="/contact/help-center"
          class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[40px] md:w-[240px] md:h-[60px]"
        >
          更多问题
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
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

const openFaqIndex = ref(null)
const toggleFaq = (idx) => {
  openFaqIndex.value = openFaqIndex.value === idx ? null : idx
}
</script>
