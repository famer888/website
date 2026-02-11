<template>
  <!-- 底部 CTA（双按钮） -->
  <section class="bg-white pt-[61px] pb-[80px] md:pt-[120px] md:pb-[120px]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3
        class="font-pingfang font-medium text-[32px] md:text-[56px] leading-[48px] md:leading-[96px] tracking-[0px] text-center text-[#3A82F9] md:text-[#171A1D] mb-[36px] md:mb-[48px]"
        v-html="ctaTitle" />
      <p
        class="font-pingfang font-normal text-center text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] tracking-[0px] text-[#A2A3A5] md:text-[#93959C] max-w-[560px] mx-auto mb-[23px] md:mb-[48px]">
        如果您对我们的平台功能有任何疑问，请随时通过以下方式联系我们！请查看我们的常见问题解答。
      </p>
      <div class="flex flex-row justify-center items-center gap-4 md:gap-12">
        <NuxtLink to="/contact"
          class="inline-flex items-center justify-center text-white bg-brand rounded-[30px] font-pingfang font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] tracking-normal transition-colors shadow-none hover:shadow-xl w-[124px] h-[40px] md:w-[240px] md:h-[60px]">
          联系我们
        </NuxtLink>
        <NuxtLink to="/contact/help-center"
          class="inline-flex items-center justify-center text-brand md:text-white bg-white md:bg-brand border border-brand md:border-transparent rounded-[30px] font-pingfang font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] tracking-normal transition-colors shadow-none hover:shadow-xl w-[124px] h-[40px] md:w-[240px] md:h-[60px]">
          常见问题
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const ctaTitle = `需要解答您的疑问吗?<br class="sm:hidden" /><span class="hidden sm:inline">/</span>想了解更多?`
</script>
