<template>
	<section class="w-full md:p-0">
		<div class="w-full md:max-w-[1200px] mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-0">
			<!-- 左侧图片 -->
			<img src="~/assets/imgaes/advertiser/img_wd4.webp" alt="" class="w-[280px] h-[280px] md:w-[600px] md:h-[600px] object-contain order-2 md:order-1 mx-auto md:mx-0">
			<!-- 右侧文字 -->
			<div class="pt-[48px] md:pt-[101px] md:pl-[40px] order-1 md:order-2">
				<h2
					class="font-pingfang font-medium tracking-[0px] text-[36px] md:text-[64px] leading-[56px] md:leading-[96px] text-[#626671] md:text-[#171A1D] mb-[24px] md:mb-[48px]"
					v-html="'选择站点<br class=\'hidden sm:block\' />及安置'"></h2>
				<p
					class="font-pingfang font-normal tracking-[0px] text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#93959C]">
					从高流量网站列表中选择，然后选择您希望广告展示的位置。</p>
			</div>
		</div>
	</section>
</template>
