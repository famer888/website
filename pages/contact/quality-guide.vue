<template>
  <div class="bg-white">
    <!-- 主体文章内容 -->
    <section class="bg-white py-10 sm:py-14 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 文章标题 -->
        <h2
          class="font-pingfang font-medium text-[24px] sm:text-[28px] md:text-[36px] leading-[34px] sm:leading-[40px] md:leading-[52px] tracking-normal text-[#111827] mb-4">
          禁止广告的完整指南
        </h2>
        <p
          class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] tracking-normal text-[#A2A3A5] mb-6">
          哪些优惠、落地页和创意是被禁止的，哪些是允许?
        </p>

        <!-- 作者信息 -->
        <div class="flex items-center gap-3 pb-8">
          <img :src="avatarImg" alt="作者头像"
            class="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full object-cover" />
          <div>
            <p
              class="font-pingfang font-medium text-[13px] sm:text-[14px] leading-[20px] tracking-normal text-[#A2A3A5]">
              作者:T1 Ads
            </p>
            <p
              class="font-pingfang font-normal text-[11px] sm:text-[12px] leading-[18px] tracking-normal text-[#A2A3A5]">
              超过3周前更新
            </p>
          </div>
        </div>

        <!-- 关于T1 Ad 广告质量审核的指南 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4">
            关于T1 Ads平台广告要求的完整指南
          </h3>
          <div class="bg-[#EFF6FF] p-4 sm:p-5 md:p-6 mb-10">
            <p
              class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671]">
              请注意，如果您的广告活动违反了HiltopAds的任何广告规则，T1Ads团队有权立即暂停广告活动或封锁账户，而不退还剩余的存款。
            </p>
          </div>
        </div>

        <!-- 审核过程 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4">
            审核过程
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4">
            在您创建新的广告活动后，质量保证部门将在2-3个工作小时内对其进行审核(周末可能需要更长时间)，但不超过24小时。
          </p>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4">

            HilltopAds系统不断监控广告活动是否符合规定。监控广告质量的主要三个方向是1.最终目标URL中的直接域名和主URL中的后续重定向域名。2.优惠类型。
            3.预先着陆页/创意/最终优惠页面/着陆页，
          </p>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4">

            广告主需要遵守所有区域的工作规则才能与HitopAds合作。 下面我们详细描述了允许的内容以及哪些禁止事项值得关注。
          </p>
        </div>

        <!-- URL规范 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4">
            URL规范
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4">

            您的广告活动域名的主要要求是它们不应被标记为恶意，并且不应被反病毒软件和浏览器阻止。
          </p>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4">

            欲了解更多信息，请查看 指南。
          </p>
        </div>

        <!-- 提供的类型 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4">
            提供的类型
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4">
            在T1Ads，您可以推广主流和非主流的提供、产品和服务，这些提供、产品和服务与上述规则列表不兼容，例如约会电子商务等。Gaming、OnlyFans.
          </p>
          <div class="bg-[#EFF6FF] p-4 sm:p-5 md:p-6 mb-10">
            <p
              class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671]">
              要了解更多关于我们建议您在HiltopAds进行测试的提供类型，请查看指南您还可以找到关于我们不建议您使用的提供的指南。
            </p>
          </div>
        </div>
        <h3 class="mb-6 text-xl">
          在T1广告中，以下类型的提供/类别被禁止进行促销：
        </h3>
        <p class="mb-2 text-xl">
          恶意软件、网络钓鱼或其他有害代码/软件；
        </p>
        <p class="mb-3 text-xl">
          翻译病毒、“扫描分析”或“技术支持”；
        </p>
        <p class="mb-3 text-xl">
          收集全民通知订阅者；
        </p>
        <p class="mb-3 text-xl">
          意象的金融模型和产品；
        </p>
        <p class="mb-3 text-xl">
          ​所有金融优惠必须在优惠网站的主页上提供有关其活动的法律文件。
        </p>
        <p class="mb-3 text-xl">
          参考博客、新闻门户和网站；
        </p>
        <p class="mb-3 text-xl">
          智能链接、标记重定向的网站；
        </p>
        <p class="mb-3 text-xl">
          受版权和商标法保护的营销材料；
        </p>
        <p class="mb-3 text-xl">
          欺骗、非官方、不实、欺骗、欺骗、捏造、再生产的信息（即事实、新闻、优惠、解决方案、指南）；
        </p>
        <p class="mb-3 text-xl">
          冒犯、刺激或煽动仇恨的内容；
        </p>
        <p class="mb-3 text-xl">
          绘画违法活动，宣扬、绘画对任何团体、个人造成身体伤害、伤害，或者宣扬、绘画对动物的残酷行为；
        </p>
        <p class="mb-3 text-xl">
          非法、处方或娱乐药物；
        </p>
        <p class="mb-3 text-xl">
          酒精、烟草。
        </p>

        <!-- 规则带图的区块 -->
        <div class="space-y-12 sm:space-y-14 md:space-y-16">
          <!-- 规则 1：素材和着陆页内容一致性 -->
          <div v-for="(rule, idx) in contentRules" :key="idx" class="mb-8">
            <p
              class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-6">
              {{ rule.description }}
            </p>
            <!-- 图片示例：PC端横排，移动端纵排 -->
            <div v-if="rule.examples && rule.examples.length" class="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div v-for="(example, eIdx) in rule.examples" :key="eIdx" class="flex-1 relative">
                <div class="rounded-lg overflow-hidden border border-[#E6ECF5] bg-[#F9FAFB]">
                  <!-- 示例占位图 -->
                  <div class="w-full aspect-[4/3] bg-[#F0F2F5] flex items-center justify-center">
                    <div class="text-center px-4">
                      <div
                        class="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] mx-auto mb-3 rounded-full flex items-center justify-center"
                        :class="example.allowed
                          ? 'bg-[#E8F5E9] text-[#4CAF50]'
                          : 'bg-[#FFEBEE] text-[#F44336]'
                          ">
                        <svg v-if="example.allowed" class="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <svg v-else class="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span
                        class="font-pingfang font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] tracking-normal"
                        :class="example.allowed
                          ? 'text-[#4CAF50]'
                          : 'text-[#F44336]'
                          ">
                        {{ example.allowed ? "允许" : "禁止" }}
                      </span>
                    </div>
                  </div>
                </div>
                <!-- 标签 -->
                <div
                  class="absolute -top-3 left-4 px-3 py-1 rounded-full text-white font-pingfang font-medium text-[11px] sm:text-[12px] leading-[16px]"
                  :class="example.allowed ? 'bg-[#4CAF50]' : 'bg-[#F44336]'
                    ">
                  {{ example.allowed ? "允许" : "禁止" }}
                </div>
              </div>
            </div>
            <!-- 单图示例 -->
            <div v-if="rule.singleExample" class="mt-6">
              <div class="rounded-lg overflow-hidden border border-[#E6ECF5] bg-[#F9FAFB]">
                <div class="w-full aspect-[16/9] bg-[#F0F2F5] flex items-center justify-center">
                  <div class="text-center px-4">
                    <div
                      class="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] mx-auto mb-3 rounded-full flex items-center justify-center"
                      :class="rule.singleExample.allowed
                        ? 'bg-[#E8F5E9] text-[#4CAF50]'
                        : 'bg-[#FFEBEE] text-[#F44336]'
                        ">
                      <svg v-if="rule.singleExample.allowed" class="w-8 h-8 sm:w-9 sm:h-9" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <svg v-else class="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span
                      class="font-pingfang font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] tracking-normal"
                      :class="rule.singleExample.allowed
                        ? 'text-[#4CAF50]'
                        : 'text-[#F44336]'
                        ">
                      {{ rule.singleExample.allowed ? "允许" : "禁止" }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 创意素材标准规定（下册） -->
    <section class="bg-[#F5F7FB] py-10 sm:py-14 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-3">
          创意素材标准规定（下册）：弹窗 / 推送通知
        </h3>
        <p
          class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-8">
          以下规定适用于弹窗和推送通知类型的广告。
        </p>

        <!-- 下册规则 -->
        <div class="space-y-12 sm:space-y-14 md:space-y-16">
          <div v-for="(rule, idx) in popupRules" :key="idx" class="mb-8">
            <p
              class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-6">
              {{ rule.description }}
            </p>
            <!-- 图片示例 -->
            <div v-if="rule.examples && rule.examples.length" class="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div v-for="(example, eIdx) in rule.examples" :key="eIdx" class="flex-1 relative">
                <div class="rounded-lg overflow-hidden border border-[#E6ECF5] bg-white">
                  <div class="w-full aspect-[4/3] bg-[#F0F2F5] flex items-center justify-center">
                    <div class="text-center px-4">
                      <div
                        class="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] mx-auto mb-3 rounded-full flex items-center justify-center"
                        :class="example.allowed
                          ? 'bg-[#E8F5E9] text-[#4CAF50]'
                          : 'bg-[#FFEBEE] text-[#F44336]'
                          ">
                        <svg v-if="example.allowed" class="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <svg v-else class="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span
                        class="font-pingfang font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] tracking-normal"
                        :class="example.allowed
                          ? 'text-[#4CAF50]'
                          : 'text-[#F44336]'
                          ">
                        {{ example.allowed ? "允许" : "禁止" }}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute -top-3 left-4 px-3 py-1 rounded-full text-white font-pingfang font-medium text-[11px] sm:text-[12px] leading-[16px]"
                  :class="example.allowed ? 'bg-[#4CAF50]' : 'bg-[#F44336]'
                    ">
                  {{ example.allowed ? "允许" : "禁止" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 额外说明 -->
    <section class="bg-white py-10 sm:py-14 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4">
          额外说明和合规要求
        </h3>
        <p
          class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4">
          您的所有创意素材和着陆页面在通过广告质量审核后，仍需持续符合以上标准。如果在投放过程中发现违规行为，我们有权随时暂停或终止相关广告的投放。
        </p>
        <p
          class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4">
          如您对审核结果有疑问或希望申诉，请通过帮助中心与我们的合规团队取得联系。我们承诺在2个工作日内回复您的问题。
        </p>

        <!-- 提示框 -->
        <div class="bg-[#FFF8E1] border-l-4 border-[#FFC107] rounded-r-lg p-4 sm:p-5 md:p-6 mt-6">
          <p
            class="font-pingfang font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-2">
            重要提醒
          </p>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671]">
            违反以上规定的广告将被立即下架，严重或反复违规可能导致账户被暂停或永久封禁。请确保您的所有广告内容均符合本指南的要求。
          </p>
        </div>
      </div>
    </section>

    <!-- 底部 CTA -->
    <section class="bg-[#F5F7FB] py-12 sm:py-14 lg:py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3
          class="font-pingfang font-medium text-[22px] sm:text-[24px] md:text-[28px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-normal text-[#3A82F9] mb-3">
          让我们联系
        </h3>
        <p
          class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] tracking-normal text-[#A2A3A5] mb-6">
          如有更多问题，请随时联系我们的广告合规团队。
        </p>
        <div class="flex justify-center">
          <NuxtLink to="/contact"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]">
            立即了解 →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 图片导入
import avatarImg from "~/assets/imgaes/contact/avatar.jpg";

// SEO 配置
useHead({
  title: "质量指南 - T1",
  meta: [
    {
      name: "description",
      content:
        "了解 T1 Ad 广告质量审核指南，包括禁止的广告类别、素材规范、审核流程等完整信息。",
    },
  ],
});

// 禁止的类别列表
const prohibitedCategories = [
  "武器、弹药及爆炸物",
  "非法毒品或药物滥用相关内容",
  "烟草及电子烟产品",
  "色情、成人内容或露骨的性暗示",
  "赌博或博彩（未经合法授权的）",
  "仇恨言论或歧视性内容（包括种族、宗教、性别等）",
  "暴力、血腥或令人不适的内容",
  "虚假医疗声明或未经证实的健康产品",
  "恶意软件、间谍软件或欺诈性软件下载",
  "侵犯版权或知识产权的内容",
  "冒充其他品牌或组织的行为",
  "加密货币和 ICO（初始代币发行）相关广告（需经特殊审批）",
];

// 上册：素材内容/着陆页面规则
const contentRules = [
  {
    description:
      "1. 广告素材的内容必须与着陆页内容一致。例如，广告中提到的产品或服务必须在着陆页中能够找到。广告不得使用误导性内容吸引用户点击后跳转至无关页面。",
    examples: [
      { allowed: false, label: "素材与着陆页内容不匹配" },
      { allowed: true, label: "素材与着陆页内容一致" },
    ],
  },
  {
    description:
      "2. 广告素材中不得包含模仿系统通知、对话框或错误消息的内容。此类设计可能误导用户，使其误认为是设备或系统发出的真实通知，从而点击广告。",
    examples: [
      { allowed: false, label: "模仿系统通知的广告" },
      { allowed: true, label: "正常的广告创意" },
    ],
  },
  {
    description:
      "3. 着陆页不得强制触发文件下载。如需提供文件下载，必须在页面上清楚标明，并由用户主动选择下载。不允许自动触发下载行为。",
    examples: [
      { allowed: true, label: "明确标示的下载按钮" },
      { allowed: true, label: "用户主动选择下载" },
    ],
  },
  {
    description:
      "4. 着陆页如果请求浏览器权限（如通知权限、位置权限等），必须在用户执行某个操作后才能弹出请求，不能在页面加载时自动弹出权限请求。",
    singleExample: { allowed: false, label: "页面加载自动弹出权限请求" },
  },
  {
    description:
      "5. 广告素材不得包含恶意代码、自动重定向脚本或试图在未经用户同意的情况下收集个人信息的行为。",
    examples: [
      { allowed: false, label: "包含恶意重定向的广告" },
      { allowed: true, label: "正常跳转的广告" },
    ],
  },
  {
    description:
      "6. 广告图片和视频素材必须清晰、不模糊、不包含过多文字覆盖（文字占比不得超过素材面积的20%）。素材不得出现明显的拉伸、变形或低分辨率的情况。",
    examples: [
      { allowed: false, label: "模糊低质量的素材" },
      { allowed: true, label: "清晰高质量的素材" },
    ],
  },
  {
    description:
      "7. 所有广告素材不得侵犯第三方知识产权，包括但不限于：未经授权使用商标、品牌标识或版权材料。",
    examples: [
      { allowed: false, label: "未经授权使用品牌商标" },
      { allowed: true, label: "使用自有品牌素材" },
    ],
  },
  {
    description:
      `8. 着陆页不得包含欺诈性的\u201C关闭\u201D按钮或虚假的互动元素，这些元素在用户点击时会触发非预期的操作（如额外的弹窗或下载）。`,
    examples: [
      { allowed: false, label: "虚假关闭按钮" },
      { allowed: true, label: "真实可用的关闭功能" },
    ],
  },
];

// 下册：弹窗/推送通知规则
const popupRules = [
  {
    description:
      "1. 弹窗广告的着陆页不得模仿系统软件更新页面或安全警告页面。此类页面会误导用户认为需要下载软件或采取紧急操作。",
    examples: [
      { allowed: false, label: "模仿系统更新的弹窗" },
      { allowed: true, label: "正常的产品展示弹窗" },
    ],
  },
  {
    description:
      "2. 弹窗广告不得包含自动播放的音频或视频，除非用户明确选择播放。自动播放会干扰用户体验，并可能被视为骚扰行为。",
    examples: [
      { allowed: false, label: "自动播放音频的弹窗" },
      { allowed: true, label: "用户主动触发播放" },
    ],
  },
  {
    description:
      "3. 推送通知广告必须真实反映通知来源，不得模仿操作系统原生通知样式或冒充系统/应用通知来误导用户。",
    examples: [
      { allowed: false, label: "模仿系统通知样式" },
      { allowed: true, label: "清晰标明广告来源" },
    ],
  },
  {
    description:
      "4. 弹窗着陆页不得引导用户进入欺诈性金融页面（如假冒银行登录页面）。此类行为被视为严重违规，将导致账户立即封禁。",
    examples: [
      { allowed: false, label: "假冒银行登录页面" },
      { allowed: false, label: "假冒金融交易页面" },
    ],
  },
  {
    description:
      "5. 弹窗广告着陆页中的所有可见元素（文字、图片、按钮等）不得包含透明的覆盖层或隐藏的点击区域，以防止用户误操作。",
    examples: [
      { allowed: false, label: "包含透明覆盖层的页面" },
      { allowed: true, label: "清晰无隐藏元素的页面" },
    ],
  },
];
</script>
