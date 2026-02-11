<template>
	<div class="min-h-screen bg-white font-pingfang relative">
		<!-- 渐变底层背景组件 -->
		<GradientBackground />
		<div class="z-1 relative">
			<HeroSection />

			<WhyChooseSection />
			<ShowCase />
			<MobileAdsSection />
			<!-- <CtaSection /> --> <!-- 立即开始区域已隐藏 -->
		</div>
		<Footer />
	</div>
</template>

<script setup>
import HeroSection from './components/hero-section.vue'
import WhyChooseSection from './components/why-choose-section.vue'
import MobileAdsSection from './components/mobile-ads-section.vue'
import CtaSection from './components/cta-section.vue'
import ShowCase from './components/ShowCase.vue'
import GradientBackground from './components/gradient-background.vue'

useHead({
	title: '我们是谁 - T1',
	meta: [
		{ name: 'description', content: '了解我们是谁，我们的使命和愿景' }
	]
})
</script>
