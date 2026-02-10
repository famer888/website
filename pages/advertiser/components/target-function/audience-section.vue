<template>
  <!-- 了解你的受众 -->
  <section class="bg-white py-10 sm:py-14 lg:py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2
        class="font-pingfang font-medium text-[36px] md:text-[56px] leading-[56px] md:leading-[96px] tracking-normal text-[#111827] mb-6 mt-0 md:mt-14"
      >
        了解你的受众
      </h2>
      <p
        class="font-pingfang font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-normal text-[#93959C] max-w-[820px] mx-auto mb-12"
      >
        我们提供覆盖各种地区和设备的多种定向功能。凭借我们成熟的定向技术和专业知识，我们能够利用算法帮助您发现、定位并优化最能提升品牌转化率的受众群体。
      </p>
      <div class="flex justify-center">
        <button
          @click="navigateToAuthOrDashboard('/auth/register')"
          class="cursor-pointer register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[40px] md:w-[240px] md:h-[60px]"
        >
          创建您的账户
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { navigateToAuthOrDashboard } = useAuth()
</script>
