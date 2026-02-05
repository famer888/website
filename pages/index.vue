<template>
  <div class="bg-white">
    <!-- Hero 区域 -->
    <section class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div class="flex flex-col gap-8 lg:gap-12">
          <!-- 上方内容 -->
          <div class="text-center">
            <h1 class="font-pingfang font-medium text-[64px] leading-[96px] tracking-normal text-gray-900 mb-6">
              在全球顶级网站上投放广告
            </h1>
            
            <!-- 统计数据 -->
            <div class="space-y-3 mb-6">
              <p class="font-pingfang font-normal text-[24px] leading-[36px] tracking-normal text-center text-[#A2A3A5]">
                每日平均拥有<span class="font-semibold">1.02亿</span>访问量,<span class="font-semibold">10938</span> 用户量
              </p>
              <p class="font-pingfang font-normal text-[24px] leading-[36px] tracking-normal text-center text-[#A2A3A5]">
                每日平均实现<span class="font-semibold">1.02亿</span>广告展示量
              </p>
            </div>

            <!-- 文案 -->
            <p class="font-pingfang font-medium text-[40px] leading-[72px] tracking-normal text-gray-900 mb-8">
              大家都在T1上投放,就差你了!
            </p>

            <!-- 按钮组 -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink 
                to="/register" 
                class="register-btn inline-flex items-center justify-center text-white rounded-full text-base sm:text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                style="width: 200px; height: 60px;"
              >
                注册
              </NuxtLink>
              <NuxtLink 
                to="/learn-more" 
                class="learn-more-btn inline-flex items-center justify-center bg-white border-2 rounded-full text-base sm:text-lg font-semibold transition-colors"
                style="width: 200px; height: 60px;"
              >
                了解更多
              </NuxtLink>
            </div>
          </div>

          <!-- 下方图片 -->
          <div class="flex justify-center">
            <div class="w-full max-w-4xl lg:max-w-6xl">
              <img 
                :src="centerImageSrc" 
                alt="广告平台展示" 
                class="w-full h-auto object-contain"
              />
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

