<template>
  <section class="bg-white py-10 text-center md:text-left">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center gap-10 md:gap-0 ">
        <!-- 左侧文案 -->
        <div class="w-full md:w-1/2">
          <h3
            class="font-pingfang font-medium md:max-w-[520px] text-[16px] sm:text-[32px] md:text-[56px] leading-[36px] sm:leading-[46px] md:leading-[80px] tracking-normal text-[#111827] mb-6 md:mb-12">
            借助 T1 DSP 拓展您的广告业务
          </h3>
          <p
            class="font-pingfang font-normal md:max-w-[540px] text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-normal text-[#93959C] max-w-[560px] md:mx-0">
            通过接入我们的交易平台，您可以访问我们的优质广告资源，触达更多潜在客户，并制定更具创新性的营销策略。评估您的广告系列效果，了解哪些系列能够真正推动线上线下业务增长，创造实际价值。
          </p>
        </div>

        <!-- 右侧插图 -->
        <div class="w-full md:flex-1 flex justify-center md:justify-start">
          <img :src="img_dsp7" alt="拓展广告业务" class="w-full h-auto  object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img_dsp7 from '~/assets/imgaes/advertiser/DSP7.png'
</script>
