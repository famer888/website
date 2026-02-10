<template>
	<section class="w-full space-y-[48px]">
		<div class="max-w-[1200px] mx-auto pt-0 md:pt-[100px] grid grid-cols-1 md:grid-cols-2 ">
			<div class="bg-transparent md:bg-white order-2 md:order-1 px-6 md:px-0 pt-[48px] md:pl-[60px] md:pr-[87px] ">
				<h1
					class="font-pingfang font-medium tracking-[0px] text-[36px] md:text-[56px] leading-[56px] md:leading-[96px] 					text-[#171A1D] md:text-[#626671] mb-[24px] md:mb-[32px]">
					我们是谁<span class="md:hidden">?</span></h1>
				<div
					class="font-pingfang font-normal tracking-[0px] text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] text-[#93959C] text-justify md:text-left space-y-[20px] md:space-y-0.5">
					<p>{{ data.description1 }}</p>
					<p>{{ data.description2 }}</p>
				</div>
			</div>
			<div class="w-full order-1 md:order-2">
				<img :src="why1ImageSrc" alt="T1" class="w-full h-auto md:h-full md:object-cover" />
			</div>

		</div>
		<!-- 按钮 -->
		<div class="flex justify-center">
			<NuxtLink to="/register"
				class="w-[160px] h-[40px] md:w-[240px] md:h-[60px] bg-[#3A82F9] text-white rounded-full font-pingfang font-normal tracking-[0px] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-center hover:opacity-90 transition-opacity flex items-center justify-center">
				免费注册
			</NuxtLink>
		</div>
	</section>
</template>

<script setup>
import why1ImageSrc from '~/assets/imgaes/why/why1.png'

const data = {
	description1: 'T1 是一家创新型网络广告和数字营销公司,于2008年在加拿大蒙特利尔成立。T1的使命是通过每一次网络营销广告活动提升您公司和产品的业绩。',
	description2: '我们的专家团队将协助您找到当前效果最佳的广告创意,并为您提供详细的流量报告。'
}
</script>