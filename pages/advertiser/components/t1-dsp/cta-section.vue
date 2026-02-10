<template>
  <section class="bg-[#F5F7FB] py-12 sm:py-14 lg:py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3
        class="font-pingfang font-medium text-[36px] sm:text-[24px] md:text-[56px] leading-[32px] sm:leading-[36px] md:leading-[96px] tracking-normal text-[#3A82F9] mb-6"
      >
        成为广告商！！
      </h3>
      <p
        class="font-pingfang font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-normal text-[#93959C] max-w-[560px] mx-auto mb-8"
      >
        让我们助您实现最雄心勃勃的 网络营销目标
      </p>
      <div class="flex justify-center mt-10">
        <button
          @click="navigateToAuthOrDashboard('/auth/register')"
          class="cursor-pointer register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[40px] md:w-[240px] md:h-[60px]"
        >
          报名
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { navigateToAuthOrDashboard } = useAuth()
</script>
