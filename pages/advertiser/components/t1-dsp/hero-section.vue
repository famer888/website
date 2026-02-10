<template>
	<section class="relative overflow-hidden h-[260px] sm:h-[320px] md:h-[420px] lg:h-[560px]">
		<!-- 顶部大图：用 img + object-cover，自适应不同屏幕（1920x560） -->
		<img :src="img_t1dsp6x" alt="T1 DSP" class="absolute inset-0 w-full h-full object-cover  md:object-center" />
		<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
			<div class="h-full flex items-center">
				<div class="w-full flex flex-col md:flex-row items-center gap-8 lg:gap-12">
					<!-- 文案 -->
					<div class="w-full md:w-1/2 text-white">
						<h1
							class="font-pingfang font-medium text-[32px] md:text-[80px] leading-[44px] md:leading-[110px] tracking-normal mb-6 md:mb-8">
							什么是<br />
							T1 DSP?
						</h1>
						<!-- 一条线 -->
						<div class="w-[72px] md:w-[148px] h-[1px] border-t border-white mb-5 md:mb-[31px]"></div>

						<p
							class="font-pingfang font-normal text-[14px] sm:text-[16px] md:text-[24px] leading-[22px] sm:leading-[26px] tracking-normal text-white/80">
							广告投放站点
						</p>
					</div>

					<!-- 占位列：保证 PC 端文案保持在左半边（背景图在右侧） -->
					<div class="hidden md:block md:w-1/2" aria-hidden="true" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import img_t1dsp6x from '~/assets/imgaes/advertiser/img_t1dsp6x.jpg'
</script>
