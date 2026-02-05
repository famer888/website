<template>
  <div class="bg-white">
    <!-- Hero 区域 -->
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
                每日平均拥有1.02亿访问量,10938 用户量
              </p>
              <p class="font-pingfang font-normal text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-normal text-center text-[#A2A3A5]">
                每日平均实现1.02亿广告展示量
              </p>
            </div>

            <!-- 文案 -->
            <p class="font-pingfang font-medium text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[48px] md:leading-[54px] lg:leading-[72px] tracking-normal text-gray-900 py-5 sm:py-0 mb-6 sm:mb-8">
              大家都在T1上投放,就差你了!
            </p>

            <!-- 按钮组 - 移动端上下布局，PC端左右布局 -->
            <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
              <NuxtLink 
                to="/register" 
                class="register-btn inline-flex items-center justify-center text-white rounded-full text-base sm:text-lg font-semibold transition-colors shadow-lg hover:shadow-xl w-[321px] h-[48px] md:w-[200px] md:h-[60px]"
              >
                注册
              </NuxtLink>
              <NuxtLink 
                to="/learn-more" 
                class="learn-more-btn inline-flex items-center justify-center bg-white border-2 rounded-full text-base sm:text-lg font-semibold transition-colors w-[321px] h-[48px] md:w-[200px] md:h-[60px]"
              >
                了解更多
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 导入图片
import centerImageSrc from '~/assets/imgaes/center.png'

// SEO 配置
useHead({
  title: 'T1 - 在全球顶级网站上投放广告',
  meta: [
    { name: 'description', content: '每日平均拥有1.02亿访问量,10938 用户量。每日平均实现1.02亿广告展示量。大家都在T1上投放,就差你了!' },
    { name: 'keywords', content: '广告投放,广告平台,数字广告,在线广告' }
  ]
})
</script>

