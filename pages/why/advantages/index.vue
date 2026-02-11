<template>
	<div class="min-h-screen bg-white font-pingfang relative">
		<!-- 渐变底层背景组件 -->
		<GradientBackground />
		<div class="z-1 relative">
			<ReferralSection />
			<SecuritySection />
			<BrandProtectionSection />
			<TechnologySection />
			<!-- <CtaSection /> --> <!-- 立即开始区域已隐藏 -->
		</div>
		<Footer />
	</div>
</template>

<script setup>
import GradientBackground from './components/gradient-background.vue'
import ReferralSection from './components/referral-section.vue'
import SecuritySection from './components/security-section.vue'
import BrandProtectionSection from './components/brand-protection-section.vue'
import TechnologySection from './components/technology-section.vue'
import CtaSection from './components/cta-section.vue'

useHead({
	title: '我们的优势 - T1',
	meta: [
		{ name: 'description', content: '了解我们的优势和核心竞争力' }
	]
})
</script>
