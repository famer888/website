<template>
  <div class="bg-white">
    <!-- 主体文章内容 -->
    <section class="bg-white py-10 sm:py-14 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 文章标题 -->
        <h2
          class="text-3xl mb-4 fw-500">
          禁止广告的完整指南
        </h2>
        <p
          class="text-1xl mb-6">
          哪些优惠、落地页和创意是被禁止的，哪些是允许?
        </p>

        <!-- 作者信息 -->
        <div class="flex items-center gap-3 pb-8">
          <img :src="avatarImg" alt="作者头像"
            class="w-11 h-11 rounded-full object-cover" />
          <div>
            <p
              class="text-[13px] text-[#626671]">
              作者:T1 Ads
            </p>
            <p
              class="text-[11px] text-[#626671]">
              超过3周前更新
            </p>
          </div>
        </div>

        <!-- 关于T1 Ad 广告质量审核的指南 -->
        <div class="mb-10">
          <h3
            class="text-xl mb-4 fw-500">
            关于T1 Ads平台广告要求的完整指南
          </h3>
          <div class="bg-[#EFF6FF] p-4 sm:p-5 md:p-6 mb-10">
            <p
              class="">
              请注意，如果您的广告活动违反了HiltopAds的任何广告规则，T1Ads团队有权立即暂停广告活动或封锁账户，而不退还剩余的存款。
            </p>
          </div>
        </div>

        <!-- 审核过程 -->
        <div class="mb-10">
          <h3
            class="text-2xl fw-500 mb-4">
            审核过程
          </h3>
          <p
            class=" mb-4">
            在您创建新的广告活动后，质量保证部门将在2-3个工作小时内对其进行审核(周末可能需要更长时间)，但不超过24小时。
          </p>
          <p
            class=" mb-4">

            HilltopAds系统不断监控广告活动是否符合规定。监控广告质量的主要三个方向是1.最终目标URL中的直接域名和主URL中的后续重定向域名。2.优惠类型。
            3.预先着陆页/创意/最终优惠页面/着陆页，
          </p>
          <p
            class=" mb-4">

            广告主需要遵守所有区域的工作规则才能与HitopAds合作。 下面我们详细描述了允许的内容以及哪些禁止事项值得关注。
          </p>
        </div>

        <!-- URL规范 -->
        <div class="mb-10">
          <h3
            class="text-2xl fw-500 mb-4">
            URL规范
          </h3>
          <p
            class=" mb-4">

            您的广告活动域名的主要要求是它们不应被标记为恶意，并且不应被反病毒软件和浏览器阻止。
          </p>
          <p
            class=" mb-4">

            欲了解更多信息，请查看 指南。
          </p>
        </div>

        <!-- 提供的类型 -->
        <div class="mb-10">
          <h3
            class="text-2xl fw-500 mb-4">
            提供的类型
          </h3>
          <p
            class=" mb-4">
            在T1Ads，您可以推广主流和非主流的提供、产品和服务，这些提供、产品和服务与上述规则列表不兼容，例如约会电子商务等。Gaming、OnlyFans.
          </p>
          <div class="bg-[#EFF6FF] p-4 sm:p-5 md:p-6 mb-10">
            <p
              class="">
              要了解更多关于我们建议您在HiltopAds进行测试的提供类型，请查看指南您还可以找到关于我们不建议您使用的提供的指南。
            </p>
          </div>
        </div>
        <h3 class="mb-8">
          在T1广告中，以下类型的提供/类别被禁止进行促销：
        </h3>
        <p class="mb-2">
          恶意软件、网络钓鱼或其他有害代码/软件；
        </p>
        <p class="mb-3">
          翻译病毒、“扫描分析”或“技术支持”；
        </p>
        <p class="mb-3">
          收集全民通知订阅者；
        </p>
        <p class="mb-3">
          意象的金融模型和产品；
        </p>
        <p class="mb-3">
          ​所有金融优惠必须在优惠网站的主页上提供有关其活动的法律文件。
        </p>
        <p class="mb-3">
          参考博客、新闻门户和网站；
        </p>
        <p class="mb-3">
          智能链接、标记重定向的网站；
        </p>
        <p class="mb-3">
          受版权和商标法保护的营销材料；
        </p>
        <p class="mb-3">
          欺骗、非官方、不实、欺骗、欺骗、捏造、再生产的信息（即事实、新闻、优惠、解决方案、指南）；
        </p>
        <p class="mb-3">
          冒犯、刺激或煽动仇恨的内容；
        </p>
        <p class="mb-3">
          绘画违法活动，宣扬、绘画对任何团体、个人造成身体伤害、伤害，或者宣扬、绘画对动物的残酷行为；
        </p>
        <p class="mb-3">
          非法、处方或娱乐药物；
        </p>
        <p class="mb-3">
          酒精、烟草。
        </p>

        <div class="text-[#626671] py-4 px-4 bg-[#F4F5F9] border border-[#C3C4C8] mb-10">
          此列表不受限制。HilltopAds 的版本主可以在任何时候拒绝一项广告活动，如果发现该广告活动的细节违反了规定。
        </div>

        前期登陆页面 / 创意 / 最终优惠页面 / 登陆页面

        在T1广告中，您可以使用弹出式、页面内、视频和横幅广告格式进行工作。上述的众多格式都有其配置的具体要求（例如图片大小、视频文件格式等）。

        请查看我们关于终端广告格式的指南：

        弹出式格式指南

        页面内格式指南

        视频格式指南

        横幅格式指

        以下规则适用于预着陆页面 / 创意 / 最终优惠页面 / 着陆页面。

        ​​禁止
        1.登陆页面不得包含拼写错误、错误图片、空白页面等。
      </div>
    </section>

    <!-- 创意素材标准规定（下册） -->
    <section class="bg-[#F5F7FB] py-10 sm:py-14 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          class="text-2xl mb-3">
          创意素材标准规定（下册）：弹窗 / 推送通知
        </h3>
        <p
          class=" mb-8">
          以下规定适用于弹窗和推送通知类型的广告。
        </p>

        <!-- 下册规则 -->
        <div class="space-y-12 sm:space-y-14 md:space-y-16">
          <div v-for="(rule, idx) in popupRules" :key="idx" class="mb-8">
            <p
              class=" mb-6">
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
                        class="text-[14px] sm:text-[16px] md:text-2xl leading-[22px] tracking-normal"
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
                  class="absolute -top-3 left-4 px-3 py-1 rounded-full text-white text-[11px] sm:text-[12px] leading-[16px]"
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
