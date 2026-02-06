<template>
  <div class="min-h-screen bg-white">
    <!-- Hero 区域：深蓝背景 + 科技感 -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#1e40af] min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[480px] flex items-center"
    >
      <!-- 抽象光点/线条图案背景 -->
      <div
        class="absolute inset-0 opacity-20"
        style="
          background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%),
            linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%);
        "
      />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
        <div class="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <!-- 文案区 -->
          <div class="flex-1 text-center md:text-left">
            <h1
              class="font-pingfang font-medium text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[44px] sm:leading-[58px] md:leading-[80px] lg:leading-[96px] tracking-normal text-white mb-4"
            >
              移动广告
            </h1>
            <p
              class="font-pingfang font-medium text-[18px] sm:text-[22px] md:text-[26px] leading-[28px] sm:leading-[32px] md:leading-[36px] tracking-normal text-white/95 mb-3"
            >
              抓住移动广告热潮的机遇!
            </p>
            <p
              class="font-pingfang font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] tracking-normal text-white/85 max-w-[640px]"
            >
              TII 创新广告技术助力您的移动营销。2023 年全球移动互联网广告支出达 3620 亿美元，智能手机与移动技术已成为触达用户的理想媒介。
            </p>
          </div>
          <!-- 插图区：PC 端显示 -->
          <div class="hidden md:flex flex-1 justify-center lg:justify-end">
            <img
              :src="heroIllustrationSrc"
              alt="移动广告数据与精准投放"
              class="w-full max-w-[400px] lg:max-w-[480px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 移动广告技术与触达目标受众 -->
    <section class="bg-[#F8FAFC] py-12 sm:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
          <!-- 左侧：文案 -->
          <div class="flex-1 order-2 md:order-1">
            <h2
              class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[44px] md:leading-[48px] tracking-normal text-[#111827] mb-6"
            >
              移动广告技术
            </h2>
            <p
              class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] tracking-normal text-[#A2A3A5] mb-8"
            >
              TII Ad 采用 AI 赋能的自动优化技术，覆盖全国优质广告位，结合多维度用户画像与媒体覆盖，助您实现成本优化与效果最大化。
            </p>

            <h2
              class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[44px] md:leading-[48px] tracking-normal text-[#111827] mb-6"
            >
              触达目标受众
            </h2>
            <p
              class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] tracking-normal text-[#A2A3A5] mb-8"
            >
              通过人群定向、地域定位、兴趣标签与时段投放，精准触达您的目标用户，最大化销售转化与品牌曝光。
            </p>

            <NuxtLink
              to="/register"
              class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]"
            >
              报名
            </NuxtLink>
          </div>

          <!-- 右侧：插图 -->
          <div class="flex-1 order-1 md:order-2 flex justify-center">
            <img
              :src="techIllustrationSrc"
              alt="移动广告技术与数据分析"
              class="w-full max-w-[320px] md:max-w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 移动广告解决方案 - 复用 FeatureCardsSection -->
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

    <!-- CTA 行动号召区：想了解更多 + 立即开始 -->
    <section class="bg-[#F4F5F9] py-12 sm:py-16 lg:py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[52px] tracking-normal text-[#3A82F9] mb-3"
        >
          立即开始!
        </h2>
        <p
          class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] tracking-normal text-[#626671] mb-8"
        >
          想了解更多? 让我们助您实现最雄心勃勃的网络营销目标。
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/register"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[200px] sm:h-[50px]"
          >
            报名
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="learn-more-btn inline-flex items-center justify-center bg-white border-2 border-[#3A82F9] rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal text-[#3A82F9] transition-colors hover:bg-[#E8F2FF] w-[160px] h-[44px] sm:w-[200px] sm:h-[50px]"
          >
            联系我们
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import FeatureCardsSection from "~/components/FeatureCardsSection.vue";
import heroIllustrationSrc from "~/assets/imgaes/why/why1.svg";
import techIllustrationSrc from "~/assets/imgaes/why/why2.svg";

// 移动广告解决方案特性
const solutionFeatures = [
  {
    title: "每日触达大量访客",
    desc: "覆盖海量移动用户，通过优质媒体资源实现广泛触达，让您的品牌与目标受众建立连接。",
    icon: "advertiser-svg9",
  },
  {
    title: "从经济高效的 CPM 模型中获益",
    desc: "采用 CPM 竞价广告模式，成本可控、效果可期，助您以更低的投入获得更高的广告曝光。",
    icon: "advertiser-svg14",
  },
  {
    title: "高效、精准、强大的目标定位",
    desc: "支持区域、兴趣、人群画像等多维度定向，精准锁定目标受众，提升投放效率与转化率。",
    icon: "advertiser-svg15",
  },
  {
    title: "高曝光度广告位",
    desc: "接入多种优质广告位资源，覆盖开屏、信息流、Banner 等主流形式，确保广告获得充分曝光。",
    icon: "advertiser-svg16",
  },
];

// 通用滚动逻辑
const createScrollHandler = (scrollEl, cardEls, activeIndex) => {
  const calcActiveIndex = (containerEl, cardEls) => {
    if (!containerEl || !cardEls?.length) return 0;
    const containerRect = containerEl.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    let bestIdx = 0;
    let bestDist = Infinity;
    cardEls.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const dist = Math.abs(center - containerCenter);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });
    return bestIdx;
  };
  return () => {
    activeIndex.value = calcActiveIndex(scrollEl.value, cardEls.value);
  };
};

const solutionScrollEl = ref(null);
const solutionCardEls = ref([]);
const activeSolutionIndex = ref(0);

const setSolutionCardRef = (el, idx) => {
  if (el) solutionCardEls.value[idx] = el;
};

const cardSections = [
  {
    id: "mobile-solutions",
    title: "移动广告解决方案!",
    description: "为移动推广量身定制的解决方案，助您高效触达目标用户，实现营销目标。",
    items: solutionFeatures,
    bgColor: "bg-[#F5F7FB]",
    scrollRef: solutionScrollEl,
    cardRefs: solutionCardEls,
    activeIndex: activeSolutionIndex,
    onScroll: createScrollHandler(
      solutionScrollEl,
      solutionCardEls,
      activeSolutionIndex
    ),
    setCardRef: setSolutionCardRef,
    ctaLink: "/register",
    ctaText: "报名",
  },
];

onMounted(() => {
  nextTick(() => {
    cardSections.forEach((section) => {
      if (section.onScroll) section.onScroll();
    });
  });
});

useHead({
  title: "移动广告 - T1",
  meta: [
    {
      name: "description",
      content:
        "抓住移动广告热潮的机遇。TII 创新广告技术，AI 赋能、精准定向、高曝光广告位，助您触达海量移动用户。",
    },
  ],
});
</script>
