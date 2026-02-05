<template>
  <div class="bg-white">
    <!-- Hero（1920x560 顶图，自适应） -->
    <section class="relative overflow-hidden h-[260px] sm:h-[320px] md:h-[420px] lg:h-[560px]">
      <img
        :src="img_ggxs9"
        alt="广告形式"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/10" aria-hidden="true" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div class="h-full flex items-center">
          <div class="w-full">
            <div class="flex items-center gap-4">
              <div class="h-10 w-[3px] bg-brand rounded-full" aria-hidden="true" />
              <div class="text-white">
                <h1 class="font-pingfang font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[38px] sm:leading-[48px] md:leading-[56px] tracking-normal">
                  广告形式
                </h1>
                <p class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] tracking-normal text-white/80 mt-1">
                  你需要的所有数字格式来吸引你的受众
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 介绍 + 快速导航 -->
    <section class="bg-white py-10 sm:py-14 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="font-pingfang font-medium text-[22px] sm:text-[26px] md:text-[32px] leading-[32px] sm:leading-[36px] md:leading-[44px] tracking-normal text-[#111827] mb-3">
            经济高效的曝光，带来显著成效!
          </h2>
          <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] tracking-normal text-[#A2A3A5] max-w-[920px] mx-auto">
            通过桌面电脑、手机和平板电脑等多设备吸引您的受众、注意力，大多数移动设备的规模也适用于平板电脑。借助强大的广告让您的广告预算最大化。
            <span class="text-brand underline underline-offset-4 cursor-pointer">规则与条款</span>
          </p>
        </div>

        <!-- 标签导航（点击滚动到对应区块；移动端可横滑） -->
        <!-- 标签导航：仅移动端显示 -->
        <div class="mt-10 sm:mt-12 md:hidden">
          <div class="flex items-center gap-6 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              v-for="item in navItems"
              :key="item.id"
              type="button"
              class="shrink-0 font-pingfang font-medium text-[14px] sm:text-[15px] leading-[20px] tracking-normal pb-2 transition-colors border-b-2"
              :class="activeId === item.id ? 'text-brand border-brand' : 'text-[#6B7280] border-transparent hover:text-brand'"
              @click="scrollToSection(item.id)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 广告类型列表 -->
    <section class="bg-white pb-12 sm:pb-14 lg:pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          v-for="(block, idx) in adBlocks"
          :key="block.id"
          :ref="(el) => setSectionRef(el, idx)"
          :id="block.id"
          class="scroll-mt-24"
        >
          <h3 class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[22px] leading-[26px] sm:leading-[30px] md:leading-[32px] tracking-normal text-[#111827] mb-4 sm:mb-6">
            {{ block.sectionTitle }}
          </h3>

          <div class="bg-white border border-[#EEF0F4] rounded-[8px] overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-[320px_1fr]">
              <!-- 左侧手机示意图（占位图，后续替换） -->
              <div class="bg-[#EAF1FF] flex items-center justify-center p-6">
                <img
                  :src="block.image"
                  :alt="block.sectionTitle"
                  class="w-full h-auto max-w-[220px] object-contain"
                />
              </div>

              <!-- 右侧说明 -->
              <div class="p-6 sm:p-8">
                <div class="space-y-3">
                  <div class="font-pingfang font-normal text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] tracking-normal text-[#111827]">
                    <span class="text-[#6B7280]">广告类型:</span>
                    <span class="ml-2">{{ block.meta.type }}</span>
                  </div>
                  <div class="font-pingfang font-normal text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] tracking-normal text-[#111827]">
                    <span class="text-[#6B7280]">应用开发会员展示位:</span>
                    <span class="ml-2">{{ block.meta.scene }}</span>
                  </div>
                  <div class="font-pingfang font-normal text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] tracking-normal text-[#111827]">
                    <span class="text-[#6B7280]">展示步骤:</span>
                    <span class="ml-2">{{ block.meta.steps }}</span>
                  </div>
                  <div class="font-pingfang font-normal text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] tracking-normal text-[#111827]">
                    <span class="text-[#6B7280]">支持格式:</span>
                    <span class="ml-2">{{ block.meta.format }}</span>
                  </div>
                  <div class="font-pingfang font-normal text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] tracking-normal text-[#111827]">
                    <span class="text-[#6B7280]">样式尺寸:</span>
                    <span class="ml-2">{{ block.meta.size }}</span>
                  </div>
                  <div class="font-pingfang font-normal text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] tracking-normal text-[#111827]">
                    <span class="text-[#6B7280]">预估曝光量:</span>
                    <span class="ml-2">{{ block.meta.impression }}</span>
                  </div>
                  <div class="font-pingfang font-normal text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] tracking-normal text-[#111827]">
                    <span class="text-[#6B7280]">模式:</span>
                    <span class="ml-2">{{ block.meta.model }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="idx !== adBlocks.length - 1" class="h-8 sm:h-10 lg:h-12" />
        </div>
      </div>
    </section>

    <!-- 底部 CTA -->
    <section class="bg-white py-12 sm:py-14 lg:py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="font-pingfang font-medium text-[22px] sm:text-[26px] md:text-[32px] leading-[32px] sm:leading-[36px] md:leading-[44px] tracking-normal text-[#111827] mb-6">
          在顶级成人网站上投放广告!
        </h3>
        <p class="font-pingfang font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] tracking-normal text-[#A2A3A5] mb-8">
          T1助您实现最核心的营销目标。
        </p>

        <!-- Logos（先占位，后续替换） -->
        <div class="flex flex-wrap justify-center items-center gap-10 sm:gap-14 mb-10">
          <div
            v-for="n in logos"
            :key="n.id"
            class="h-8 w-[120px] bg-[#F3F4F6] rounded flex items-center justify-center text-[#6B7280] text-[12px]"
          >
            <img :src="n.image" alt="Logo" class="h-8 w-[120px] object-contain" />
          </div>
        </div>

        <div class="flex justify-center">
          <NuxtLink
            to="/register"
            class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[180px] h-[44px] sm:w-[200px] sm:h-[48px]"
          >
            报名
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import img_ggxs9 from '~/assets/imgaes/advertiser/img_ggxs9.png'
import img_ggxs10 from '~/assets/imgaes/advertiser/img_ggxs10.png'
import img_ggxs11 from '~/assets/imgaes/advertiser/img_ggxs11.png'
import img_ggxs12 from '~/assets/imgaes/advertiser/img_ggxs12.png'
import img_ggxs14 from '~/assets/imgaes/advertiser/img_ggxs14.png'
import img_ggxs13 from '~/assets/imgaes/advertiser/img_ggxs13.png'
import img_ggxs15 from '~/assets/imgaes/advertiser/img_ggxs15.png'
import img_ggxs16 from '~/assets/imgaes/advertiser/img_ggxs16.png'
import img_ggxs17 from '~/assets/imgaes/advertiser/img_ggxs17.png'
import img_ggxs18 from '~/assets/imgaes/advertiser/img_ggxs18.png'
import img_ggxs19 from '~/assets/imgaes/advertiser/img_ggxs19.png'

// SEO 配置
useHead({
  title: '广告形式 - T1',
  meta: [
    { name: 'description', content: '了解我们提供的多种广告形式：开屏、信息流、Banner、插屏、竖屏与九宫格等。' }
  ]
})

const navItems = [
  { id: 'open-screen', label: '开屏广告' },
  { id: 'feed', label: '信息流广告' },
  { id: 'banner', label: 'Banner广告' },
  { id: 'interstitial', label: '插屏广告' },
  { id: 'vertical', label: '竖屏广告' },
  { id: 'grid', label: '九宫格广告' }
]

const logos = [
  { id: 'logo1', image: img_ggxs16 },
  { id: 'logo2', image: img_ggxs17 },
  { id: 'logo3', image: img_ggxs18 },
  { id: 'logo4', image: img_ggxs19 },
]
// 占位数据：后续你替换 image、文案与字段即可
const adBlocks = [
  {
    id: 'open-screen',
    sectionTitle: '开屏广告',
    image: img_ggxs10,
    meta: {
      type: 'Banner广告',
      scene: '应用开发会员展示位，开屏品牌资产营销模式，填充点，点击率更高。',
      steps: '所有应用的启动页',
      format: 'jpg、JPEG、PNG等静态图片',
      size: '宽高比 9:16',
      impression: '3200万/日',
      model: 'CPT'
    }
  },
  {
    id: 'feed',
    sectionTitle: '信息流广告',
    image: img_ggxs11,
    meta: {
      type: '信息流广告',
      scene: '契合应用原生环境的样式，提供优质一致的用户体验，助您最大程度获取收益。',
      steps: '资讯页、视频详情页、信息列表页等',
      format: '单图、组图、视频',
      size: '4:2、7:5 等',
      impression: '3200万/日',
      model: 'CPT'
    }
  },
  {
    id: 'banner',
    sectionTitle: 'Banner广告',
    image: img_ggxs12,
    meta: {
      type: 'Banner广告',
      scene: '在APP页/外/底部固定位置广告，展示时间长，曝光优先于其它。',
      steps: 'APP页面页底/顶部、视频播放页、活动页、资讯页等',
      format: 'jpg、JPEG、PNG等静态图片',
      size: '4:2、7:5 等',
      impression: '—',
      model: 'CPT'
    }
  },
  {
    id: 'interstitial',
    sectionTitle: '插屏广告',
    image: img_ggxs13,
    meta: {
      type: '插屏广告',
      scene: '在APP功能使用过程中的最佳时机展示，能够同时兼顾高收益和用户体验。',
      steps: 'APP页面、详情页、活动页等',
      format: 'jpg、JPEG、PNG、GIF等静/动态图',
      size: '4:2、7:5 等',
      impression: '—',
      model: 'CPT'
    }
  },
  {
    id: 'vertical',
    sectionTitle: '竖屏广告',
    image: img_ggxs14,
    meta: {
      type: '竖屏广告',
      scene: '竖版视频流全屏播放的视角信息流样式，提供沉浸式更大用户体验，转化率更高。',
      steps: '竖版视频列表页、竖版视频信息流、直播间页等',
      format: '视频',
      size: '9:16、3:2、2:3 等',
      impression: '—',
      model: 'CPT'
    }
  },
  {
    id: 'grid',
    sectionTitle: '九宫格广告',
    image: img_ggxs15,
    meta: {
      type: '九宫格广告',
      scene: '固定位置展示，广告的曝光机会大大增加。支持批量位置展示及动态展示方式，动态化的展示方式带来更多用户触达，刺激点击。',
      steps: 'APP首页、活动页等',
      format: 'jpg、JPEG、PNG、GIF等动/静态',
      size: '1:1',
      impression: '—',
      model: 'CPT'
    }
  }
]

const activeId = ref(navItems[0].id)
const sectionEls = ref([])

const setSectionRef = (el, idx) => {
  if (!el) return
  sectionEls.value[idx] = el
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  activeId.value = id
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  // 监听滚动，自动高亮当前区块（IntersectionObserver）
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0]

      if (!visible?.target?.id) return
      activeId.value = visible.target.id
    },
    { root: null, rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.2, 0.3, 0.4] }
  )

  sectionEls.value.forEach((el) => el && observer.observe(el))

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

