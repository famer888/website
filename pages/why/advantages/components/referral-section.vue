<template>
	<section class="w-full space-y-[48px]">
		<div class="max-w-[1200px] mx-auto pt-0 pb-[60px] md:pt-[100px] grid grid-cols-1 md:grid-cols-2  items-center">
			<div class="bg-transparent md:bg-white px-6 md:px-0 pt-[48px] md:pl-[60px] md:pb-[60px] md:pr-[70px] col-span-1 h-full">
				<h2 class="font-pingfang font-medium text-[36px] leading-[56px] tracking-[0px] text-[#171A1D] md:text-[56px] md:leading-[96px] md:text-[#626671] mb-[24px] md:mb-[32px]">推荐计划</h2>
				<div class="font-pingfang font-normal text-[14px] leading-[20px] tracking-[0px] text-[#626671] md:text-[18px] md:leading-[26px] md:text-[#93959C] space-y-[24px] md:space-y-0 mb-[24px] md:mb-[34px]">
					<p>通过T1推荐计划，邀请合作伙伴加入平台即可获得佣金奖励。</p>
					<p>推荐越多，收益越高，奖励透明、结算稳定。</p>
				</div>
				<NuxtLink to="/advertiser/how-to-operate"
					class="hidden md:flex w-[160px] h-[40px] md:w-[240px] md:h-[60px] bg-[#3A82F9] text-white rounded-full font-pingfang font-normal tracking-[0px] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-center transition-colors items-center justify-center">
					了解更多
				</NuxtLink> 
			</div>
			<div class="bg-transparent md:bg-white col-span-1 h-full px-6 py-0 md:py-[53px] md:pr-[130px] flex items-center flex-col gap-[40px] justify-center md:justify-end">
				<img :src="advantages3ImageSrc" alt="推荐计划" class="w-[200px] h-[200px] md:w-auto md:h-auto" />
				<NuxtLink to="/"
					class="md:hidden flex items-center justify-center w-[264px] h-[48px] bg-[#3A82F9] rounded-full text-white font-pingfang font-medium text-[18px] leading-[26px] tracking-[0px] text-center">
					了解更多
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup>
import advantages3ImageSrc from '~/assets/imgaes/why/advantages3.webp'
</script>
