<template>
	<section class="bg-white pt-[90px]  ">
		<div class="w-full max-w-[1200px] mx-auto px-[24px] md:px-0">
			<!-- 标题区域 -->
			<div class="text-left md:text-center mb-[48px] md:mb-[60px]">
				<h2
					class="font-medium text-[36px] md:text-[56px] leading-[56px] md:leading-[96px] tracking-[0px] text-[#626671] mb-[24px] md:mb-0">
					{{ sectionData.title }}
				</h2>
				<!-- PC分割线 -->
				<div class="hidden md:block mt-[13px] mb-[18px] mx-auto w-[190px] h-[1px] bg-[#C3C4C8]"></div>
				<h3
					class="font-medium text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] tracking-[0px] text-[#626671] mb-4">
					{{ sectionData.subtitle }}
				</h3>
				<p
					class="font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] tracking-[0px] text-[#93959C] max-w-full md:max-w-[1200px] mx-auto text-justify md:text-center">
					{{ sectionData.descriptionLine1 }}
				</p>
				<p
					class="font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] tracking-[0px] text-[#93959C] max-w-full md:max-w-[1200px] mx-auto text-justify md:text-center">
					{{ sectionData.descriptionLine2 }}
				</p>
			</div>

			<!-- 内容区域：左图右列表 -->
			<div class="flex flex-col md:flex-row gap-[48px] md:gap-[53px]  pb-[60px] pd:mb-[96px] items-center">
				<!-- 左侧：插图 -->
				<div class="flex justify-center order-1">
					<img :src="leftIllustrationSrc" :alt="sectionData.title"
						class="w-[280px] h-[231px] md:w-[641px] md:h-[528px] object-contain" />
				</div>

				<!-- 右侧：功能列表 -->
				<div class="flex-1 order-2">
					<div class="flex flex-col gap-[36px] md:gap-[32px]">
						<div v-for="(item, index) in sectionData.items" :key="index" class="flex gap-[18px] md:gap-[48px] md:h-[108px] items-center">
							<!-- 图标 -->
							<div class="flex-shrink-0">
								<img :src="item.icon" :alt="item.title"
									class="w-[52px] h-[52px] md:w-[80px] md:h-[80px] object-contain" />
							</div>
							<!-- 文字 -->
							<div class="flex-1 ">
								<h4
									class="font-medium text-[18px] md:text-[24px] leading-[36px] md:leading-[48px] tracking-[0px] text-[#626671] mb-[5px] md:mb-[4px]">
									{{ item.title }}
								</h4>
								<p
									class="font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] tracking-[0px] text-[#93959C] text-justify md:text-left">
									{{ item.description }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 分割线 -->
			<div class="mt-0 md:mt-[48px] mx-auto w-[320px] md:w-[1200px] h-[1px] border-t-[0.5px] border-[#C3C4C8]"></div>
			<!-- 底部注释 -->
			<div class="pt-[24px] pb-[24px] md:pt-[25px] md:pb-[32px] flex justify-center">
				<div class="text-center md:text-left">
					<p v-for="(note, index) in sectionData.footnotes" :key="index"
						class="font-normal text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0px] text-[#3A82F9]">
						{{ note }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
// 左侧大图
import leftIllustrationSrc from "~/assets/imgaes/why/mobile-ads/solution-left.svg";

// 图标
import iconSrc1 from "~/assets/imgaes/why/mobile-ads/solution-1.svg";
import iconSrc2 from "~/assets/imgaes/why/mobile-ads/solution-2.svg";
import iconSrc3 from "~/assets/imgaes/why/mobile-ads/solution-3.svg";
import iconSrc4 from "~/assets/imgaes/why/mobile-ads/solution-4.svg";

const sectionData = {
	title: "移动广告解决方案!",
	subtitle: "为移动用户提供高性能定向解决方案。",
	descriptionLine1: "让您的移动广告每天通过高性价比的CPM平台触达数百万在线用户。",
	descriptionLine2: "我们助您拓展移动广告活动规模，每日获得海量广告展示，并通过我们便捷的自动优化选项，助您轻松实现目标CPA。",
	items: [
		{
			icon: iconSrc1,
			title: "每日触达大量访客",
			description: "在覆盖全球各国、投放数千条移动广告的广告网络上竞价 CPM 展示次数。",
		},
		{
			icon: iconSrc2,
			title: "从经济高效的CPM模型中获益",
			description: "在您选择的 CPM 出价和广告系列预算下，获得大量的精准曝光。",
		},
		{
			icon: iconSrc3,
			title: "高效、精准、强大的目标定位",
			description: "按国家/地区、地区、人口统计信息、星期几和一天中的时间来定位您的移动广告活动。",
		},
		{
			icon: iconSrc4,
			title: "高曝光度广告位",
			description: "在我们的播放器下方、顶部和底部位置展示您的移动广告，吸引大量潜在客户关注您的产品。",
		},
	],
	footnotes: [
		"1.*受社交媒体和内容创作者推动，2024年全球移动广告支出将达到4020亿美元|Marketing Dive",
		"2.*美国移动广告增长(2020–2025至2023年12月更新|oberlo.com)",
	],
};
</script>
