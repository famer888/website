<template>
	<div class="min-h-screen bg-white font-pingfang relative">
		<!-- 渐变底层背景组件 -->
		<GradientBackground />
		<div class="z-1 relative">
			<!-- Hero：如何成为广告商 -->
			<HeroSection />

			<!-- 步骤列表 -->
			<StepsSection1 />
			<div class="md:mt-[38px]">
				<StepsSection2 />
			</div>
			<div class="md:mt-[47px]">
				<StepsSection3 />
			</div>
			<div class="md:mt-[20px] pb-[45px] md:pb-[68px]">
				<StepsSection4 />
			</div>

			<!-- 底部 CTA (成为广告商区域已隐藏) -->
			<!-- <CtaSection /> -->
		</div>
		<!-- 页脚 -->
		<Footer />
	</div>
</template>

<script setup>
import HeroSection from './components/how-to-operate/hero-section.vue'
import StepsSection1 from './components/how-to-operate/steps-section-1.vue'
import StepsSection2 from './components/how-to-operate/steps-section-2.vue'
import StepsSection3 from './components/how-to-operate/steps-section-3.vue'
import StepsSection4 from './components/how-to-operate/steps-section-4.vue'
import CtaSection from './components/how-to-operate/cta-section.vue'
import GradientBackground from './components/how-to-operate/gradient-background.vue'

// SEO 配置
useHead({
	title: '如何成为广告商 - T1',
	meta: [
		{
			name: 'description',
			content:
				'了解如何成为广告商：明确活动、上传横幅广告、选择站点及安置、跟进投资回报率。',
		},
	],
})
</script>
