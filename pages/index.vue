<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Hero 区域 -->
    <div class="flex-1">
    <section class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        <div class="flex flex-col gap-6 sm:gap-8 lg:gap-12">
          <!-- 标题 - 始终在最顶部 -->
          <div class="text-center px-[15%] sm:px-0">
            <h1 class="font-pingfang font-medium text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[48px] sm:leading-[72px] md:leading-[84px] lg:leading-[96px] tracking-normal text-gray-900 mb-4 sm:mb-6">
              在全球顶级网站上投放广告
            </h1>
          </div>

          <!-- 图片 - 移动端在标题后，PC端在最后 -->
          <div class="flex justify-center md:order-last -mx-4 sm:mx-0">
            <div class="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl sm:px-0">
              <img 
                :src="centerImageSrc" 
                alt="广告平台展示" 
                class="w-full h-auto object-contain"
              />
            </div>
          </div>

          <!-- 内容 - PC端在标题后，移动端在图片后 -->
          <div class="text-center md:order-none">
            <!-- 统计数据 -->
            <div class="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <p class="font-pingfang font-normal text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-normal text-center text-[#A2A3A5]">
                每日平均拥有1.02亿访问量,10938 用户量!
              </p>
              <p class="font-pingfang font-normal text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-normal text-center text-[#A2A3A5]">
                每日平均实现1.02亿广告展示量
              </p>
            </div>

            <!-- 文案 -->
            <p class="font-pingfang font-medium text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[48px] md:leading-[54px] lg:leading-[72px] tracking-normal text-gray-900 py-5 sm:py-0 mb-6 sm:mb-8">
              大家都在T1上投放,就差你了!
            </p>

            <!-- 按钮组 - 移动端左右布局，PC端左右布局 -->
            <div class="flex flex-row gap-4 justify-center items-center">
              <NuxtLink 
                to="/register" 
                class="register-btn inline-flex items-center justify-center text-white rounded-full text-sm sm:text-base font-semibold transition-colors shadow-lg hover:shadow-xl w-[124px] h-[40px] md:w-[200px] md:h-[60px]"
              >
                注册
              </NuxtLink>
              <NuxtLink 
                to="/learn-more" 
                class="learn-more-btn inline-flex items-center justify-center bg-white border-2 rounded-full text-sm sm:text-base font-semibold transition-colors w-[124px] h-[40px] md:w-[200px] md:h-[60px]"
              >
                了解更多
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成为一名广告商部分 -->
    <section class="bg-[#F5F5F5] py-12 sm:py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- 标题 - 移动端在最上面 -->
          <div class="order-1 lg:order-none w-full lg:col-span-2 text-center lg:hidden">
            <h2 class="font-pingfang font-medium text-[24px] xs:text-[28px] sm:text-[32px] leading-[36px] xs:leading-[42px] sm:leading-[48px] tracking-normal text-[#707273] w-[235px] h-[48px] mx-auto">
              成为一名广告商!
            </h2>
          </div>

          <!-- 左侧插图 - 移动端在标题后，PC端在左侧 -->
          <div class="order-2 lg:order-1 flex justify-center lg:justify-start w-full px-[10px] lg:px-0">
            <div class="w-full max-w-md lg:max-w-lg">
              <img 
                :src="center2ImageSrc" 
                alt="成为一名广告商" 
                class="w-full h-auto object-contain"
              />
            </div>
          </div>

          <!-- 右侧内容 - 移动端在图片后，PC端在右侧 -->
          <div class="order-3 lg:order-2 w-full max-w-[500px]">
            <!-- PC端标题 -->
            <div class="hidden lg:flex justify-center mb-8">
              <h2 class="font-pingfang font-medium text-[64px] leading-[96px] tracking-normal text-[#707273]">
                成为一名广告商!
              </h2>
            </div>

            <!-- 特性列表 -->
            <div class="space-y-6 mb-8 px-[10%] md:px-0">
              <!-- 特性1: 大量精准流量 -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <img 
                    :src="icon1Src" 
                    alt="大量精准流量" 
                    class="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[27px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-normal text-[#747677] mb-2">
                    大量精准流量!
                  </h3>
                  <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#A2A3A5] leading-relaxed">
                    提升销售额和优化潜在客户数量，我们网站每日投放的大量广告展示。广泛触达您的目标受众，您只需要选择合适的广告位，精准投放给目标客户。
                  </p>
                </div>
              </div>

              <!-- 特性2: 量身定制的全球在线营销 -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <img 
                    :src="icon3Src" 
                    alt="量身定制的全球在线营销" 
                    class="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[27px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-normal text-[#747677] mb-2">
                    量身定制的全球在线营销!
                  </h3>
                  <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#A2A3A5] leading-relaxed">
                    定制每一次广告投放。选择合适的广告位，将会话的广告精准送达目标客户，您可以帮助全球流量，特别是在特定国家或城市。
                  </p>
                </div>
              </div>

              <!-- 特性3: 灵活的广告投放平台 -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <img 
                    :src="icon2Src" 
                    alt="灵活的广告投放平台" 
                    class="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[27px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-normal text-[#747677] mb-2">
                    灵活的广告投放平台!
                  </h3>
                  <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#A2A3A5] leading-relaxed">
                    您的广告将精准送达目标客户，我们专业的自动化广告平台为电商业务带来理想的性能和效果。
                  </p>
                </div>
              </div>
            </div>

            <!-- 工作原理按钮 -->
            <div class="flex justify-center lg:justify-start px-[10%] md:px-0 lg:pl-[80px]">
              <NuxtLink 
                to="/how-it-works" 
                class="register-btn inline-flex items-center justify-center text-white rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] leading-[24px] sm:leading-[27px] md:leading-[28.5px] lg:leading-[30px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[200px] h-[50px] md:w-[240px] md:h-[60px]"
              >
                工作原理
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 媒体资料部分 -->
    <section class="bg-[#F5F5F5] py-12 sm:py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- 移动端标题居中 -->
          <div class="order-1 lg:hidden w-full text-center">
            <h2 class="font-pingfang font-medium text-[24px] xs:text-[28px] sm:text-[32px] leading-[36px] xs:leading-[42px] sm:leading-[48px] tracking-normal text-[#707273]">
              媒体资料
            </h2>
          </div>

          <!-- 图片 - 移动端在标题后，PC端在右侧 -->
          <div class="order-2 lg:order-2 flex justify-center lg:justify-end w-full px-[10px] lg:px-0">
            <div class="w-full max-w-md lg:max-w-lg">
              <img 
                :src="center3ImageSrc" 
                alt="媒体资料" 
                class="w-full h-auto object-contain"
              />
            </div>
          </div>

          <!-- 内容 - 移动端在图片后，PC端在左侧 -->
          <div class="order-3 lg:order-1 w-full px-[10%] lg:px-0">
            <!-- PC端标题 -->
            <h2 class="hidden lg:block font-pingfang font-medium text-[64px] leading-[96px] tracking-normal text-[#707273] mb-6">
              媒体资料
            </h2>
            <p class="font-pingfang font-normal text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#A2A3A5] leading-relaxed mb-8">
              本文档概述了T1的广告和优质广告资源。了解我们的广告格式、T1 DSP、热门垂直市场、T1经验以及最新统计数据。只需几次点击即可触达全球受众。
            </p>
            <div class="flex justify-center">
              <NuxtLink 
                to="/download-media-kit" 
                class="learn-more-btn inline-flex items-center justify-center bg-[#F5F5F5] border-2 rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] leading-[24px] sm:leading-[27px] md:leading-[28.5px] lg:leading-[30px] tracking-normal transition-colors w-[200px] h-[50px] md:w-[240px] md:h-[60px]"
              >
                立即下载
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 立即开始部分 -->
    <section class="bg-[#F5F5F5] py-12 sm:py-16 lg:py-24">
      <div class="max-w-2xl mx-auto px-[20%] sm:px-6 lg:px-8 text-center">
        <h2 class="font-pingfang font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] leading-[48px] sm:leading-[60px] md:leading-[72px] lg:leading-[96px] tracking-normal text-center text-[#3A82F9] mb-6">
          立即开始!
        </h2>
        <p class="font-pingfang font-normal text-[16px] leading-[24px] tracking-normal text-center text-[#A2A3A5] mb-8">
          拓展您的在线商机! 使用 T1 吸引新的网站访客，提升您的在线销售额。
        </p>
        <div class="flex justify-center">
          <NuxtLink 
            to="/register" 
            class="register-btn inline-flex items-center justify-center text-white rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] leading-[24px] sm:leading-[27px] md:leading-[28.5px] lg:leading-[30px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[200px] h-[50px] md:w-[240px] md:h-[60px]"
          >
            立即注册
          </NuxtLink>
        </div>
      </div>
    </section>
    </div>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
// 导入图片
import centerImageSrc from '~/assets/imgaes/home/center.png'
import center2ImageSrc from '~/assets/imgaes/home/center2.png'
import center3ImageSrc from '~/assets/imgaes/home/center3.png'
import icon1Src from '~/assets/imgaes/home/icon1.png'
import icon2Src from '~/assets/imgaes/home/icon2.png'
import icon3Src from '~/assets/imgaes/home/icon3.png'
import logoImageSrc from '~/assets/imgaes/logo.png'

// SEO 配置
useHead({
  title: 'T1 - 在全球顶级网站上投放广告',
  meta: [
    { name: 'description', content: '每日平均拥有1.02亿访问量,10938 用户量。每日平均实现1.02亿广告展示量。大家都在T1上投放,就差你了!' },
    { name: 'keywords', content: '广告投放,广告平台,数字广告,在线广告' }
  ]
})
</script>

