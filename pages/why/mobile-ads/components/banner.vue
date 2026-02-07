<template>
	<section class="relative w-full overflow-hidden">
		<!-- 背景图 -->
		<img :src="bannerBgSrc" :alt="bannerData.title"
			class="absolute inset-0 w-full h-full object-cover object-center" />

		<!-- 内容区域 -->
		<div
			class="relative z-10 w-full min-h-[380px] md:h-[580px] flex flex-col justify-start md:justify-center items-start md:items-center px-[24px] py-[76px] md:px-8 md:py-0 lg:px-16">
			<!-- 标题 -->
			<h1
				class="font-medium text-[36px] md:text-[64px] leading-[56px] md:leading-[96px] tracking-normal text-white mb-[10px] md:mb-6">
				{{ bannerData.title }}
			</h1>

			<!-- 分隔线 -->
			<div class="w-[90px] border-t border-white mb-[10px] md:mb-6"></div>

			<!-- 副标题 -->
			<p
				class="font-medium text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] tracking-normal text-white mb-6">
				{{ bannerData.subtitle }}
			</p>

			<!-- 描述 -->
			<p
				class="font-normal md:font-medium text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] tracking-normal text-white/90 text-justify md:text-left md:max-w-[1200px]">
				{{ bannerData.description }}
			</p>
		</div>
	</section>
</template>

<script setup>
import bannerBgSrc from "~/assets/imgaes/why/mobile-ads/banner.png";

const bannerData = {
	title: "移动广告",
	subtitle: "抓住移动广告热潮的机遇!",
	description:
		"T1的创新广告技术引领您迈入移动广告时代。2023年，全球移动互联网广告支出达到创纪录的 3620 亿美元'，仅美国一地的移动广告支出就高达 1948 亿美元'。智能手机和移动技术已成为理想的媒体形式，它们始终在线、无处不在、触手可及",
};
</script>
