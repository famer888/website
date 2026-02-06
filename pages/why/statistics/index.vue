<template>
  <div class="min-h-screen bg-white">
    <!-- 上半部分：蓝色背景区域 -->
    <div class="relative min-h-[560px] md:h-[560px] overflow-hidden py-8 md:py-0" style="background: linear-gradient(to bottom right, #3966C9, #3C40C6, #2E83B9);">
      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center md:items-center">
        <!-- 响应式布局 -->
        <div class="w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-center">
          <!-- 左侧：文字内容 -->
          <div class="w-full md:flex-[0.60] text-white text-left px-[5px]">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold my-[10px] mt-5">T1数字</h1>
            <div class="hidden md:block w-16 h-0.5 bg-white/50 mb-4"></div>
            <p class="text-lg md:text-xl leading-relaxed mb-4  mt-9">
              高价值流量就是付费流量。
            </p>
            <div class="text-white/90" style="font-family: PingFang SC; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: 0px;">
              <div>我们的网络访客遍布全球;超过75%的访客来自北美和欧洲的一线流量国家。</div>
              <div>我们在亚洲也拥有相当大的市场份额。</div>
            </div>
          </div>
          
          <!-- 右侧：两个数据圆圈容器 -->
          <div class="w-full md:flex-1 flex flex-col md:flex-row gap-6 md:gap-12 items-center md:justify-end mt-6 md:mt-0">
            <!-- 中间：数据圆圈1 -->
            <div class="relative w-[260px] h-[260px] md:w-[258px] md:h-[258px] flex items-center justify-center ">
              <img :src="statistics3ImageSrc" alt="" class="absolute inset-0 w-full h-full object-contain" />
              <div class="relative z-10 text-center">
                <div class="text-[#3A82F9] mb-1" style="font-family: DINPro; font-weight: 700; font-size: 60px; line-height: 60px; letter-spacing: 0px;">150</div>
                <div class="text-[#3A82F9]" style="font-family: PingFang SC; font-weight: 500; font-size: 22px; line-height: 22px; letter-spacing: 0px;">百万</div>
                <div class="text-[#062E57] mt-2" style="font-family: PingFang SC; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: 0px;">每日访客</div>
              </div>
            </div>
            
            <!-- 右边：数据圆圈2 -->
            <div class="relative w-[260px] h-[260px] md:w-[258px] md:h-[258px] flex items-center justify-center ">
              <img :src="statistics3ImageSrc" alt="" class="absolute inset-0 w-full h-full object-contain" />
              <div class="relative z-10 text-center">
                <div class="text-[#3A82F9] mb-1" style="font-family: DINPro; font-weight: 700; font-size: 60px; line-height: 60px; letter-spacing: 0px;">4.6</div>
                <div class="text-[#3A82F9]" style="font-family: PingFang SC; font-weight: 500; font-size: 22px; line-height: 22px; letter-spacing: 0px;">十亿</div>
                <div class="text-[#062E57] mt-2" style="font-family: PingFang SC; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: 0px;">每日印象</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 性别和年龄分布 -->
    <div class="bg-white py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- PC模式：使用 statistics5.svg -->
        <div class="hidden md:flex items-center justify-center">
          <img :src="statistics5ImageSrc" alt="性别和年龄分布" class="w-full max-w-4xl h-auto" />
        </div>
        
        <!-- 移动端：左右布局 -->
        <div class="flex flex-col md:hidden gap-8 items-center">
          <!-- 左侧：性别分布 -->
          <div class="flex flex-col gap-6 w-full items-center ">
            <div class="flex items-center gap-4 mt-[50px]">
              <img :src="statistics1ImageSrc" alt="男性" class="w-28 h-28 flex-shrink-0" />
              <div>
                <div class="text-[#626671] text-xl font-medium">男性</div>
                <div class="text-[#3A82F9] font-bold flex items-baseline">
                  <span class="text-6xl">68</span><span class="text-3xl">%</span>
                </div>
              </div>
            </div>
            
            <div class="flex items-center gap-4 mt-[20px]">
              <img :src="statistics2ImageSrc" alt="女性" class="w-28 h-28 flex-shrink-0" />
              <div>
                <div class="text-[#626671] text-xl font-medium">女性</div>
                <div class="text-[#F5729D] font-bold flex items-baseline">
                  <span class="text-6xl">32</span><span class="text-3xl">%</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 横线分隔 -->
          <div class="w-full border-t border-gray-300 my-4"></div>
          
          <!-- 右侧：年龄分布 -->
          <div class="flex flex-col items-center justify-center gap-4">
            <img :src="statistics14ImageSrc" alt="年龄分布" class="w-full max-w-[280px] h-auto" />
            <img :src="statistics15ImageSrc" alt="年龄分布" class="w-full max-w-md h-auto mt-[20px]" />
          </div>
        </div>
      </div>
    </div>
    
    <!-- 中间部分：轻松触达目标受众 -->
    <div class="bg-white py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-[#171A1D] text-left md:text-center mb-6">轻松触达目标受众</h2>
        <div class="text-sm md:text-base text-[#93959C] text-left md:text-center max-w-3xl mx-auto leading-relaxed mb-8">
          <div>T1提供覆盖各种地区和设备的多种定向功能。</div>
          <div>借助我们的自动优化算法,我们能够运用成熟的定向技术,帮助您发现、定位并优化最能提升品牌转化率的受众群体。</div>
        </div>
        
        <!-- 国家流量数据图片 -->
        <div class="flex flex-col md:flex-row gap-6 md:gap-8 max-w-5xl mx-auto">
          <!-- 左侧图片 -->
          <div class="flex-1">
            <img :src="statistics6ImageSrc" alt="国家流量数据" class="w-full h-auto" />
          </div>
          
          <!-- 右侧图片 -->
          <div class="flex-1">
            <img :src="statistics7ImageSrc" alt="国家流量数据" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
    
    <!-- 下半部分：热门垂直行业 -->
    <div class="bg-white py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-[#171A1D] text-left mb-8" style="font-family: PingFang SC; font-weight: 500; font-size: 38.4px; line-height: 67.2px; letter-spacing: 0px;">
          我们网络上推广的热门垂直行业
        </h2>
        
        <!-- 行业图标网格 -->
        <!-- 移动端：包含"还有更多......"的网格 -->
        <div class="grid grid-cols-2 gap-16 max-w-4xl mx-auto mb-8 mt-[50px] md:hidden">
          <div v-for="(industry, index) in industriesForMobile" :key="index" class="flex flex-col items-center justify-center">
            <img v-if="!industry.isText" :src="industry.icon" :alt="industry.name" class="w-full max-w-[100px] h-auto" />
            <p v-else class="text-[#626671] text-center" style="font-family: PingFang SC; font-weight: 500; font-size: 24px; line-height: 36px; letter-spacing: 0px;">
              {{ industry.text }}
            </p>
          </div>
        </div>
        
        <!-- PC端：不包含"还有更多......"的网格 -->
        <div class="hidden md:grid grid-cols-3 gap-16 max-w-4xl mx-auto mb-8 mt-[50px]">
          <div v-for="(industry, index) in industriesForPC" :key="index" class="flex flex-col items-center">
            <img :src="industry.icon" :alt="industry.name" class="w-full max-w-[100px] h-auto" />
          </div>
        </div>
        
        <!-- PC端：还有更多文字 -->
        <p class="hidden md:block text-[#626671] text-center mt-[50px]" style="font-family: PingFang SC; font-weight: 500; font-size: 24px; line-height: 36px; letter-spacing: 0px;">
          还有更多......
        </p>
        
        <!-- 分隔线 -->
        <div class="border-t border-gray-300 my-8 mt-[100px]"></div>
        
        <!-- 免责声明 -->
        <p class="text-sm text-[#93959C] text-center max-w-3xl mx-auto">
          *免责声明:这些统计数据基于我们发布商网络(Pornhub, YouPom, Redtube 和 Tube8)的累计数据。
        </p>
      </div>
    </div>
    
    <!-- 联系我们部分 -->
    <div class="bg-[#F4F5F9] py-12 md:py-16">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-[#3A82F9] mb-4">想了解更多?</h2>
        <p class="text-lg text-[#93959C] mb-2">
          查看我们的<span class="text-[#3A82F9]">常见问题</span>解答
        </p>
        <p class="text-lg text-[#93959C] mb-8">找不到想要的答案?</p>
        <NuxtLink 
          to="/contact" 
          class="inline-block w-[200px] h-[50px] md:w-[240px] md:h-[60px] bg-[#3A82F9] text-white rounded-full text-base md:text-lg font-medium hover:bg-[#2B6FE8] transition-colors flex items-center justify-center mx-auto"
        >
          联系我们
        </NuxtLink>
      </div>
    </div>
    
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
// 导入图片
import statistics1ImageSrc from '~/assets/imgaes/why/statistics1.svg'
import statistics2ImageSrc from '~/assets/imgaes/why/statistics2.svg'
import statistics3ImageSrc from '~/assets/imgaes/why/statistics3.svg'
import statistics4ImageSrc from '~/assets/imgaes/why/statistics4.svg'
import statistics5ImageSrc from '~/assets/imgaes/why/statistics5.svg'
import statistics6ImageSrc from '~/assets/imgaes/why/statistics6.svg'
import statistics7ImageSrc from '~/assets/imgaes/why/statistics7.svg'
import statistics9ImageSrc from '~/assets/imgaes/why/statistics9.svg'
import statistics10ImageSrc from '~/assets/imgaes/why/statistics10.svg'
import statistics11ImageSrc from '~/assets/imgaes/why/statistics11.svg'
import statistics12ImageSrc from '~/assets/imgaes/why/statistics12.svg'
import statistics13ImageSrc from '~/assets/imgaes/why/statistics13.svg'
import statistics14ImageSrc from '~/assets/imgaes/why/statistics14.svg'
import statistics15ImageSrc from '~/assets/imgaes/why/statistics15.svg'

// 国家流量数据
const countriesLeft = [
  { name: 'United States', traffic: '1.21 billion' },
  { name: 'Japan', traffic: '378.0 million' },
  { name: 'United Kingdom', traffic: '218.0 million' },
  { name: 'Germany', traffic: '211.4 million' },
  { name: 'France', traffic: '200.8 million' },
  { name: 'Philippines', traffic: '142.6 million' },
  { name: 'Canada', traffic: '136.4 million' },
  { name: 'Italy', traffic: '135.7 million' },
  { name: 'Mexico', traffic: '126.6 million' },
  { name: 'Russian Federation', traffic: '120.0 million' }
]

const countriesRight = [
  { name: 'Brazil', traffic: '105.2 million' },
  { name: 'Spain', traffic: '94.3 million' },
  { name: 'Poland', traffic: '89.8 million' },
  { name: 'Netherlands', traffic: '87.3 million' },
  { name: 'Thailand', traffic: '82.2 million' },
  { name: 'Australia', traffic: '75.5 million' },
  { name: 'Ukraine', traffic: '58.7 million' },
  { name: 'Argentina', traffic: '49.9 million' },
  { name: 'Republic of Korea', traffic: '45.6 million' },
  { name: 'Hong Kong', traffic: '44.8 million' }
]

// 行业数据
const industriesForPC = [
  { name: '博彩', icon: statistics9ImageSrc },
  { name: '成人娱乐', icon: statistics10ImageSrc },
  { name: '游戏', icon: statistics11ImageSrc },
  { name: '约会', icon: statistics12ImageSrc },
  { name: 'web3', icon: statistics13ImageSrc }
]

const industriesForMobile = [
  { name: '博彩', icon: statistics9ImageSrc },
  { name: '成人娱乐', icon: statistics10ImageSrc },
  { name: '游戏', icon: statistics11ImageSrc },
  { name: '约会', icon: statistics12ImageSrc },
  { name: 'web3', icon: statistics13ImageSrc },
  { isText: true, text: '还有更多......' }
]

// SEO 配置
useHead({
  title: '数据统计 - T1',
  meta: [
    { name: 'description', content: '查看我们的数据统计和业绩表现' }
  ]
})
</script>
