<template>
	<div class="w-full md:max-w-[1200px] mx-auto px-6 md:px-0 py-[90px] md:pt-[92px] md:pb-[65px]">
		<div class="flex flex-col md:flex-row md:gap-8 md:items-center">
			<!-- 左侧：文案 -->
			<div class="flex-1">
				<h2
					class="font-pingfang font-medium tracking-[0px] text-[36px] md:text-[56px] leading-[56px] md:leading-[96px] text-[#626671] mb-4">
					{{ data.title }}
				</h2>
				<h3
					class="font-pingfang font-medium tracking-[0px] text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-[#626671] md:text-[#93959C] mb-6 md:mb-8">
					{{ data.subtitle }}
					<span class="md:hidden">。</span>
				</h3>
				<p
					class="font-pingfang font-normal tracking-[0px] text-[14px] md:text-base leading-[20px] md:leading-relaxed text-[#93959C] text-justify md:text-left mb-6 md:mb-0 md:max-w-[703px]">
					{{ data.description }}
				</p>
				<p
					class="md:hidden font-pingfang font-normal tracking-[0px] text-[14px] leading-[20px] text-[#93959C] text-justify mb-9">
					{{ data.descriptionH5Extra }}
				</p>
			</div>

			<!-- 右侧：图片 -->
			<div class="px-6 md:px-0 md:w-[420px] md:h-[420px] flex items-center justify-center md:flex-shrink-0">
				<img :src="why8ImageSrc" alt="移动广告" class="w-full h-auto md:h-full md:object-cover" />
			</div>
		</div>
	</div>
</template>

<script setup>
import why8ImageSrc from '~/assets/imgaes/why/why8.svg'

const data = {
	title: '移动广告',
	subtitle: '在所有设备上触达您的受众',
	description: '我们的广告投放技术赋能移动广告商，使他们能够针对全球数百万用户，在用户全天使用智能手机时，投放高度精准、可自动优化的广告活动。',
	descriptionH5Extra: '立即加入我们的广告联盟，让先进的移动广告和营销解决方案为您服务。'
}
</script>
