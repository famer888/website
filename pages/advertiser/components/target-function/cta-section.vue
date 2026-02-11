<template>
  <!-- 底部 CTA（双按钮） -->
  <section class="bg-white py-14 md:py-28">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3
        class="font-pingfang font-medium text-[36px] md:text-[56px] leading-[56px] md:leading-[96px] tracking-normal mb-3 md:mb-6"
      >
        需要解答您的疑问吗? <br class="sm:hidden" />想了解更多?
      </h3>
      <p
        class="font-pingfang font-normal text-left md:text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-normal text-[#93959C] max-w-[560px] mx-auto mb-8"
      >
        如果您对我们的平台功能有任何疑问，请随时通过以下方式联系我们！请查看我们的常见问题解答。
      </p>
      <div
        class="flex flex-row justify-center items-center gap-4 md:gap-12"
      >
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center text-white bg-brand rounded-[30px] font-pingfang font-normal  text-[16px]  leading-[24px] md:text-[20px]  md:leading-[30px]  tracking-normal transition-colors shadow-lg hover:shadow-xl  w-[124px] h-[40px] md:w-[240px] md:h-[60px]"
        >
          联系我们
        </NuxtLink>
        <NuxtLink
          to="/contact/help-center"
          class="inline-flex items-center justify-center text-brand bg-white border-2 border-brand rounded-[30px] font-pingfang font-normal text-[16px]  leading-[24px] md:text-[20px]  md:leading-[30px]  tracking-normal transition-colors w-[124px] h-[40px] md:w-[240px] md:h-[60px] "
        >
          常见问题
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
