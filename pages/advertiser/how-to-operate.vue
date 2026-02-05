<template>
  <div class="bg-white">
    <!-- Hero：如何成为广告商 -->
    <section class="bg-gradient-to-b from-[#EEF5FF] to-white py-8 sm:py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-[0px] shadow-sm border-none border-[#EEF0F4] overflow-hidden">
          <div class="flex flex-col md:flex-row items-stretch">
            <!-- 左侧文案 -->
            <div class="flex-1 px-6 sm:px-10 py-8 sm:py-12">
              <h1 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[40px] leading-[40px] sm:leading-[48px] md:leading-[56px] tracking-normal text-[#111827] mb-4">
                如何成为广告商?
              </h1>
              <p class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] tracking-normal text-[#A2A3A5] max-w-[520px] mb-2">
                您的广告距离您想要触达的受众群体只有几步之遥。
              </p>
              <p class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] tracking-normal text-[#A2A3A5] max-w-[520px] mb-8">
                我们的自动化服务界面，覆盖定位选项、CPM 竞价平台和创意管理发布等关键功能，帮助您更高效地开展业务并拓展市场。
              </p>

              <NuxtLink
                to="/contact"
                class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[140px] h-[44px] sm:w-[160px] sm:h-[48px]"
              >
                联系我们
              </NuxtLink>
            </div>

            <!-- 右侧插图（占位图，后续可替换） -->
            <div class="flex-1 bg-white px-6 sm:px-10 py-8 sm:py-12 flex items-center justify-center">
              <img
                :src="img_ggs5"
                alt="如何成为广告商"
                class="w-full h-auto max-w-[520px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 步骤 1：明确您的活动 -->
    <section class="bg-white py-10 sm:py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <!-- 左侧插图 -->
          <div class="w-full md:w-1/2 relative">
            <img
              :src="img_kb1"
              alt="明确您的活动"
              class="relative w-full h-auto object-contain"
            />
          </div>

          <!-- 右侧文案 -->
          <div class="w-full md:w-1/2">
            <h2 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[46px] md:leading-[52px] tracking-normal text-[#111827] mb-4">
              明确您的活动。
            </h2>
            <p class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] tracking-normal text-[#A2A3A5] max-w-[520px]">
              明确广告目标受众、预算与周期。选择合适的投放目标、素材类型与展示位置，确保活动从一开始就具备可衡量、可优化的方向。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 步骤 2：上传您的横幅广告 -->
    <section class="bg-white py-10 sm:py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <!-- 左侧文案 -->
          <div class="w-full md:w-1/2 order-2 md:order-1">
            <h2 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[46px] md:leading-[52px] tracking-normal text-[#111827] mb-4">
              上传您的横幅广告。
            </h2>
            <p class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] tracking-normal text-[#A2A3A5] max-w-[520px] mb-4">
              让你的信息表达更有创意！
            </p>
            <p class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] tracking-normal text-[#A2A3A5] max-w-[520px]">
              可以上传横幅图片、包含 URL 的 HTML 内容或自定义创意。我们建议优先准备常用尺寸素材，便于在不同站点与位置获得更好的覆盖与转化表现。
            </p>
          </div>

          <!-- 右侧插图 -->
          <div class="w-full md:w-1/2 order-1 md:order-2 relative">
            <img
              :src="img_hd2"
              alt="上传横幅广告"
              class="relative w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 步骤 3：选择站点及安置 -->
    <section class="bg-white py-10 sm:py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <!-- 左侧插图 -->
          <div class="w-full md:w-1/2 relative">
            <img
              :src="img_ad3"
              alt="选择站点及安置"
              class="relative w-full h-auto object-contain"
            />
          </div>

          <!-- 右侧文案 -->
          <div class="w-full md:w-1/2">
            <h2 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[46px] md:leading-[52px] tracking-normal text-[#111827] mb-4">
              选择站点<br class="hidden sm:block" />
              及安置
            </h2>
            <p class="font-pingfang font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] tracking-normal text-[#A2A3A5] max-w-[520px]">
              从高质量的网站列表中选择投放站点，然后选择广告将要展示的位置。通过位置与受众的组合，让每一次展示更贴近潜在客户。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 步骤 4：跟进投资回报率 -->
    <section class="bg-white py-10 sm:py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <!-- 左侧文案 -->
          <div class="w-full md:w-1/2 order-2 md:order-1">
            <h2 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[46px] md:leading-[52px] tracking-normal text-[#111827] mb-4">
              跟进<br class="hidden sm:block" />
              投资回报率
            </h2>
            <p class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] tracking-normal text-[#A2A3A5] max-w-[520px]">
              开始投放后，监控在不同站点和位置的表现。分析关键数据并持续优化出价、素材与定向设置，以获得更好的投资回报。
            </p>
          </div>

          <!-- 右侧插图 -->
          <div class="w-full md:w-1/2 order-1 md:order-2 relative">
            <img
              :src="img_wd4"
              alt="投资回报率"
              class="relative w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 底部 CTA -->
    <section class="bg-[#F5F7FB] py-12 sm:py-14 lg:py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-pingfang font-medium text-[22px] sm:text-[24px] md:text-[28px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-normal text-[#3A82F9] mb-3">
          成为广告商！！
        </h2>
        <p class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] tracking-normal text-[#A2A3A5] mb-6">
          让我们协助您实现最核心的营销目标。
        </p>
        <div class="flex justify-center">
          <NuxtLink
            to="/contact"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]"
          >
            报名
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import img_ggs5 from '~/assets/imgaes/advertiser/img_ggs5.png'
import img_ad3 from '~/assets/imgaes/advertiser/img_ad3.png'
import img_hd2 from '~/assets/imgaes/advertiser/img_hd2.png'
import img_kb1 from '~/assets/imgaes/advertiser/img_kb1.png'
import img_wd4 from '~/assets/imgaes/advertiser/img_wd4.png'

// SEO 配置
useHead({
  title: '如何成为广告商 - T1',
  meta: [
    { name: 'description', content: '了解如何成为广告商：明确活动、上传横幅广告、选择站点及安置、跟进投资回报率。' }
  ]
})

</script>

