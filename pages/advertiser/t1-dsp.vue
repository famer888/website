<template>
  <div class="bg-white">
    <!-- Hero -->
    <HeroSection />

    <!-- 简介 -->
    <IntroSection />

    <!-- 图文：拓展业务 -->
    <ExpandSection />

    <!-- 卡片：我们的独特之处 -->
    <UniqueFeaturesSection />

    <!-- 卡片：体验真正的数字广告 -->
    <DigitalAdSection />

    <!-- FAQ -->
    <FaqSection />

    <!-- 底部 CTA -->
    <!-- <CtaSection /> -->

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import HeroSection from './components/t1-dsp/hero-section.vue'
import IntroSection from './components/t1-dsp/intro-section.vue'
import ExpandSection from './components/t1-dsp/expand-section.vue'
import UniqueFeaturesSection from './components/t1-dsp/unique-features-section.vue'
import DigitalAdSection from './components/t1-dsp/digital-ad-section.vue'
import FaqSection from './components/t1-dsp/faq-section.vue'
import CtaSection from './components/t1-dsp/cta-section.vue'

// SEO 配置
useHead({
  title: 'T1 DSP广告投放平台 | 程序化广告 精准投放 - T1广告联盟',
  meta: [
    {
      name: 'description',
      content:
        'T1 DSP程序化广告投放平台，支持高质量库存、数据驱动营销、智能化营销活动、精准目标定向、自动化功能与优化能力。',
    },
    {
      name: 'keywords',
      content: 'T1 DSP,程序化广告,精准投放,广告投放平台,数据驱动营销,广告联盟',
    },
  ],
})
</script>
