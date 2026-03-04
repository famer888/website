<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Hero 区域 -->
    <section class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div class="text-center max-w-[800px] mx-auto">
          <h1
            class="font-pingfang font-medium text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[48px] sm:leading-[72px] md:leading-[84px] lg:leading-[96px] tracking-normal text-gray-900 mb-6 md:mb-8"
          >
            网站流量变现解决方案
          </h1>
          <p
            class="font-pingfang font-normal text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-normal text-[#A2A3A5] mb-8 md:mb-12"
          >
            加入T1广告联盟，通过全球广告资源实现网站流量变现，支持高CPM广告收益，实时数据统计，稳定高收入。
          </p>
          <div class="flex flex-row gap-4 justify-center items-center">
            <NuxtLink
              to="/contact"
              class="register-btn inline-flex items-center justify-center text-white rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[200px] h-[50px] md:w-[240px] md:h-[60px]"
            >
              立即加入
            </NuxtLink>
            <NuxtLink
              to="/"
              class="learn-more-btn inline-flex items-center justify-center bg-white rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] tracking-normal transition-colors w-[200px] h-[50px] md:w-[240px] md:h-[60px]"
            >
              了解更多
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 高CPM广告收益 -->
    <section class="bg-[#F5F5F5] py-12 sm:py-16 lg:py-24">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="order-1 lg:hidden w-full text-center">
            <h2
              class="font-pingfang font-medium text-[32px] leading-[48px] tracking-[0px] text-center text-[#707273]"
            >
              高CPM广告收益
            </h2>
          </div>
          <div class="order-2 lg:order-1 flex justify-center lg:justify-start w-full px-[10px] lg:px-0">
            <div class="w-full max-w-md lg:max-w-none flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 min-h-[300px] lg:min-h-[400px]">
              <div class="text-center">
                <p class="font-pingfang font-medium text-[64px] lg:text-[96px] leading-[1] text-brand mb-4">$$$</p>
                <p class="font-pingfang font-normal text-[18px] lg:text-[24px] text-[#626671]">高收益广告变现</p>
              </div>
            </div>
          </div>
          <div class="order-3 lg:order-2 w-full max-w-[500px]">
            <div class="hidden lg:flex justify-start mb-8">
              <h2
                class="font-pingfang font-medium text-[48px] lg:text-[64px] leading-[72px] lg:leading-[96px] tracking-normal text-[#707273]"
              >
                高CPM广告收益
              </h2>
            </div>
            <div class="space-y-6 mb-8 px-[10%] md:px-0">
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-brand/10 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 sm:w-8 sm:h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[27px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-normal text-[#747677] mb-2">
                    行业领先的CPM单价
                  </h3>
                  <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#A2A3A5] leading-relaxed">
                    T1广告联盟与全球优质广告主合作，确保站长获得行业领先的CPM广告单价，最大化您的每一次流量价值。
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-brand/10 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 sm:w-8 sm:h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[27px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-normal text-[#747677] mb-2">
                    智能收益优化
                  </h3>
                  <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#A2A3A5] leading-relaxed">
                    智能算法自动匹配最高出价广告，持续优化填充率和eCPM，让您的广告收益稳步增长。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 全球广告资源覆盖 -->
    <section class="bg-white py-12 sm:py-16 lg:py-24">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="order-1 lg:hidden w-full text-center">
            <h2
              class="font-pingfang font-medium text-[32px] leading-[48px] tracking-[0px] text-center text-[#707273]"
            >
              全球广告资源覆盖
            </h2>
          </div>
          <div class="order-3 lg:order-1 w-full max-w-[500px]">
            <div class="hidden lg:flex justify-start mb-8">
              <h2
                class="font-pingfang font-medium text-[48px] lg:text-[64px] leading-[72px] lg:leading-[96px] tracking-normal text-[#707273]"
              >
                全球广告资源覆盖
              </h2>
            </div>
            <p class="font-pingfang font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] tracking-[0px] text-[#A2A3A5] mb-8 px-[10%] md:px-0">
              T1广告联盟接入全球海量广告主资源，覆盖北美、欧洲、亚太等主要市场。多元化的广告需求确保您的流量始终拥有高填充率，无论您的用户来自哪个地区，都能获得优质的广告展示与可观的收益回报。
            </p>
          </div>
          <div class="order-2 lg:order-2 flex justify-center lg:justify-end w-full px-[10px] lg:px-0">
            <div class="w-full max-w-md lg:max-w-none flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12 min-h-[300px] lg:min-h-[400px]">
              <div class="text-center">
                <p class="font-pingfang font-medium text-[48px] lg:text-[72px] leading-[1] text-brand mb-4">🌍</p>
                <p class="font-pingfang font-normal text-[18px] lg:text-[24px] text-[#626671]">全球资源覆盖</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 简单接入快速变现 -->
    <section class="bg-[#F5F5F5] py-12 sm:py-16 lg:py-24">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="order-1 lg:hidden w-full text-center">
            <h2
              class="font-pingfang font-medium text-[32px] leading-[48px] tracking-[0px] text-center text-[#707273]"
            >
              简单接入快速变现
            </h2>
          </div>
          <div class="order-2 lg:order-1 flex justify-center lg:justify-start w-full px-[10px] lg:px-0">
            <div class="w-full max-w-md lg:max-w-none flex items-center justify-center bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 lg:p-12 min-h-[300px] lg:min-h-[400px]">
              <div class="text-center">
                <p class="font-pingfang font-medium text-[48px] lg:text-[72px] leading-[1] text-brand mb-4">⚡</p>
                <p class="font-pingfang font-normal text-[18px] lg:text-[24px] text-[#626671]">快速接入</p>
              </div>
            </div>
          </div>
          <div class="order-3 lg:order-2 w-full max-w-[500px]">
            <div class="hidden lg:flex justify-start mb-8">
              <h2
                class="font-pingfang font-medium text-[48px] lg:text-[64px] leading-[72px] lg:leading-[96px] tracking-normal text-[#707273]"
              >
                简单接入快速变现
              </h2>
            </div>
            <div class="space-y-4 mb-8 px-[10%] md:px-0">
              <div class="flex items-start gap-3">
                <span class="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-pingfang font-medium text-[14px]">1</span>
                <p class="font-pingfang font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#747677]">注册T1站长账户，提交网站信息</p>
              </div>
              <div class="flex items-start gap-3">
                <span class="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-pingfang font-medium text-[14px]">2</span>
                <p class="font-pingfang font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#747677]">审核通过后获取广告代码</p>
              </div>
              <div class="flex items-start gap-3">
                <span class="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-pingfang font-medium text-[14px]">3</span>
                <p class="font-pingfang font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#747677]">将代码嵌入网站，即刻开始变现</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实时统计与稳定结算 -->
    <section class="bg-white py-12 sm:py-16 lg:py-24">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="order-1 lg:hidden w-full text-center">
            <h2
              class="font-pingfang font-medium text-[32px] leading-[48px] tracking-[0px] text-center text-[#707273]"
            >
              实时统计与稳定结算
            </h2>
          </div>
          <div class="order-3 lg:order-1 w-full max-w-[500px]">
            <div class="hidden lg:flex justify-start mb-8">
              <h2
                class="font-pingfang font-medium text-[48px] lg:text-[64px] leading-[72px] lg:leading-[96px] tracking-normal text-[#707273]"
              >
                实时统计与稳定结算
              </h2>
            </div>
            <p class="font-pingfang font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] tracking-[0px] text-[#A2A3A5] mb-8 px-[10%] md:px-0">
              T1广告联盟提供实时的收益数据统计面板，让您随时掌握展示量、点击量、eCPM和总收益等关键指标。我们承诺按时稳定结算，支持多种付款方式，确保您的每一分收益都能准时到账。
            </p>
          </div>
          <div class="order-2 lg:order-2 flex justify-center lg:justify-end w-full px-[10px] lg:px-0">
            <div class="w-full max-w-md lg:max-w-none flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 lg:p-12 min-h-[300px] lg:min-h-[400px]">
              <div class="text-center">
                <p class="font-pingfang font-medium text-[48px] lg:text-[72px] leading-[1] text-brand mb-4">📊</p>
                <p class="font-pingfang font-normal text-[18px] lg:text-[24px] text-[#626671]">实时数据统计</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO 内链区域 -->
    <section class="bg-[#F5F5F5] py-12 sm:py-16 lg:py-20">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-pingfang font-medium text-[28px] sm:text-[36px] md:text-[48px] leading-[42px] sm:leading-[54px] md:leading-[72px] tracking-normal text-gray-900 mb-6 md:mb-10">
          加入T1广告联盟
        </h2>
        <p class="font-pingfang font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#A2A3A5] mb-8 md:mb-12 max-w-[600px] mx-auto">
          无论您是广告主还是站长，T1广告联盟平台都能为您提供最优质的服务。
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/"
            class="learn-more-btn inline-flex items-center justify-center bg-[#F5F5F5] rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] tracking-normal transition-colors w-[200px] h-[50px] md:w-[240px] md:h-[60px]"
          >
            返回首页
          </NuxtLink>
          <NuxtLink
            to="/advertiser/how-to-operate"
            class="register-btn inline-flex items-center justify-center text-white rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[200px] h-[50px] md:w-[240px] md:h-[60px]"
          >
            我是广告主
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="register-btn inline-flex items-center justify-center text-white rounded-[30px] font-pingfang font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[200px] h-[50px] md:w-[240px] md:h-[60px]"
          >
            联系我们
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
// SEO 配置
useHead({
  title: '网站流量变现平台 | 高CPM广告收益 T1广告联盟',
  meta: [
    {
      name: 'description',
      content:
        '加入T1广告联盟，通过全球广告资源实现网站流量变现，支持高CPM广告收益，实时数据统计，稳定高收入。',
    },
    {
      name: 'keywords',
      content: '网站变现,流量变现,广告变现,高CPM广告,站长赚钱,广告联盟,T1',
    },
  ],
})
</script>
