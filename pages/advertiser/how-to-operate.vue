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

			<!-- SEO 内链区域 -->
			<section class="w-full py-12 md:py-20">
				<div class="max-w-[1200px] mx-auto px-6 md:px-0 text-center">
					<h2 class="font-pingfang font-medium text-[28px] md:text-[48px] leading-[42px] md:leading-[72px] tracking-normal text-[#171A1D] mb-6 md:mb-10">
						探索更多T1广告联盟服务
					</h2>
					<p class="font-pingfang font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#93959C] mb-8 md:mb-12 max-w-[600px] mx-auto">
						T1广告联盟平台为广告主和站长提供全方位的广告投放与流量变现服务。
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<NuxtLink to="/"
							class="learn-more-btn inline-flex items-center justify-center bg-white rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] tracking-normal transition-colors w-[200px] h-[50px] md:w-[240px] md:h-[60px]">
							返回首页
						</NuxtLink>
						<NuxtLink to="/publisher"
							class="register-btn inline-flex items-center justify-center text-white rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[200px] h-[50px] md:w-[240px] md:h-[60px]">
							站长变现入口
						</NuxtLink>
					</div>
				</div>
			</section>
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
	title: '广告主投放平台 | 海外精准广告投放 CPM CPC CPA效果营销 - T1',
	meta: [
		{
			name: 'description',
			content:
				'通过T1广告平台进行全球广告投放，支持精准定向与多种计费模式，帮助广告主快速获取高质量用户。',
		},
		{
			name: 'keywords',
			content: '广告投放平台,海外广告投放,效果广告,精准广告投放,全球广告资源,CPM,CPC,CPA',
		},
	],
})
</script>
