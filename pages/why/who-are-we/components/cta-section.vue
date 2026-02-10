<template>
	<section class="text-center bg-[#F4F5F9] md:bg-transparent py-[61px] md:py-[84px] px-6 md:px-0">
		<div class="w-full md:max-w-[1200px] mx-auto">
			<h2
				class="font-pingfang font-medium tracking-[0px] text-[32px] md:text-[64px] leading-[48px] md:leading-[96px] text-[#3A82F9] mb-4 md:mb-6">
				{{ ctaData.title }}
			</h2>
			<div class="space-y-1 mb-4 md:mb-12">
				<p
					class="font-pingfang font-normal tracking-[0px] text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-[#A2A3A5] md:text-[#93959C]">
					{{ ctaData.line1 }}
				</p>
				<p
					class="font-pingfang font-normal tracking-[0px] text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-[#A2A3A5] md:text-[#93959C]">
					{{ ctaData.line2 }}
				</p>
			</div>
			<NuxtLink to="/register"
				class="w-[160px] h-[40px] md:w-[240px] md:h-[60px] bg-[#3A82F9] text-white rounded-full font-pingfang font-normal tracking-[0px] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-center hover:opacity-90 transition-opacity flex items-center justify-center mx-auto">
				<span class="md:hidden">{{ ctaData.buttonH5 }}</span>
				<span class="hidden md:inline">{{ ctaData.buttonPC }}</span>
			</NuxtLink>
		</div>
	</section>
</template>

<script setup>
const ctaData = {
	title: '立即开始!',
	line1: '免费加入!',
	line2: '来看看我们能为您做些什么。',
	buttonPC: '立即加入',
	buttonH5: '报名'
}
</script>
