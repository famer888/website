<template>
	<section class="w-full py-[60px]">
		<div class="w-full md:max-w-[1200px] mx-auto ">
			<h2
				class="px-6 md:px-0 flex flex-col md:flex-row md:justify-center font-pingfang font-medium tracking-[0px] text-[36px] md:text-[56px] leading-[56px] md:leading-[96px] text-left md:text-center mb-6 md:mb-[60px]">
				<span class="text-[#171A1D]  md:text-[#626671] ">为什么选择</span> <span
					class="text-[#3A82F9]">T1<span class="md:hidden">DSP</span>?</span>
			</h2>
			<div class="flex flex-col md:flex-row gap-9 md:gap-[59px] md:items-center">
				<div class="md:w-[600px] shrink-0">
					<img :src="why5ImageSrc" alt="T1" class="w-full h-auto md:h-full md:object-cover" />
				</div>

				<!-- 功能点列表 -->
				<div
					class="flex flex-col items-start justify-between gap-6 md:gap-4 md:h-[390px] pl-4 pr-6 md:px-0">
					<div v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
						<img :src="feature.icon" :alt="feature.title" class="w-[72px] h-[68px] md:w-[120px] md:h-[120px] flex-shrink-0" />
						<div>
							<h3 class="font-pingfang font-medium tracking-[0px] text-[18px] md:text-[20px] leading-[36px] md:leading-[30px] text-[#626671] mb-[5px] md:mb-[8px]">{{ feature.title }}</h3>
							<p class="font-pingfang font-normal tracking-[0px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#93959C] text-justify md:text-left">
								{{ feature.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import why2ImageSrc from '~/assets/imgaes/why/why2.svg'
import why3ImageSrc from '~/assets/imgaes/why/why3.svg'
import why4ImageSrc from '~/assets/imgaes/why/why4.svg'
import why5ImageSrc from '~/assets/imgaes/why/why5.png'

const features = [
	{
		icon: why2ImageSrc,
		title: '触达您的目标受众!',
		description: '借助我们先进的广告投放和自动优化技术,将您的广告精准推送给目标受众。我们的专家团队致力于识别真正能为您的业务带来转化的流量。'
	},
	{
		icon: why3ImageSrc,
		title: '优化并转化您的内容!',
		description: '借助我们庞大的广告商资源和强大的流量分配算法,最大限度地利用您的网站流量。轻松实现转化、留住客户并拓展业务。'
	},
	{
		icon: why4ImageSrc,
		title: '高效,效果显著!',
		description: '点击和展示统计数利用易于理解的报告提供的全面成本、据,做出明智的数据驱动型决策。'
	}
]
</script>
