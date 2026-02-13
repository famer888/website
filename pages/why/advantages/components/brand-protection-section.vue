<template>
  <section class="w-full">
    <div
      class="w-full md:max-w-[1200px] mx-auto px-6 md:px-0 pt-[108px] md:py-[90px] md:pt-[92px] md:pb-[60px]"
    >
      <div
        class="flex flex-col md:flex-row gap-[24px] md:gap-[45px] pt-[48px] md:pt-0 md:items-baseline-last md:mb-[48px]"
      >
        <!-- 左侧：文案（PC左，H5上） -->
        <div class="flex-1 order-1 md:order-1">
          <h2
            class="font-pingfang font-medium text-[36px] leading-[56px] tracking-[0px] text-[#626671] md:text-[56px] md:leading-[96px] mb-[24px] md:mb-[32px]"
          >
            品牌保护
          </h2>
          <div
            class="font-pingfang font-normal text-[14px] leading-[20px] tracking-[0px] text-[#93959C] md:text-[18px] md:leading-[26px] space-y-[24px] md:space-y-[24px]"
          >
            <p>
              T1 Ads 还考虑了
              RiskIQ,以确保我们已涵盖所有必要的所有方面,从而保护您的广告系列、内容和公司免受黑客和其他网络不法分子的侵害。
            </p>
            <p>
              无与伦比的 IP 多样性:RiskIQ
              拥有互联网上规模最大的隐蔽全球代理网络。利用这一基础设施对于检测创意人员的真实行为至关重要。
            </p>
            <p>
              强大的大规模预防性威胁情报:RiskIQ
              的专有预测列表使其脱颖而出,使客户能够正确审查新的需求来源,并防止其广告活动基础架构中的恶意软件。革命性的自动停用:我们的
              API 响应包含实时停用正确创意或需求合作伙伴标签所需的归因数据。
            </p>
            <p>
              轻松实现客户成功:RiskIQ
              为合作伙伴提供一支专门的分析师团队,他们会主动监控您的帐户是否存在违规行为,同时推荐新的策略和战术,以跟上犯罪分子的步伐,避免任何问题。
            </p>
          </div>
        </div>
        <!-- 右侧：图片（PC右，H5下） -->
        <div
          class="px-6 md:px-0 flex items-center justify-center md:flex-shrink-0 order-2 md:order-2"
        >
          <img
            :src="advantages1ImageSrc"
            alt="品牌保护"
            class="w-[240px] h-[240px] md:w-[400px] md:h-[400px]"
          />
        </div>
      </div>
      <!-- <NuxtLink to="/"
				class="flex w-[160px] h-[40px] md:w-[240px] md:h-[60px] bg-[#3A82F9] md:bg-white md:border md:border-[#3A82F9] rounded-full md:rounded-[30px] font-pingfang font-normal tracking-[0px] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-center text-white md:text-[#3A82F9] md:hover:bg-[#E8F2FF] transition-colors items-center justify-center mt-[24px] md:mt-[34px] mx-auto md:mx-0">
				了解更多
			</NuxtLink> -->
    </div>
  </section>
</template>

<script setup>
import advantages1ImageSrc from "~/assets/imgaes/why/advantages1.webp";
</script>
