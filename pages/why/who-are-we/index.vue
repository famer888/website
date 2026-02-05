<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- 页面内容 -->
    <div class="flex-1 w-full">
      <!-- 800px高的渐变容器 - PC模式 -->
      <div class="hidden md:block h-[800px] bg-gradient-to-b from-[#DFE9FB] to-[#FFFFFF]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center -mt-[80px]">
          <!-- 左右布局的内容区域 -->
          <div class="flex gap-0 mb-8 max-w-5xl mx-auto">
            <!-- 左侧：文本内容 -->
            <div class="flex flex-col justify-center bg-white p-8 w-[600px] h-[354px]">
              <div class="font-pingfang font-medium text-[45px] leading-[96px] tracking-normal text-[#626671] mb-6 pl-[20px] pt-[0px]">我们是谁</div>
              <div class="font-pingfang font-normal text-[16px] leading-[26px] tracking-normal text-[#93959C] text-left pl-[20px] p-[10px]">
                <div>T1 是一家创新型网络广告和数字营销公司,于2008年</div>
                <div>在加拿大蒙特利尔成立。</div>
                <div>T1 的使命是通过每一次网络营销广告活动提升您公司和</div>
                <div>产品的业绩。</div>
                <div>我们的专家团队将协助您找到当前效果最佳的广告创意,</div>
                <div>并为您提供详细的流量报告。</div>
              </div>
            </div>
            
            <!-- 右侧：图片 -->
            <div class="flex items-center justify-center w-[600px] h-[354px]">
              <img :src="why1ImageSrc" alt="T1" class="w-full h-full object-cover" />
            </div>
          </div>
          
          <!-- 按钮 -->
          <div class="flex justify-center mt-[20px]">
            <NuxtLink to="/register" class="w-[240px] h-[60px] bg-[#3a82f9] text-white rounded-full text-lg font-medium hover:bg-[#2B6FE8] transition-colors flex items-center justify-center">
              免费注册
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 内容区域 - PC模式 -->
      <div class="hidden md:block w-full py-12 -mt-[100px]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- 标题 -->
          <h2 class="text-center text-4xl font-bold mb-12">
            <span class="text-[#626671]">为什么选择</span> <span class="text-[#3A82F9]">T1?</span>
          </h2>
          
          <!-- 左右布局 -->
          <div class="flex gap-0 max-w-5xl mx-auto">
            <!-- 左侧：大图片 -->
            <div class="flex items-center justify-center w-[600px] h-[354px]">
              <img :src="why5ImageSrc" alt="T1" class="w-full h-full object-cover" />
            </div>
            
            <!-- 右侧：三个图标和文本 -->
            <div class="flex flex-col justify-center bg-white p-8 w-[600px] h-[354px]">
              <!-- 第一个 -->
              <div class="flex items-start gap-4 mb-6">
                <img :src="why2ImageSrc" alt="Icon 1" class="w-20 h-20 flex-shrink-0" />
                <div>
                  <h3 class="font-pingfang font-medium text-lg text-[#626671] mb-2">触达您的目标受众!</h3>
                  <p class="font-pingfang font-normal text-sm text-[#93959C] leading-relaxed">借助我们先进的广告投放和自动优化技术,将您的广告精准推送给目标受众。我们的专家团队致力于识别真正能为您的业务带来转化的流量。</p>
                </div>
              </div>
              
              <!-- 第二个 -->
              <div class="flex items-start gap-4 mb-6">
                <img :src="why3ImageSrc" alt="Icon 2" class="w-20 h-20 flex-shrink-0" />
                <div>
                  <h3 class="font-pingfang font-medium text-lg text-[#626671] mb-2">优化并转化您的内容!</h3>
                  <p class="font-pingfang font-normal text-sm text-[#93959C] leading-relaxed">借助我们庞大的广告商资源和强大的流量分配算法,最大限度地利用您的网站流量。轻松实现转化、留住客户并拓展业务。</p>
                </div>
              </div>
              
              <!-- 第三个 -->
              <div class="flex items-start gap-4">
                <img :src="why4ImageSrc" alt="Icon 3" class="w-20 h-20 flex-shrink-0" />
                <div>
                  <h3 class="font-pingfang font-medium text-lg text-[#626671] mb-2">高效,效果显著!</h3>
                  <p class="font-pingfang font-normal text-sm text-[#93959C] leading-relaxed">点击和展示统计数利用易于理解的报告提供的全面成本、据,做出明智的数据驱动型决策。</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 好处轮播组件 -->
          <div class="mt-[80px]">
            <BenefitsCarousel />
          </div>
        </div>
      </div>
      
      <!-- 移动端内容 -->
      <div class="md:hidden w-full">
        <!-- 顶部：图片区域 -->
        <div class="w-full">
          <img :src="why1ImageSrc" alt="T1" class="w-full h-auto" />
        </div>
        
        <!-- 中间：文本内容区域 -->
        <div class="bg-gradient-to-b from-[#DFE9FB] to-[#FFFFFF] py-8 px-[26px] pb-8">
          <h1 class="text-[36px] font-bold text-[#171A1D] mb-6 text-left">我们是谁?</h1>
          <div class="text-[#93959C] leading-relaxed space-y-4 text-left mb-8">
            <p class="text-base">T1 是一家创新型网络广告和数字营销公司,于2008 年在加拿大蒙特利尔成立。T1的使命是通过每一次网络营销广告活动提升您公司和产品的业绩。</p>
            <p class="text-base">我们的专家团队将协助您找到当前效果最佳的广告创意,并为您提供详细的流量报告。</p>
          </div>
          
          <!-- 底部：按钮 -->
          <div class="flex justify-center">
            <NuxtLink to="/register" class="w-[200px] h-[45px] bg-[#3a82f9] text-white rounded-full text-lg font-medium hover:bg-[#2B6FE8] transition-colors flex items-center justify-center">
              免费注册
            </NuxtLink>
          </div>
        </div>
        
        <!-- 为什么选择T1部分 - 移动端 -->
        <div class="bg-white py-8">
          <h2 class="text-left text-2xl font-bold mb-8 px-4">

            <h1 class="text-[36px] font-bold text-[#171A1D] mb-6 text-left">为什么选择</h1>
            <h1 class="text-[36px] font-bold text-[#3A82F9] mb-6 text-left">T1 DSP?</h1>

          </h2>
          
          <!-- 大图片 -->
          <div class="mb-8">
            <img :src="why5ImageSrc" alt="T1 DSP" class="w-full h-auto" />
          </div>
          
          <!-- 三个功能点 -->
          <div class="space-y-6 px-4">
            <!-- 第一个 -->
            <div class="flex items-start gap-4">
              <img :src="why2ImageSrc" alt="Icon 1" class="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 class="font-pingfang font-medium text-lg text-[#626671] mb-2">触达您的目标受众!</h3>
                <p class="font-pingfang font-normal text-sm text-[#93959C] leading-relaxed">借助我们先进的广告投放和自动优化技术,将您的广告精准推送给目标受众。我们的专家团队致力于识别真正能为您的业务带来转化的流量。</p>
              </div>
            </div>
            
            <!-- 第二个 -->
            <div class="flex items-start gap-4">
              <img :src="why3ImageSrc" alt="Icon 2" class="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 class="font-pingfang font-medium text-lg text-[#626671] mb-2">优化并转化您的内容!</h3>
                <p class="font-pingfang font-normal text-sm text-[#93959C] leading-relaxed">借助我们庞大的广告商资源和强大的流量分配算法,最大限度地利用您的网站流量。轻松实现转化、留住客户并拓展业务。</p>
              </div>
            </div>
            
            <!-- 第三个 -->
            <div class="flex items-start gap-4">
              <img :src="why4ImageSrc" alt="Icon 3" class="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 class="font-pingfang font-medium text-lg text-[#626671] mb-2">高效,效果显著!</h3>
                <p class="font-pingfang font-normal text-sm text-[#93959C] leading-relaxed">点击和展示统计数利用易于理解的报告提供的全面成本、据,做出明智的数据驱动型决策。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
// 导入图片
import why1ImageSrc from '~/assets/imgaes/why/why1.svg'
import why2ImageSrc from '~/assets/imgaes/why/why2.svg'
import why3ImageSrc from '~/assets/imgaes/why/why3.svg'
import why4ImageSrc from '~/assets/imgaes/why/why4.svg'
import why5ImageSrc from '~/assets/imgaes/why/why5.svg'

// 导入本地组件
import BenefitsCarousel from './components/BenefitsCarousel.vue'

// SEO 配置
useHead({
  title: '我们是谁 - T1',
  meta: [
    { name: 'description', content: '了解我们是谁，我们的使命和愿景' }
  ]
})
</script>

