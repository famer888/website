<template>
  <div class="min-h-screen bg-white relative">
    <!-- 渐变背景层 - 只在上方50% -->
    <div class="fixed top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-[#DFE9FB] to-[#FFFFFF] pointer-events-none z-0"></div>
    <!-- 页面内容 -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- 第一部分：推荐计划 -->
      <div class="bg-transparent md:bg-white rounded-lg md:shadow-md p-0 md:p-8 mb-8 md:min-h-[330px] flex items-center">
        <div class="flex flex-col md:flex-row gap-8 items-center w-full">
          <div class="flex-1 flex flex-col justify-center order-1 md:order-1 pl-[20px] pt-[2px]">
            <h2 class="text-3xl font-bold text-[#626671] mb-6 md:-mt-4">推荐计划</h2>
            <div class="text-base text-[#93959C] leading-relaxed ">
              口碑营销被认为是最好的营销方式之一,因为消费者会因为认识的人推荐某个产品或服务而进行购买。
            </div>
            <div class="text-base text-[#93959C] leading-relaxed ">
              何不赚点外快呢?
            </div>
            <div class="text-base text-[#93959C] leading-relaxed mb-8">
              T1 愿意奖励您,只要您推荐其他人使用我们的平台!
            </div>
            <div class="hidden md:block">
              <NuxtLink to="/referral" class="inline-block w-[160px] h-[45px] bg-[#3A82F9] text-white rounded-full text-base font-medium hover:bg-[#2B6FE8] transition-colors flex items-center justify-center">
                了解更多
              </NuxtLink>
            </div>
          </div>
          <div class="flex-1 flex flex-col items-center order-2 md:order-2">
            <img :src="advantages3ImageSrc" alt="推荐计划" class="w-full max-w-[300px] md:max-w-[450px] h-auto mb-6 md:mb-0" />
            <NuxtLink to="/referral" class="inline-block w-[264px] h-[48px] bg-[#3A82F9] text-white rounded-full text-base font-medium hover:bg-[#2B6FE8] transition-colors flex items-center justify-center md:hidden">
              了解更多
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 第二部分：账户安全 -->
      <div class="p-0 md:p-8 mb-8">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-1 flex justify-center order-2 md:order-1">
            <img :src="advantages2ImageSrc" alt="账户安全" class="w-full max-w-[240px] h-auto" />
          </div>
          <div class="flex-1 order-1 md:order-2">
            <h2 class="text-3xl font-bold text-[#626671] mb-4">账户安全</h2>
            <p class="text-base text-[#93959C] leading-relaxed mb-4">
              在 T1 Ads, 我们极其重视您的账户、品牌和公司机密信息的在线安全。因此,我们提供双因素身份验证来保护您的账户安全。
            </p>
            <p class="text-base text-[#93959C] leading-relaxed">
              双因素身份验证 (TFA) 能有效防止除您本人以外的任何人访问您的 T1 账户。如果您的个人资料有任何修改 (例如更改密码、更改电子邮件地址等), TFA 将会被触发,您将收到短信和/或电子邮件通知。
            </p>
          </div>
        </div>
      </div>
      
      <!-- 第三部分：品牌保护 -->
      <div class="p-0 md:p-8 mb-12">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-1">
            <h2 class="text-3xl font-bold text-[#626671] mb-4">品牌保护</h2>
            <p class="text-base text-[#93959C] leading-relaxed mb-4">
              T1 Ads 还考虑了 RiskIQ,以确保我们已涵盖所有必要的所有方面,从而保护您的广告系列、内容和公司免受黑客和其他网络不法分子的侵害。
            </p>
            <p class="text-base text-[#93959C] leading-relaxed mb-4">
              无与伦比的 IP 多样性:RiskIQ 拥有互联网上规模最大的隐蔽全球代理网络。利用这一基础设施对于检测创意人员的真实行为至关重要。
            </p>
            <p class="text-base text-[#93959C] leading-relaxed mb-4">
              强大的大规模预防性威胁情报:RiskIQ 的专有预测列表使其脱颖而出,使客户能够正确审查新的需求来源,并防止其广告活动基础架构中的恶意软件。革命性的自动停用:我们的 API 响应包含实时停用正确创意或需求合作伙伴标签所需的归因数据。
            </p>
            <p class="text-base text-[#93959C] leading-relaxed mb-6">
              轻松实现客户成功:RiskIQ 为合作伙伴提供一支专门的分析师团队,他们会主动监控您的帐户是否存在违规行为,同时推荐新的策略和战术,以跟上犯罪分子的步伐,避免任何问题。
            </p>
            <div class="hidden md:block">
              <NuxtLink to="/brand-protection" class="inline-block w-[160px] h-[45px] bg-[#3A82F9] text-white rounded-full text-base font-medium hover:bg-[#2B6FE8] transition-colors flex items-center justify-center">
                了解更多
              </NuxtLink>
            </div>
          </div>
          <div class="flex-1 flex flex-col items-center">
            <img :src="advantages1ImageSrc" alt="品牌保护" class="w-full max-w-[300px] h-auto mb-6 md:mb-0" />
            <NuxtLink to="/brand-protection" class="inline-block w-[264px] h-[48px] bg-[#3A82F9] text-white rounded-full text-base font-medium hover:bg-[#2B6FE8] transition-colors flex items-center justify-center md:hidden">
              了解更多
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 技术部分 -->
      <div class="p-0 md:p-8 mb-12">
        <div class="text-center mb-8">
          <h2 class="text-4xl font-bold text-[#626671] mb-4">技术</h2>
          <p class="text-xl text-[#93959C]">让我们为您分担营销的繁重工作</p>
        </div>
        
        <!-- 四个功能特性 -->
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row md:flex-wrap gap-y-8 md:justify-between">
          <div
            v-for="(item, index) in technologyFeatures"
            :key="index"
            class="flex gap-4 items-start w-full md:w-[48%]"
          >
            <div class="flex-shrink-0">
              <img :src="item.icon" :alt="item.title" class="w-24 h-24" />
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-[#626671] mb-3">{{ item.title }}</h3>
              <p class="font-pingfang text-base text-[#93959C] leading-[24px]" style="font-weight: 400; letter-spacing: 0px;">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- 行动号召部分 -->
    <div class="text-center p-12 bg-[#F4F5F9] md:bg-white w-full">
      <h2 class="text-4xl font-bold text-[#3A82F9] mb-4">立即开始!</h2>
      <p class="text-xl text-[#626671] mb-8">让我们助您实现最雄心勃勃的网络营销目标。</p>
      <NuxtLink to="/register" class="inline-block w-[200px] h-[50px] bg-gradient-to-r from-[#3A82F9] to-[#2B6FE8] text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center mx-auto">
        立即加入
      </NuxtLink>
    </div>
        <!-- 页脚 -->
        <Footer />
  </div>
</template>

<script setup>
// 导入图片
import advantages1ImageSrc from '~/assets/imgaes/why/advantages1.svg'
import advantages2ImageSrc from '~/assets/imgaes/why/advantages2.svg'
import advantages3ImageSrc from '~/assets/imgaes/why/advantages3.svg'
import advantages4ImageSrc from '~/assets/imgaes/why/advantages4.svg'
import advantages5ImageSrc from '~/assets/imgaes/why/advantages5.svg'
import advantages6ImageSrc from '~/assets/imgaes/why/advantages6.svg'
import advantages7ImageSrc from '~/assets/imgaes/why/advantages7.svg'

// 技术功能特性数据
const technologyFeatures = [
  {
    icon: advantages4ImageSrc,
    title: '您的广告可以在本地或全球范围内展示',
    description: '将您的广告和在线广告活动定向到特定国家、地区或城市的客户。'
  },
  {
    icon: advantages7ImageSrc,
    title: '调整、测试以及停止、启动和暂停功能',
    description: '您可以随时免费调整广告和广告系列,尝试新的条款,暂停广告系列并随时重新开始——————而且无需签订合同。'
  },
  {
    icon: advantages6ImageSrc,
    title: '可衡量、可问责、灵活的营销活动',
    description: 'T1 Ads 通过易于理解的报告,清晰地展示有多少人注意到您的广告,以及点击访问您网站的转化率。借助我们的追踪和分析工具,您甚至可以查看通过我们的广告活动直接为您的网站带来的实际销售额。'
  },
  {
    icon: advantages5ImageSrc,
    title: '在合适的时间触达合适的受众',
    description: '当人们通过搜索引擎在线搜索您提供的产品和服务时,您的在线业务就能被他们找到,这就是为什么 T1 Ads 提供分时段搜索功能的原因。'
  }
]

// SEO 配置
useHead({
  title: '我们的优势 - T1',
  meta: [
    { name: 'description', content: '了解我们的优势和核心竞争力' }
  ]
})
</script>
