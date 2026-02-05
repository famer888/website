<template>
  <div class="bg-white">
    <!-- Hero：如何成为广告商 -->
    <section
      class="bg-gradient-to-b from-[#DFE9FB] to-[#FFFFFF] py-8 sm:py-12 lg:py-16"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-white rounded-[0px] shadow-sm border-none border-[#EEF0F4] overflow-hidden"
        >
          <div class="flex flex-col md:flex-row items-stretch">
            <div class="flex-1 px-6 sm:px-10 py-8 sm:py-12">
              <h1 :class="styles.h1">如何成为广告商?</h1>
              <p :class="styles.subtitle">
                您的广告距离您想要触达的受众群体只有几步之遥。
              </p>
              <p :class="styles.body">
                我们的自助服务界面、高级定位选项、CPM竞价平台和高流量发布商网站是制胜的组合，将帮助您为您的在线电子商务业务开展成功的营销活动。
              </p>
              <NuxtLink to="/contact" :class="styles.btn"> 联系我们 </NuxtLink>
            </div>
            <div
              class="flex-1 bg-white px-6 sm:px-10 py-8 sm:py-12 flex items-center justify-center"
            >
              <img
                :src="images.hero"
                alt="如何成为广告商"
                class="w-full h-auto max-w-[520px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 步骤列表 -->
    <section
      v-for="(step, index) in steps"
      :key="index"
      class="bg-white py-10 sm:py-14 lg:py-20"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12"
        >
          <!-- 文案 - 移动端在上，桌面端根据配置 -->
          <div :class="['w-full md:w-1/2', 'order-1', step.textOrder]">
            <h2 :class="styles.stepTitle" v-html="step.title"></h2>
            <p v-if="step.subtitle" :class="styles.stepSubtitle">
              {{ step.subtitle }}
            </p>
            <p :class="styles.stepBody">{{ step.description }}</p>
          </div>

          <!-- 图片 - 移动端在下，桌面端根据配置 -->
          <div
            :class="['w-full md:w-1/2 relative', 'order-2', step.imageOrder]"
          >
            <img
              :src="step.image"
              :alt="step.title"
              class="relative w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 底部 CTA -->
    <section class="bg-[#F5F7FB] py-12 sm:py-14 lg:py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 :class="styles.ctaTitle">成为广告商！！</h2>
        <p :class="styles.ctaBody">让我们助您实现最雄心勃勃的网络营销目标。</p>
        <div class="flex justify-center">
          <NuxtLink to="/contact" :class="styles.btn"> 报名 </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 图片导入
import img_ggs5 from "~/assets/imgaes/advertiser/img_ggs5.png";
import img_hd2 from "~/assets/imgaes/advertiser/img_hd2.png";
import img_ad3 from "~/assets/imgaes/advertiser/img_ad3.png";
import img_wd4 from "~/assets/imgaes/advertiser/img_wd4.png";
import img_kb1 from "~/assets/imgaes/advertiser/img_kb1.png";

const images = {
  hero: img_ggs5,
  step1: img_hd2,
  step2: img_ad3,
  step3: img_wd4,
  step4: img_kb1,
};

// 样式类
const styles = {
  h1: "font-pingfang font-medium text-[42px] sm:text-[48px] md:text-[60px] leading-[60px] sm:leading-[72px] md:leading-[84px] tracking-normal text-[#111827] mb-4",
  subtitle:
    "font-pingfang font-normal text-[21px] sm:text-[24px] leading-[33px] sm:leading-[39px] tracking-normal text-[#626671] max-w-[520px] mb-2",
  body: "font-pingfang font-normal text-[18px] sm:text-[18px] leading-[33px] sm:leading-[39px] tracking-normal text-[#93959C] max-w-[520px] mb-8",
  btn: "register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[21px] sm:text-[24px] leading-[30px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]",
  stepTitle:
    "font-pingfang font-medium text-[42px] sm:text-[48px] md:text-[54px] leading-[60px] sm:leading-[69px] md:leading-[78px] tracking-normal text-[#626671] mb-4",
  stepSubtitle:
    "font-pingfang font-normal text-[24px] sm:text-[24px] md:text-[24px] leading-[42px] sm:leading-[48px] md:leading-[54px] tracking-normal text-[#626671] mb-4",
  stepBody:
    "font-pingfang font-normal text-[18px] sm:text-[18px] leading-[33px] sm:leading-[39px] tracking-normal text-[#A2A3A5] max-w-[520px]",
  ctaTitle:
    "font-pingfang font-medium text-[33px] sm:text-[36px] md:text-[42px] leading-[48px] sm:leading-[54px] md:leading-[60px] tracking-normal text-[#3A82F9] mb-3",
  ctaBody:
    "font-pingfang font-normal text-[24px] sm:text-[24px] leading-[36px] sm:leading-[39px] tracking-normal text-[#93959C] mb-6",
};

// 步骤数据
const steps = [
  {
    title: "明确您的活动。",
    subtitle: "务必言简意赅。",
    description:
      "为您的广告系列设置名称、目标群体、设备和每日预算。利用我们的关键词选择功能，精准定位细分市场，定义您的受众群体，并选择其他设置，例如时间定位和频次限制，以最大限度地发挥营销活动的效用。",
    image: images.step1,
    imageOrder: "md:order-2",
    textOrder: "md:order-1",
  },
  {
    title: "上传您的横幅广告。",
    subtitle: "让你的信息表达更有创意！",
    description:
      "可以上传横幅图片、包含 URL 的 HTML 内容或自定义创意。我们建议优先准备常用尺寸素材，便于在不同站点与位置获得更好的覆盖与转化表现。",
    image: images.step2,
    imageOrder: "md:order-1",
    textOrder: "md:order-2",
  },
  {
    title: '选择站点<br class="hidden sm:block" />及安置',
    subtitle: null,
    description: "从高流量网站列表中选择，然后选择您希望广告展示的位置。",
    image: images.step3,
    imageOrder: "md:order-2",
    textOrder: "md:order-1",
  },
  {
    title: '跟进<br class="hidden sm:block" />投资回报率',
    subtitle: null,
    description:
      "开始看到点击量、潜在客户和销售额的增长。分析您的统计数据并进行优化，以获得更好的结果。",
    image: images.step4,
    imageOrder: "md:order-1",
    textOrder: "md:order-2",
  },
];

// SEO 配置
useHead({
  title: "如何成为广告商 - T1",
  meta: [
    {
      name: "description",
      content:
        "了解如何成为广告商：明确活动、上传横幅广告、选择站点及安置、跟进投资回报率。",
    },
  ],
});
</script>
