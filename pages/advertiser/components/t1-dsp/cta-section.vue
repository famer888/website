<template>
  <section class="text-center bg-[#F4F5F9] md:bg-transparent py-[61px] md:py-[84px] px-6 md:px-0">
    <div class="w-full md:max-w-[1200px] mx-auto">
      <h2
        class="font-pingfang font-medium tracking-[0px] text-[32px] md:text-[64px] leading-[48px] md:leading-[96px] text-[#3A82F9] mb-4 md:mb-6">
        {{ ctaData.title }}
      </h2>
      <div class="space-y-1 mb-4 md:mb-12">
        <p
          class="font-pingfang font-normal tracking-[0px] text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-[#A2A3A5] md:text-[#93959C]">
          {{ ctaData.line1 }}
        </p>
      </div>
      <button @click="navigateToAuthOrDashboard('/auth/register')"
        class="cursor-pointer w-[160px] h-[40px] md:w-[240px] md:h-[60px] bg-[#3A82F9] text-white rounded-full font-pingfang font-normal tracking-[0px] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-center transition-colors flex items-center justify-center mx-auto">
        <span class="md:hidden">{{ ctaData.buttonH5 }}</span>
        <span class="hidden md:inline">{{ ctaData.buttonPC }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
const { navigateToAuthOrDashboard } = useAuth()

const ctaData = {
  title: '成为广告商！！',
  line1: '让我们助您实现最雄心勃勃的网络营销目标。',
  buttonPC: '报名',
  buttonH5: '报名'
}
</script>
