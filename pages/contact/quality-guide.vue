<template>
  <div class="bg-white">
    <!-- 主体文章内容 -->
    <section class="bg-white py-10 sm:py-14 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 文章标题 -->
        <h2
          class="font-pingfang font-medium text-[24px] sm:text-[28px] md:text-[36px] leading-[34px] sm:leading-[40px] md:leading-[52px] tracking-normal text-[#111827] mb-4"
        >
          禁止广告的完整指南
        </h2>
        <p
          class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] tracking-normal text-[#A2A3A5] mb-6"
        >
          有些广告，我们是不允许投放的。请阅读以下内容，以了解详情。
        </p>

        <!-- 作者信息 -->
        <div class="flex items-center gap-3 mb-8 pb-8 border-b border-[#E6ECF5]">
          <img
            :src="avatarImg"
            alt="作者头像"
            class="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full object-cover"
          />
          <div>
            <p
              class="font-pingfang font-medium text-[13px] sm:text-[14px] leading-[20px] tracking-normal text-[#111827]"
            >
              Jessica Wang
            </p>
            <p
              class="font-pingfang font-normal text-[11px] sm:text-[12px] leading-[18px] tracking-normal text-[#A2A3A5]"
            >
              更新于 2025年1月15日
            </p>
          </div>
        </div>

        <!-- 关于T1 Ad 广告质量审核的指南 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4"
          >
            关于T1 Ad广告"质量审核的指南
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            总的来说，我们希望广告主遵守 Trustworthy Accountability Group 的"品牌安全框架"的准则。"品牌安全框架"定义了行业认可的安全和非安全广告分类，帮助广告主规避品牌风险。
          </p>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            为了维护广告环境的高质量，我们对广告进行双重审核：首先是机器自动扫描，其次是人工审核团队（合规审核团队）进一步检查并确保所有广告符合平台政策和行业标准。
          </p>
        </div>

        <!-- 审核过程 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4"
          >
            审核过程
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            在发布前，我们的合规审核团队会审核所有广告创意。通常需要24小时完成审核，不过部分创意可能需要更长时间来处理。在此过程中，广告创意的状态会显示为"等待审核"。
          </p>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            审核通过后，广告创意将被标记为"已批准"，随即开始正常投放。如果广告创意未通过审核，则会被标记为"已拒绝"并附上拒绝原因，同时系统会通过您注册时提供的邮箱向您发送通知。
          </p>
        </div>

        <!-- URL规范 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4"
          >
            URL规范
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            广告素材对应的着陆页必须能够正确访问。仅有可访问的着陆页链接方可通过合规审核。
          </p>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            每条广告的着陆页需满足合规要求。不会强制跳转到与展示内容不符的页面。对不包含潜在的欺诈性或恶意行为的着陆页将被批准。
          </p>
        </div>

        <!-- 查看拒绝原因 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4"
          >
            查看拒绝原因
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            在T1 Ad后台，您可以查看每个广告创意的审核状态。如果创意被拒绝，可在详情中查看拒绝原因。根据拒绝原因修改创意后重新提交，可加快审核通过的速度。
          </p>
        </div>

        <!-- 禁止的类别 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4"
          >
            禁止的类别
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            以下类别的广告内容是被禁止投放的：
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li
              v-for="(item, idx) in prohibitedCategories"
              :key="idx"
              class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671]"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- 禁止的素材内容 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4"
          >
            禁止的素材内容
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            广告中不允许出现以下类型的内容：武器或弹药、非法毒品或药物滥用、烟草、色情或成人内容、赌博、仇恨言论、种族歧视内容、暴力或血腥内容等。
          </p>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
          >
            此外，包含侵权内容、版权违规、冒充其他品牌或组织、虚假陈述、欺诈性内容、恶意软件或间谍软件的广告也被严格禁止。
          </p>
        </div>

        <!-- 提示信息框 -->
        <div class="bg-[#EFF6FF] border-l-4 border-[#3A82F9] rounded-r-lg p-4 sm:p-5 md:p-6 mb-10">
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671]"
          >
            如需了解更多关于Trustworthy Accountability Group 的"品牌安全框架"的信息，可查看其官方资源。我们鼓励广告主熟悉这些行业准则，以确保广告内容符合最新的合规要求。
          </p>
        </div>

        <!-- 创意素材标准规定（上册）：素材内容 / 着陆页面 -->
        <div class="mb-10">
          <h3
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-3"
          >
            创意素材标准规定（上册）：素材内容 / 着陆页面
          </h3>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-6"
          >
            以下规定适用于不同类型的广告素材（包括图片/Banner和着陆页）。每种形式/着陆页的相应标准。
          </p>
        </div>

        <!-- 规则带图的区块 -->
        <div class="space-y-12 sm:space-y-14 md:space-y-16">
          <!-- 规则 1：素材和着陆页内容一致性 -->
          <div v-for="(rule, idx) in contentRules" :key="idx" class="mb-8">
            <p
              class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-6"
            >
              {{ rule.description }}
            </p>
            <!-- 图片示例：PC端横排，移动端纵排 -->
            <div
              v-if="rule.examples && rule.examples.length"
              class="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <div
                v-for="(example, eIdx) in rule.examples"
                :key="eIdx"
                class="flex-1 relative"
              >
                <div
                  class="rounded-lg overflow-hidden border border-[#E6ECF5] bg-[#F9FAFB]"
                >
                  <!-- 示例占位图 -->
                  <div
                    class="w-full aspect-[4/3] bg-[#F0F2F5] flex items-center justify-center"
                  >
                    <div class="text-center px-4">
                      <div
                        class="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] mx-auto mb-3 rounded-full flex items-center justify-center"
                        :class="
                          example.allowed
                            ? 'bg-[#E8F5E9] text-[#4CAF50]'
                            : 'bg-[#FFEBEE] text-[#F44336]'
                        "
                      >
                        <svg
                          v-if="example.allowed"
                          class="w-8 h-8 sm:w-9 sm:h-9"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <svg
                          v-else
                          class="w-8 h-8 sm:w-9 sm:h-9"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span
                        class="font-pingfang font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] tracking-normal"
                        :class="
                          example.allowed
                            ? 'text-[#4CAF50]'
                            : 'text-[#F44336]'
                        "
                      >
                        {{ example.allowed ? "允许" : "禁止" }}
                      </span>
                    </div>
                  </div>
                </div>
                <!-- 标签 -->
                <div
                  class="absolute -top-3 left-4 px-3 py-1 rounded-full text-white font-pingfang font-medium text-[11px] sm:text-[12px] leading-[16px]"
                  :class="
                    example.allowed ? 'bg-[#4CAF50]' : 'bg-[#F44336]'
                  "
                >
                  {{ example.allowed ? "允许" : "禁止" }}
                </div>
              </div>
            </div>
            <!-- 单图示例 -->
            <div
              v-if="rule.singleExample"
              class="mt-6"
            >
              <div class="rounded-lg overflow-hidden border border-[#E6ECF5] bg-[#F9FAFB]">
                <div
                  class="w-full aspect-[16/9] bg-[#F0F2F5] flex items-center justify-center"
                >
                  <div class="text-center px-4">
                    <div
                      class="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] mx-auto mb-3 rounded-full flex items-center justify-center"
                      :class="
                        rule.singleExample.allowed
                          ? 'bg-[#E8F5E9] text-[#4CAF50]'
                          : 'bg-[#FFEBEE] text-[#F44336]'
                      "
                    >
                      <svg
                        v-if="rule.singleExample.allowed"
                        class="w-8 h-8 sm:w-9 sm:h-9"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <svg
                        v-else
                        class="w-8 h-8 sm:w-9 sm:h-9"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <span
                      class="font-pingfang font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] tracking-normal"
                      :class="
                        rule.singleExample.allowed
                          ? 'text-[#4CAF50]'
                          : 'text-[#F44336]'
                      "
                    >
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
          class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-3"
        >
          创意素材标准规定（下册）：弹窗 / 推送通知
        </h3>
        <p
          class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-8"
        >
          以下规定适用于弹窗和推送通知类型的广告。
        </p>

        <!-- 下册规则 -->
        <div class="space-y-12 sm:space-y-14 md:space-y-16">
          <div v-for="(rule, idx) in popupRules" :key="idx" class="mb-8">
            <p
              class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-6"
            >
              {{ rule.description }}
            </p>
            <!-- 图片示例 -->
            <div
              v-if="rule.examples && rule.examples.length"
              class="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <div
                v-for="(example, eIdx) in rule.examples"
                :key="eIdx"
                class="flex-1 relative"
              >
                <div
                  class="rounded-lg overflow-hidden border border-[#E6ECF5] bg-white"
                >
                  <div
                    class="w-full aspect-[4/3] bg-[#F0F2F5] flex items-center justify-center"
                  >
                    <div class="text-center px-4">
                      <div
                        class="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] mx-auto mb-3 rounded-full flex items-center justify-center"
                        :class="
                          example.allowed
                            ? 'bg-[#E8F5E9] text-[#4CAF50]'
                            : 'bg-[#FFEBEE] text-[#F44336]'
                        "
                      >
                        <svg
                          v-if="example.allowed"
                          class="w-8 h-8 sm:w-9 sm:h-9"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <svg
                          v-else
                          class="w-8 h-8 sm:w-9 sm:h-9"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span
                        class="font-pingfang font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] tracking-normal"
                        :class="
                          example.allowed
                            ? 'text-[#4CAF50]'
                            : 'text-[#F44336]'
                        "
                      >
                        {{ example.allowed ? "允许" : "禁止" }}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute -top-3 left-4 px-3 py-1 rounded-full text-white font-pingfang font-medium text-[11px] sm:text-[12px] leading-[16px]"
                  :class="
                    example.allowed ? 'bg-[#4CAF50]' : 'bg-[#F44336]'
                  "
                >
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
          class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-4"
        >
          额外说明和合规要求
        </h3>
        <p
          class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
        >
          您的所有创意素材和着陆页面在通过广告质量审核后，仍需持续符合以上标准。如果在投放过程中发现违规行为，我们有权随时暂停或终止相关广告的投放。
        </p>
        <p
          class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-4"
        >
          如您对审核结果有疑问或希望申诉，请通过帮助中心与我们的合规团队取得联系。我们承诺在2个工作日内回复您的问题。
        </p>

        <!-- 提示框 -->
        <div class="bg-[#FFF8E1] border-l-4 border-[#FFC107] rounded-r-lg p-4 sm:p-5 md:p-6 mt-6">
          <p
            class="font-pingfang font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671] mb-2"
          >
            重要提醒
          </p>
          <p
            class="font-pingfang font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-normal text-[#626671]"
          >
            违反以上规定的广告将被立即下架，严重或反复违规可能导致账户被暂停或永久封禁。请确保您的所有广告内容均符合本指南的要求。
          </p>
        </div>
      </div>
    </section>

    <!-- 底部 CTA -->
    <section class="bg-[#F5F7FB] py-12 sm:py-14 lg:py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3
          class="font-pingfang font-medium text-[22px] sm:text-[24px] md:text-[28px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-normal text-[#3A82F9] mb-3"
        >
          让我们联系
        </h3>
        <p
          class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] tracking-normal text-[#A2A3A5] mb-6"
        >
          如有更多问题，请随时联系我们的广告合规团队。
        </p>
        <div class="flex justify-center">
          <NuxtLink
            to="/contact"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]"
          >
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

