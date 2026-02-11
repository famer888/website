<template>
	<div class="min-h-screen bg-white font-pingfang">
		<!-- Banner 区域 -->
		<Banner />

		<!-- 移动广告技术与触达目标受众 -->
		<TechSection />

		<!-- 移动广告解决方案 -->
		<SolutionsSection />

		<!-- CTA 行动号召区 (报名按钮隐藏，整个区域不展示) -->
		<!-- <CtaSection /> -->

		<Footer />
	</div>
</template>

<script setup>
import Banner from "./components/banner.vue";
import TechSection from "./components/tech-section.vue";
import SolutionsSection from "./components/solutions-section.vue";
import CtaSection from "./components/cta-section.vue";

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
