<template>
	<section class="w-full ">
		<div class="w-full md:max-w-[1200px] mx-auto px-6 md:px-0 md:py-[90px] md:pt-[92px] md:pb-[60px]">
			<div class="flex flex-col md:flex-row gap-[24px] md:gap-[45px] pt-[48px] md:pt-0 md:items-center">
				<!-- 左侧：图片（PC左，H5下） -->
				<div class="px-6 md:px-0 flex items-center justify-center md:flex-shrink-0 order-2 md:order-1">
					<img :src="advantages2ImageSrc" alt="账户安全" class="w-[240px] h-[240px] md:w-[400px] md:h-[400px]" />
				</div>
				<!-- 右侧：文案（PC右，H5上） -->
				<div class="flex-1 order-1 md:order-2">
					<h2 class="font-pingfang font-medium text-[36px] leading-[56px] tracking-[0px] text-[#626671] md:text-[56px] md:leading-[96px] mb-[24px] md:mb-[32px]">账户安全</h2>
					<div class="font-pingfang font-normal text-[14px] leading-[20px] tracking-[0px] text-[#93959C] md:text-[18px] md:leading-[26px] space-y-[24px] md:space-y-0">
						<p>在 T1 Ads, 我们极其重视您的账户、品牌和公司机密信息的在线安全。因此,我们提供双因素身份验证来保护您的账户安全。</p>
						<p>双因素身份验证 (TFA) 能有效防止除您本人以外的任何人访问您的 T1 账户。如果您的个人资料有任何修改 (例如更改密码、更改电子邮件地址等), TFA 将会被触发,您将收到短信和/或电子邮件通知。</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import advantages2ImageSrc from '~/assets/imgaes/why/advantages2.png'
</script>
