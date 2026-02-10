<template>
  <!-- Hero（1920x560 顶图，自适应） -->
  <section
    class="relative overflow-hidden h-[260px] sm:h-[320px] md:h-[420px] lg:h-[560px]"
  >
    <img
      :src="img_mbgn8"
      alt="目标功能"
      class="absolute inset-0 w-full h-full object-cover object-center"
    />

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div class="h-full flex items-center">
        <div class="w-full text-start">
          <h1
            class="font-pingfang font-medium text-[28px] md:text-[56px] leading-[60px] md:leading-[96px] tracking-normal text-white mb-4"
          >
            目标功能
          </h1>
          <!-- 水平线 -->
          <div
            class="w-[120px] sm:w-[160px] md:w-[200px] h-[2px] bg-white/60 my-8"
          ></div>
          <p
            class="font-pingfang font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-normal text-white"
          >
            了解更多关于 T1 更多功能
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img_mbgn8 from '~/assets/imgaes/advertiser/img_mbgn8.jpg'
</script>
