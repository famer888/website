<template>
	<section class="w-full mb-[60px] md:mb-[84px]">
		<div
			class="max-w-[1200px] mx-auto pt-0 md:pt-[100px] flex flex-col md:flex-row md:shadow-[0px_2px_60px_0px_#E0EBFD]">
			<div class="bg-transparent md:bg-white px-6 md:px-0 pt-[48px] pb-[30px] md:pt-[60px] md:pb-0 md:pl-[60px]">
			<h1
				class="font-pingfang font-medium tracking-[0px] text-[36px] md:text-[64px] leading-[56px] md:leading-[96px] text-[#171A1D] mb-6 md:mb-12">
				全球广告投放解决方案</h1>
				<h3
					class="font-pingfang font-medium tracking-[0px] text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-[#171A1D] pr-[95px] md:pr-0 mb-6 md:text-[#626671]">
					{{ data.subtitle }}</h3>
				<p
					class="font-pingfang font-normal tracking-[0px] text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#93959C] mb-0 md:mb-8 md:max-w-[527px]">
					{{ data.body }}</p>
				<!-- PC 按钮 -->
				<NuxtLink to="/contact"
					class="hidden md:flex w-[240px] h-[60px] bg-[#3A82F9] text-white rounded-full font-pingfang font-normal tracking-[0px] text-[20px] leading-[30px] text-center transition-colors items-center justify-center cursor-pointer">
					获取媒体包
				</NuxtLink>
			</div>
			<div
				class="flex flex-col flex-shrink-0 md:flex-row items-center justify-center  md:p-[36px] md:pl-[24px] bg-transparent md:bg-white">
				<img :src="heroImage" alt="用优质流量放大投放效果"
					class="w-[240px] h-[207px] md:w-[528px] md:h-[456px] object-contain  mb-[35px] md:mb-0" />
				<!-- H5 按钮 -->
				<NuxtLink to="/contact"
					class="md:hidden flex items-center justify-center w-[264px] h-[48px] bg-[#3A82F9] rounded-full text-white font-pingfang font-medium text-[18px] leading-[26px] tracking-[0px] text-center cursor-pointer">
					联系我们
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup>
import heroImage from '~/assets/imgaes/advertiser/img_ggs5.webp'

const { navigateToAuthOrDashboard } = useAuth()

const data = {
	subtitle: '从对接到上线，最快当天启动',
	body: '覆盖全球优质媒体库存，支持多种广告形式与灵活定向。提供透明报表与可追溯对账，方便复盘与预算管理。'
}
</script>
