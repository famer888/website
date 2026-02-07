<template>
	<section class="bg-[#ffffff] pt-[48px] md:pt-[75px] pb-0 md:pb-[98px]">
		<div class="w-full max-w-[1200px] mx-auto px-[24px] md:px-0">
			<div class="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
				<!-- 左侧内容区 -->
				<div class="flex-1 order-2 md:order-1 ">
					<div class="flex  flex-col gap-[36px] md:gap-[48px]">
						<!-- 内容列表 -->
						<div class="flex flex-col gap-[36px] md:gap-[58px]">
							<div v-for="(item, index) in sectionData.items" :key="index" class="flex flex-col">
								<!-- 标题 - H5单独一行，左边空出图标位置 -->
								<h3
									class="md:hidden font-medium text-[24px] leading-[36px] tracking-normal text-[#626671] mb-[8px] ml-[76px]">
									{{ item.title }}
								</h3>
								<!-- 图标+描述(H5) / 图标+标题+描述(PC) -->
								<div class="flex gap-[12px] md:gap-[15px]">
									<!-- 图标 -->
									<div class="flex-shrink-0">
										<img :src="item.icon" :alt="item.title"
											class="w-[64px] h-[64px] md:w-[136px] md:h-[136px] object-contain" />
									</div>
									<!-- 文字 -->
									<div class="flex-1">
										<!-- 标题 - 仅PC显示 -->
										<h3
											class="hidden md:block font-medium text-[24px] leading-[48px] tracking-normal text-[#626671] mb-[12px]">
											{{ item.title }}
										</h3>
										<p
											class="font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] tracking-normal text-[#93959C] text-justify md:text-left">
											{{ item.description }}
										</p>
									</div>
								</div>
							</div>

						</div>
						<!-- 报名按钮 -->
						<div class="flex justify-center md:justify-start md:ml-[151px] ">
							<NuxtLink :to="sectionData.ctaLink"
								class="inline-flex items-center justify-center bg-[#3A82F9] text-white rounded-full font-medium md:font-normal text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] tracking-[0px] transition-colors hover:bg-[#2B6FE8] w-[160px] h-[48px] md:w-[180px] md:h-[50px]">
								{{ sectionData.ctaText }}
							</NuxtLink>
						</div>
					</div>
				</div>

				<!-- 右侧插图 -->
				<div class="flex-1 order-1 md:order-2 flex justify-center">
					<img :src="rightIllustrationSrc" alt="移动广告技术"
						class="w-[280px] md:w-[488px] h-auto object-contain" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import techIcon1 from "~/assets/imgaes/why/mobile-ads/tech-section-1.svg";
import techIcon2 from "~/assets/imgaes/why/mobile-ads/tech-section-2.svg";
import rightIllustrationSrc from "~/assets/imgaes/why/mobile-ads/tech-section-right.svg";

const sectionData = {
	items: [
		{
			icon: techIcon1,
			title: "移动广告技术",
			description:
				"T1 Ads深知，对于希望提升线上影响力和知名度的品牌而言，移动广告至关重要。借助我们的自动优化技术，您可以全面掌控广告投放位置、目标受众和成本，并优化您的目标每次转化费用(CPA)。",
		},
		{
			icon: techIcon2,
			title: "触达目标受众",
			description:
				"明确目标受众、触达核心市场、实现利润最大化。您可以根据地理位置、人口统计特征和时间段来精准投放移动广告。我们的精准投放策略旨在确保在合适的时间、合适的地点、将合适的广告推送给合适的受众。",
		},
	],
	ctaLink: "/register",
	ctaText: "报名",
};
</script>
