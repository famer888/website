<template>
	<div>
		<section v-for="(step, index) in steps" :key="`step-${index}`" class="bg-white py-10 sm:py-14 lg:py-18">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div class="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12">
							<!-- 文案 - 移动端在上，桌面端根据配置 -->
							<div :class="['w-full md:w-1/2', 'order-1', step.textOrder]">
								<h2 :class="styles.stepTitle" v-html="step.title"></h2>
								<p v-if="step.subtitle" :class="styles.stepSubtitle">
									{{ step.subtitle }}
								</p>
								<p :class="styles.stepBody" v-html="step.description"></p>
							</div>

							<!-- 图片 - 移动端在下，桌面端根据配置 -->
							<div :class="['w-4/5 md:w-1/2 relative', 'order-2', step.imageOrder]">
								<img :src="step.image" :alt="step.title" class="relative w-full h-auto object-contain" />
							</div>
						</div>
				</div>
		</section>
	</div>
</template>

<script setup>
import img_hd2 from '~/assets/imgaes/advertiser/img_hd2.webp'
import img_ad3 from '~/assets/imgaes/advertiser/img_ad3.webp'
import img_wd4 from '~/assets/imgaes/advertiser/img_wd4.webp'
import img_kb1 from '~/assets/imgaes/advertiser/img_kb1.webp'

const styles = {
	stepTitle:
		'font-pingfang font-medium text-[42px] sm:text-[48px] md:text-[64px] leading-[60px] sm:leading-[69px] md:leading-[96px] tracking-normal text-[#171A1D] mb-12',
	stepSubtitle:
		'font-pingfang font-medium text-[24px] sm:text-[24px] md:text-[24px] leading-[42px] sm:leading-[48px] md:leading-[36px] tracking-normal text-[#626671] mb-6',
	stepBody:
		'font-pingfang font-normal text-[18px] sm:text-[18px] leading-[33px] sm:leading-[28px] tracking-normal text-[#93959C] max-w-[584px]',
}

const steps = [
	{
		title: '明确您的活动。',
		subtitle: '务必言简意赅。',
		description:
			'为您的广告系列设置名称、目标群体、设备和每日预算。利用我们的关键词选择功能，精准定位细分市场，定义您的受众群体，并选择其他设置，例如时间定位和频次限制，以最大限度地发挥营销活动的效用。',
		image: img_hd2,
		imageOrder: 'md:order-1',
		textOrder: 'md:order-2',
	},
	{
		title: '提交素材与规格确认',
		subtitle: '按投放目标匹配位置，确保上线节奏可控',
		description:
			'从资源列表中选择合适的广告形式与位置，并设置投放节奏与频控。我们会同步确认排期与交付要求，保障稳定上线。',
		image: img_ad3,
		imageOrder: 'md:order-2',
		textOrder: 'md:order-1',
	},
	{
		title: '选择资源与投放位置',
		subtitle: '按投放目标匹配位置，确保上线节奏可控',
		description: '从资源列表中选择合适的广告形式与位置，并设置投放节奏与频控。我们会同步确认排期与交付要求，保障稳定上线。',
		image: img_wd4,
		imageOrder: 'md:order-1',
		textOrder: 'md:order-2',
	},
	{
		title: '跟进<br class="hidden sm:block" />投资回报率',
		subtitle: null,
		description:
			'开始看到点击量、潜在客户和销售额的增长。<br/>分析您的统计数据并进行优化，以获得更好的结果。',
		image: img_kb1,
		imageOrder: 'md:order-2',
		textOrder: 'md:order-1',
	},
]
</script>
