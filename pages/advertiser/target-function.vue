<template>
  <div class="bg-white">
    <!-- Hero（1920x560 顶图，自适应） -->
    <section
      class="relative overflow-hidden h-[260px] sm:h-[320px] md:h-[420px] lg:h-[560px]"
    >
      <img
        :src="img_mbgn8"
        alt="目标功能"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div class="h-full flex items-center">
          <div class="w-full text-start">
            <h1
              class="font-pingfang font-medium text-[28px] sm:text-[36px] md:text-[80px] leading-[60px] sm:leading-[72px] md:leading-[80px] tracking-normal text-white mb-4"
            >
              目标功能
            </h1>
            <!-- 水平线 -->
            <div
              class="w-[120px] sm:w-[160px] md:w-[200px] h-[2px] bg-white/60 my-8"
            ></div>
            <p
              class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[20px] tracking-normal text-white"
            >
              了解更多关于 T1 更多功能
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 了解你的受众 -->
    <section class="bg-white py-10 sm:py-14 lg:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          class="font-pingfang font-medium text-[22px] sm:text-[26px] md:text-[32px] leading-[32px] sm:leading-[36px] md:leading-[44px] tracking-normal text-[#111827] mb-3"
        >
          了解你的受众
        </h2>
        <p
          class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] tracking-normal text-[#A2A3A5] max-w-[820px] mx-auto mb-6"
        >
          我们提供覆盖各种地区和设备的多维定向功能，帮助您识别潜在客户并优化投放。定位并触达目标受众，提升品牌转化率的受众群体。
        </p>
        <div class="flex justify-center">
          <NuxtLink
            to="/register"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[180px] h-[44px] sm:w-[200px] sm:h-[48px]"
          >
            创建您的账户
          </NuxtLink>
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
    />

    <!-- 设备和网络功能（4 卡片） -->
    <section class="bg-white py-12 sm:py-14 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          class="font-pingfang font-medium text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[34px] tracking-normal text-[#111827] text-center mb-2"
        >
          设备和网络功能
        </h3>
        <p
          class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[22px] tracking-normal text-[#A2A3A5] text-center max-w-[760px] mx-auto mb-8"
        >
          此功能允许您根据特定条件（例如 ISP、移动设备、IP
          地址和设备）来定向投放广告，深入了解并精准触达目标受众。
        </p>

        <!-- PC：2x2 -->
        <div class="hidden md:grid grid-cols-2 gap-8">
          <div
            v-for="item in deviceNetworkFeatures"
            :key="item.title"
            class="bg-white rounded-[12px] shadow-[0_5px_8px_-2px_rgba(0,0,0,0.025),0_2px_3px_-1px_rgba(0,0,0,0.01)] border border-[#EEF0F4] p-8 flex gap-6 items-start"
          >
            <SvgIcon
              :name="item.icon"
              class="w-16 h-16 object-contain flex-shrink-0"
              alt="图标"
            />
            <div class="flex-1">
              <h4
                class="font-pingfang font-medium text-[20px] leading-[30px] tracking-normal text-[#111827] mb-2"
              >
                {{ item.title }}
              </h4>
              <p
                class="font-pingfang font-normal text-[14px] leading-[22px] tracking-normal text-[#A2A3A5]"
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
              class="snap-center shrink-0 w-[86%] bg-white rounded-[12px] shadow-sm border border-[#EEF0F4] p-6 flex gap-4"
            >
              <!-- <img :src="item.icon" :alt="item.title" class="w-10 h-10 object-contain mt-1" /> -->
              <SvgIcon
                :name="item.icon"
                class="w-10 h-10 object-contain mt-1"
                alt="图标"
              />
              <div>
                <h4
                  class="font-pingfang font-medium text-[16px] leading-[24px] tracking-normal text-[#111827] mb-1"
                >
                  {{ item.title }}
                </h4>
                <p
                  class="font-pingfang font-normal text-[12px] leading-[20px] tracking-normal text-[#A2A3A5]"
                >
                  {{ item.desc }}
                </p>
              </div>
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

    <!-- 底部 CTA（双按钮） -->
    <section class="bg-white py-12 sm:py-14 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3
          class="font-pingfang font-medium text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] sm:leading-[34px] md:leading-[40px] tracking-normal text-brand mb-3"
        >
          需要解答您的疑问吗? <br class="sm:hidden" />想了解更多?
        </h3>
        <p
          class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[22px] tracking-normal text-[#A2A3A5] max-w-[760px] mx-auto mb-8"
        >
          如果您对我们的平台功能有任何疑问，请随时通过以下方式联系我们！请查看我们的常见问题解答。
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <NuxtLink
            to="/contact"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[220px] h-[44px] sm:w-[180px] sm:h-[48px]"
          >
            联系我们
          </NuxtLink>
          <NuxtLink
            to="/contact/help-center"
            class="learn-more-btn inline-flex items-center justify-center bg-white border-2 rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors w-[220px] h-[44px] sm:w-[180px] sm:h-[48px]"
          >
            常见问题
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import FeatureCardsSection from "~/components/FeatureCardsSection.vue";
import SvgIcon from "~/components/SvgIcon.vue";
import img_mbgn8 from "~/assets/imgaes/advertiser/img_mbgn8.jpg";

// SEO 配置
useHead({
  title: "目标功能 - T1",
  meta: [
    {
      name: "description",
      content:
        "了解 T1 目标功能：受众定向、优化与自动化、设备与网络、浏览器与操作系统能力。",
    },
  ],
});

// 数据（图标先用线上占位图，后续你替换成真实 svg/png）
const targetFeatures = [
  {
    title: "地点",
    desc: "无论目标受众身在何处，都能精准触达他们。根据他们的位置和距离，传递恰当的信息。",
    icon: "advertiser-svg14",
  },
  {
    title: "人口统计",
    desc: "根据受众的人口统计信息，构建、定位或筛选广告系列的受众群体。",
    icon: "advertiser-svg15",
  },
  {
    title: "关键词",
    desc: "利用关键词、搜索词和其他上下文目标，根据访客的喜好来定位您的广告系列。",
    icon: "advertiser-svg16",
  },
];

const optimizationFeatures = [
  {
    title: "竞标者",
    desc: "设定目标每次转化费用(CPA)，让我们的算法自动优化您的竞价。",
    icon: "advertiser-svg17",
  },
  {
    title: "规则",
    desc: "我们的规则功能允许您定义特定的行为模式，并剔除转化率低的来源。",
    icon: "advertiser-svg18",
  },
  {
    title: "自动驾驶仪",
    desc: "使用自动投放功能，让您的广告自动运行。确保将最具吸引力和转化率的广告展示给潜在客户。",
    icon: "advertiser-svg19",
  },
];

const deviceNetworkFeatures = [
  {
    title: "设备目标定位",
    desc: "通过台式机、平板电脑和移动设备与受众互动，传递有影响力的信息。",
    icon: "advertiser-svg20",
  },
  {
    title: "IP定位",
    desc: "根据特定 IP 地址定位访客，或定义IP 地址范围来定位您的受众。",
    icon: "advertiser-svg21",
  },
  {
    title: "ISP 目标定位",
    desc: "按无线运营商或互联网服务提供商锁定目标受众。可访问包含数千家全球移动互联网服务提供商的庞大列表。",
    icon: "advertiser-svg22",
  },
  {
    title: "移动连接",
    desc: "根据用户通过 WiFi 或运营商网络连接的互联网连接情况来锁定目标受众。",
    icon: "advertiser-svg23",
  },
];

const browserOsFeatures = [
  {
    title: "操作系统目标",
    desc: "按操作系统与版本精确定位受众，例如 Windows、macOS、iOS、Android 等。",
    icon: "advertiser-svg24",
  },
  {
    title: "浏览器语言定向",
    desc: "可选择语言目标受众，选择合适的语言偏好并覆盖更多场景。",
    icon: "advertiser-svg25",
  },
  {
    title: "浏览器定位",
    desc: "根据受众使用的浏览器与版本定位受众，提升体验与投放一致性。",
    icon: "advertiser-svg26",
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

// 卡片部分配置
const targetScrollEl = ref(null);
const optScrollEl = ref(null);
const browserScrollEl = ref(null);
const deviceScrollEl = ref(null);
const targetCardEls = ref([]);
const optCardEls = ref([]);
const browserCardEls = ref([]);
const deviceCardEls = ref([]);
const activeTargetIndex = ref(0);
const activeOptIndex = ref(0);
const activeBrowserIndex = ref(0);
const activeDeviceIndex = ref(0);

const setTargetCardRef = (el, idx) => {
  if (el) targetCardEls.value[idx] = el;
};

const setOptCardRef = (el, idx) => {
  if (el) optCardEls.value[idx] = el;
};

const setBrowserCardRef = (el, idx) => {
  if (el) browserCardEls.value[idx] = el;
};

const setDeviceCardRef = (el, idx) => {
  if (el) deviceCardEls.value[idx] = el;
};

const cardSections = [
  {
    id: "target",
    title: "目标功能",
    description:
      "掌控您的广告系列效果。使用地理位置、人口统计和关键词等功能，达成您的广告系列目标。",
    items: targetFeatures,
    bgColor: "bg-white",
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
    id: "optimization",
    title: "优化与自动化",
    description:
      "即使在高峰状态下，您也可以使用我们的先进自动化和优化功能来优化广告系列的效果。自动竞价、优化广告来源和控制总体成本，从未如此简单。",
    items: optimizationFeatures,
    bgColor: "bg-[#F5F7FB]",
    scrollRef: optScrollEl,
    cardRefs: optCardEls,
    activeIndex: activeOptIndex,
    onScroll: createScrollHandler(optScrollEl, optCardEls, activeOptIndex),
    setCardRef: setOptCardRef,
  },
  {
    id: "browser",
    title: "浏览器和操作系统功能",
    description:
      "充分利用浏览器和操作系统功能，根据用户使用的技术找到合适的受众。",
    items: browserOsFeatures,
    bgColor: "bg-[#F5F7FB]",
    scrollRef: browserScrollEl,
    cardRefs: browserCardEls,
    activeIndex: activeBrowserIndex,
    onScroll: createScrollHandler(
      browserScrollEl,
      browserCardEls,
      activeBrowserIndex,
    ),
    setCardRef: setBrowserCardRef,
  },
];

// 设备和网络功能的滚动逻辑
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

const onDeviceScroll = () => {
  activeDeviceIndex.value = calcActiveIndex(
    deviceScrollEl.value,
    deviceCardEls.value,
  );
};

onMounted(() => {
  nextTick(() => {
    cardSections.forEach((section) => {
      if (section.onScroll) section.onScroll();
    });
    onDeviceScroll();
  });
});
</script>
