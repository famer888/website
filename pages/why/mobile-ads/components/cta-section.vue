<template>
	<section class="bg-[#F4F5F9] py-[61px] md:py-[54px]">
		<div class="max-w-3xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
			<!-- H5 内容 -->
			<div class="flex flex-col items-center gap-[16px] md:hidden">
				<!-- 标题 -->
				<h2
					class="font-medium text-[32px] leading-[48px] tracking-normal text-[#3A82F9]">
					{{ ctaDataH5.title }}
				</h2>
				<!-- 描述 -->
				<p class="font-normal text-[16px] leading-[24px] tracking-normal text-[#626671]">
					{{ ctaDataH5.descriptionPre }}<NuxtLink :to="ctaDataH5.faqLink"
						class="font-medium text-[#3A82F9]">{{ ctaDataH5.faqText }}</NuxtLink><br />
					{{ ctaDataH5.descriptionPost }}
				</p>
				<!-- 按钮 -->
				<NuxtLink :to="ctaDataH5.btn.link"
					class="inline-flex items-center justify-center bg-[#3A82F9] text-white rounded-[30px] font-normal text-[16px] leading-[24px] tracking-[0px] transition-colors hover:bg-[#2B6FE8] w-[160px] h-[40px]">
					{{ ctaDataH5.btn.text }}
				</NuxtLink>
			</div>

			<!-- PC 内容 -->
			<div class="hidden md:flex flex-col items-center gap-[24px]">
				<!-- 标题 -->
				<h2
					class="font-medium text-[64px] leading-[96px] tracking-normal text-[#3A82F9]">
					{{ ctaDataPC.title }}
				</h2>
				<!-- 描述 -->
				<p
					class="font-normal text-[24px] leading-[36px] tracking-normal text-[#626671] whitespace-pre-line">
					{{ ctaDataPC.description }}
				</p>
				<!-- 按钮 -->
				<NuxtLink :to="ctaDataPC.btn.link"
					class="inline-flex items-center justify-center bg-[#3A82F9] text-white rounded-full font-normal text-[20px] leading-[30px] tracking-[0px] transition-colors hover:bg-[#2B6FE8] w-[240px] h-[60px]">
					{{ ctaDataPC.btn.text }}
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup>
// H5 数据
const ctaDataH5 = {
	title: "想了解更多？",
	descriptionPre: "查看我们的 ",
	faqText: "常见问题解答",
	faqLink: "/faq",
	descriptionPost: "找不到想要的答案？",
	btn: {
		text: "联系我们",
		link: "/contact",
	},
};

// PC 数据
const ctaDataPC = {
	title: "立即开始!",
	description: "让我们助您实现\n最雄心勃勃的网络营销目标。",
	btn: {
		text: "报名",
		link: "/register",
	},
};
</script>
