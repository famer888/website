<template>
  <footer class="bg-[#3B465A] min-h-[204px] md:min-h-[115px] flex items-center py-[20px] px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <!-- 左侧：Logo和导航链接 -->
        <div class="flex items-start md:items-center gap-4 md:gap-6">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img :src="footIconSrc" alt="T1 Logo" class="h-10 w-auto md:h-12 lg:h-16" />
          </div>
          
          <!-- 导航链接和版权信息 -->
          <div class="flex-1">
            <!-- 导航链接 - 自动换行 -->
            <div class="flex flex-wrap items-center gap-1 md:gap-2 mb-2 text-[#EAEBED] font-pingfang font-normal text-[12px] leading-[20px] tracking-normal">
              <NuxtLink to="/terms?tab=terms" class="hover:text-blue-300 transition-colors">使用条款</NuxtLink>
              <span class="text-gray-400">|</span>
              <NuxtLink to="/terms?tab=privacy" class="hover:text-blue-300 transition-colors">隐私声明</NuxtLink>
              <span class="text-gray-400">|</span>
              <NuxtLink to="/terms?tab=cookie" class="hover:text-blue-300 transition-colors">Cookie 政策</NuxtLink>
              <span class="text-gray-400">|</span>
              <NuxtLink to="/contact/help-center" class="hover:text-blue-300 transition-colors">帮助中心</NuxtLink>
              <span class="text-gray-400">|</span>
              <NuxtLink to="/terms?tab=sitemap" class="hover:text-blue-300 transition-colors">网站地图</NuxtLink>
              <span class="text-gray-400">|</span>
              <NuxtLink to="/terms?tab=contact" class="hover:text-blue-300 transition-colors">联系我们</NuxtLink>
            </div>
            
            <!-- 版权信息 -->
            <p class="text-[#EAEBED] font-pingfang font-normal text-[12px] leading-[20px] tracking-normal">
              Copyright © www.AxureUX.com, All Rights Reserved
            </p>
          </div>
        </div>

        <!-- 右侧：公司地址信息 -->
        <div class="text-[#9398A3] font-pingfang font-normal text-[10px] leading-[16px] tracking-normal text-left border-t pt-4 md:pt-0 md:border-t-0" style="border-color: #4C5668;">
          <p>Aylo Freesites Ltd. Block 1, 195-197 Old Nicosia-Limassol Road Dali IndustrialZone</p>
          <p>Nicosia, 2540 Cyprus - VAT #CY 99000217P - Licensing IP International Sard. Togan</p>
          <p>LLC 610 Brazos Street - Suite 500 Austin, Texas 78701</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 导入图片
import footIconSrc from '~/assets/imgaes/home/footIcon.png'
</script>

