<template>
	<section class="w-full ">
		<div class="w-full md:max-w-[1200px] mx-auto px-6 md:px-0 py-[90px] md:py-[60px] md:pt-[60px] md:pb-[120px]">
			<div class="text-center space-y-[16px] md:space-y-[24px] mb-[46px] md:mb-[60px]">
				<h2
					class="font-pingfang font-medium text-[36px] leading-[56px] tracking-[0px] text-[#626671] md:text-[56px] md:leading-[96px]">
					技术</h2>
				<p
					class="font-pingfang font-normal text-[16px] leading-[24px] tracking-[0px] text-[#626671] md:font-medium md:text-[24px] md:leading-[36px] md:text-[#93959C]">
					让我们为您分担营销的繁重工作</p>
			</div>

			<!-- 四个功能特性 -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-[36px] md:gap-x-[64px] md:gap-y-[48px]">
				<div v-for="(item, index) in technologyFeatures" :key="index" class="flex items-start gap-[10px] md:gap-[12px]">
					<div class="flex-shrink-0 w-[60px] md:w-[148px] p-[6px] md:p-[24px]">
						<img :src="item.icon" :alt="item.title" class="w-full h-full object-contain" />
					</div>
					<div class="flex-1 md:pt-[16px]">
						<h3 class="font-pingfang font-medium text-[18px] leading-[26px] tracking-[0px] text-[#626671] md:text-[20px] md:leading-[30px] mb-[8px] md:mb-[12px]">{{ item.title }}</h3>
						<p class="font-pingfang font-normal text-[14px] leading-[20px] tracking-[0px] text-[#93959C] text-justify md:text-left md:text-[16px] md:leading-[24px]">{{ item.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import advantages4ImageSrc from '~/assets/imgaes/why/advantages4.svg'
import advantages5ImageSrc from '~/assets/imgaes/why/advantages5.svg'
import advantages6ImageSrc from '~/assets/imgaes/why/advantages6.svg'
import advantages7ImageSrc from '~/assets/imgaes/why/advantages7.svg'

const technologyFeatures = [
	{
		icon: advantages4ImageSrc,
		title: '您的广告可以在本地或全球范围内展示',
		description: '将您的广告和在线广告活动定向到特定国家、地区或城市的客户。'
	},
	{
		icon: advantages7ImageSrc,
		title: '调整、测试以及停止、启动和暂停功能',
		description: '您可以随时免费调整广告和广告系列,尝试新的条款,暂停广告系列并随时重新开始——而且无需签订合同。'
	},
	{
		icon: advantages6ImageSrc,
		title: '可衡量、可问责、灵活的营销活动',
		description: 'T1 Ads 通过易于理解的报告,清晰地展示有多少人注意到您的广告,以及点击访问您网站的转化率。借助我们的追踪和分析工具,您甚至可以查看通过我们的广告活动直接为您的网站带来的实际销售额。'
	},
	{
		icon: advantages5ImageSrc,
		title: '在合适的时间触达合适的受众',
		description: '当人们通过搜索引擎在线搜索您提供的产品和服务时,您的在线业务就能被他们找到,这就是为什么 T1 Ads 提供分时段搜索功能的原因。'
	}
]
</script>
