<template>
  <div class="bg-white font-pingfang">
    <!-- 主体文章内容 -->
    <section class="py-[20px] md:py-[90px]">
      <div class="max-w-4xl mx-auto px-4">
        <!-- 文章标题 -->
        <h2
          class="font-medium text-[36px] leading-[56px] md:text-[56px] md:leading-[96px] tracking-[0px] mb-2 md:mb-0"
        >
          <span class="hidden md:inline">禁止广告的完整指南</span>
          <span class="md:hidden">让我们联系</span>
        </h2>
        <p
          class="text-[14px] leading-[26px] font-normal md:text-[24px] md:leading-[52px] md:font-medium mb-6"
        >
          哪些优惠、落地页和创意是被禁止的，哪些是允许?
        </p>

        <!-- 作者信息 -->
        <div class="flex items-center gap-2 md:gap-4 pb-6 md:pb-9">
          <img
            :src="avatarImg"
            alt="作者头像"
            class="w-9 h-9 md:w-[72px] md:h-[72px] rounded-full object-cover"
          />
          <div
            class="font-pingfang font-normal text-[14px] leading-[20px] md:text-[20px] md:leading-[30px] text-[#626671]"
          >
            <p>作者:T1 Ads</p>
            <p>超过3周前更新</p>
          </div>
        </div>

        <!-- 关于T1 Ad 广告质量审核的指南 -->
        <div class="mb-6 md:mb-12">
          <h3
            class="font-pingfang font-medium text-[#171A1D] text-[16px] leading-[26px] md:text-[28px] md:leading-[52px] mb-3 md:mb-6"
          >
            关于T1 Ads平台广告要求的完整指南
          </h3>
          <div class="bg-[#3A82F90F] p-3 md:py-6 md:px-6 mb-10 text-[#626671]">
            请注意，如果您的广告活动违反了T1Ads的任何广告规则，T1Ads团队有权立即暂停广告活动或封锁账户，而不退还剩余的存款。
          </div>
        </div>

        <!-- 审核过程 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[#171A1D] text-[18px] leading-[26px] md:text-[36px] md:leading-[52px] tracking-[0px] mb-4"
          >
            审核过程
          </h3>
          <p
            class="text-[#171A1D] text-[12px] leading-[20px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
          >
            在您创建新的广告活动后，质量保证部门将在2-3个工作小时内对其进行审核(周末可能需要更长时间)，但不超过24小时。
          </p>
          <p
            class="text-[#171A1D] text-[12px] leading-[20px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
          >
            T1Ads系统不断监控广告活动是否符合规定。监控广告质量的主要三个方向是1.最终目标URL中的直接域名和主URL中的后续重定向域名。2.优惠类型。
            3.预先着陆页/创意/最终优惠页面/着陆页，
          </p>
          <p
            class="text-[#171A1D] text-[12px] leading-[20px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
          >
            广告主需要遵守所有区域的工作规则才能与T1Ads合作。
            下面我们详细描述了允许的内容以及哪些禁止事项值得关注。
          </p>
        </div>

        <!-- URL规范 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[#171A1D] text-[18px] leading-[26px] md:text-[36px] md:leading-[52px] tracking-[0px] mb-4"
          >
            URL规范
          </h3>
          <p
            class="text-[#171A1D] text-[12px] leading-[20px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-12 md:mb-16"
          >
            您的广告活动域名的主要要求是它们不应被标记为恶意，并且不应被反病毒软件和浏览器阻止。
          </p>
          <p
            class="text-[#171A1D] text-[12px] leading-[20px] tracking-[0px] text-justify md:text-[24px] md:leading-[26px]"
          >
            欲了解更多信息，请查看 指南。
          </p>
        </div>

        <!-- 提供的类型 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[#171A1D] text-[18px] leading-[26px] md:text-[36px] md:leading-[52px] tracking-[0px] mb-4"
          >
            提供的类型
          </h3>
          <p
            class="text-[#171A1D] text-[12px] leading-[20px] tracking-[0px] text-justify md:text-[18px] md:leading-[26px] mb-5 md:mb-9"
          >
            在T1Ads，您可以推广主流和非主流的提供、产品和服务，这些提供、产品和服务与上述规则列表不兼容，例如约会电子商务等。Gaming、OnlyFans.
          </p>
          <div class="bg-[#3A82F90F] p-3 md:py-6 md:px-6 mb-10 text-[#626671]">
            要了解更多关于我们建议您在T1Ads进行测试的提供类型，请查看指南您还可以找到关于我们不建议您使用的提供的指南。
          </div>
        </div>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-9"
        >
          在T1广告中，以下类型的提供/类别被禁止进行促销：
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          恶意软件、网络钓鱼或其他有害代码/软件；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          翻译病毒、“扫描分析”或“技术支持”；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          收集全民通知订阅者；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          意象的金融模型和产品；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          ​所有金融优惠必须在优惠网站的主页上提供有关其活动的法律文件。
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          参考博客、新闻门户和网站；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          智能链接、标记重定向的网站；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          受版权和商标法保护的营销材料；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          欺骗、非官方、不实、欺骗、欺骗、捏造、再生产的信息（即事实、新闻、优惠、解决方案、指南）；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          冒犯、刺激或煽动仇恨的内容；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          绘画违法活动，宣扬、绘画对任何团体、个人造成身体伤害、伤害，或者宣扬、绘画对动物的残酷行为；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          非法、处方或娱乐药物；
        </p>
        <p
          class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px]"
        >
          酒精、烟草。
        </p>

        <div
          class="bg-[#F4F5F9] border border-[#C3C4C8] p-3 md:p-6 mb-10 text-[#626671] text-[14px] leading-[20px] md:text-[24px] md:leading-[48px] tracking-[0px] text-justify"
        >
          此列表不受限制。T1Ads
          的版本主可以在任何时候拒绝一项广告活动，如果发现该广告活动的细节违反了规定。
        </div>

        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[#171A1D] text-3 leading-[26px] md:text-8 md:leading-[52px] tracking-[0px] mb-4"
          >
            前期登陆页面 / 创意 / 最终优惠页面 / 登陆页面
          </h3>

          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-3"
          >
            在T1广告中，您可以使用弹出式、页面内、视频和横幅广告格式进行工作。上述的众多格式都有其配置的具体要求（例如图片大小、视频文件格式等）。
          </p>
          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-3"
          >
            请查看我们关于终端广告格式的指南：
          </p>
          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-3"
          >
            弹出式格式指南
          </p>
          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-3"
          >
            页面内格式指南
          </p>
          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-3"
          >
            视频格式指南
          </p>
          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-3"
          >
            横幅格式指南
          </p>
        </div>

        <div>
          <h3
            class="font-pingfang font-medium text-[#171A1D] text-3 leading-[26px] md:text-8 md:leading-[52px] tracking-[0px] mb-6 md:mb-24"
          >
            以下规则适用于预着陆页面 / 创意 / 最终优惠页面 / 着陆页面。
          </h3>

          <div class="mb-10">
            <p
              class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] md:mb-3"
            >
              ​​禁止
            </p>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                1.登陆页面不得包含拼写错误、错误图片、空白页面等。
              </p>
              <img
                class="w-full my-10"
                src="~/assets/imgaes/contact/prohibitionGuide/1.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                2.使用知名品牌（包括但不限于通讯应用、社交媒体品牌、防病毒软件公司、应用程序、支付系统、体育品牌、邮政服务、报纸在线版本、国家政府、公共机构等）。
              </p>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] pl-1 mb-3 md:mb-6"
              >
                - 知名品牌的标志（包括按钮、箭头等）
              </p>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] pl-1 mb-3 md:mb-6"
              >
                - 品牌名称拼写错误或有隐藏字母。
              </p>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] pl-1 mb-3 md:mb-6"
              >
                - 促销优惠由知名品牌提供的声明。
              </p>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] pl-1 mb-3 md:mb-6"
              >
                - 模仿知名网站和公司的界面。
              </p>
              <img
                class="w-full mb-10"
                src="~/assets/imgaes/contact/prohibitionGuide/2.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                3.使用名人或名人的个人详细信息和图片。
              </p>
              <img
                class="w-full mb-10"
                src="~/assets/imgaes/contact/prohibitionGuide/3.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                4.自动下载（点击）适用于桌面和移动设备。
              </p>
              <img
                class="w-full mb-10"
                src="~/assets/imgaes/contact/prohibitionGuide/4.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                5.修改浏览器、操作系统或服务的系统更新、通知和消息。
              </p>
              <img
                class="w-full mb-10"
                src="~/assets/imgaes/contact/prohibitionGuide/5.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                6.使用关于病毒、垃圾文件、设备问题等的可怕陈述，以及利用浏览器漏洞的实现页。
              </p>
              <img
                class="w-full mb-10"
                src="~/assets/imgaes/contact/prohibitionGuide/6.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                7.没有关闭选项的广告。
              </p>
              <img
                class="w-full mb-10"
                src="~/assets/imgaes/contact/prohibitionGuide/7.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                8.通过欺骗性通知（通过重新加载或阻止提供页面，错误的用户订阅报价）收集订阅的落地页面。
              </p>
              <img
                class="w-full mb-10"
                src="~/assets/imgaes/contact/prohibitionGuide/8.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                9.代表知名银行的修改电子邮件。
              </p>
              <img
                class="w-full mb-10"
                src="~/assets/imgaes/contact/prohibitionGuide/9.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                10.有关存款或转移资金的网络钓鱼消息。
              </p>
              <img
                class="w-full mb-10"
                src="~/assets/imgaes/contact/prohibitionGuide/10.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6 md:mb-12"
              >
                11.提前领取/收到大量和礼品以及有关奖金支付的网络钓鱼消息。
              </p>
              <img
                class="mb-10 w-full"
                src="~/assets/imgaes/contact/prohibitionGuide/11.png"
              />
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
              >
                12.在报价页面上额外嵌入返回按钮。
              </p>
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
              >
                13.使用性挑逗内容。
              </p>
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
              >
                14.使用令人震惊的成人内容。
              </p>
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
              >
                - 儿童教育、动物园（动物）教育、比赛等。
              </p>
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
              >
                - 尸骸、遗物、遗液、鼻涕、遗骸或呕吐）的。
              </p>
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
              >
                15.使用任何与雕像和武器有关的材料，暴力和残忍的视频和图像。
              </p>
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
              >
                16.宣传任何政党或人物，要求国家必须进行暴力更换，并利用这些人物进行广告宣传。
              </p>
            </div>
            <div>
              <p
                class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
              >
                17.推广被各州指称为“虚假性”、“可疑性”或“欺骗性”的品牌。
              </p>
            </div>
          </div>

          <p class="mb-3 text-xl font-semibold">允许的</p>

          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
          >
            1.使用高质量、易于理解的创意/着陆页面。
          </p>

          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
          >
            2.询问用户是否同意下载推广产品。
          </p>

          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
          >
            3.使用关于获得获奖者或小奖品（如优惠券）的声明。例如：“您可能赢得了
            iPhone / 钱”，“您赢得了一张优惠券”。
          </p>
          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
          >
            4.不要在创意、文本和着陆页面中使用任何有关可能病毒、潜在威胁、文件损坏等信息，这可能会吓到用户。
          </p>

          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
          >
            例如：“病毒可能会损害”，“您可能存在病毒/问题/..”，“扫描已完成”，“点击此处修复”。
          </p>

          <p
            class="text-[#171A1D] text-[12px] leading-[26px] tracking-[0px] text-justify md:text-[24px] md:leading-[52px] mb-6"
          >
            5.使用用户可以轻松关闭的登陆页面。
          </p>
        </div>
      </div>
    </section>

    <!-- 底部文案和注册T1广告按钮 (已隐藏) -->
    <Footer />
  </div>
</template>

<script setup>
// 图片导入
import avatarImg from "~/assets/imgaes/contact/avatar.png";

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
</script>
