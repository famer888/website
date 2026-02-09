# Copilot 指南（Nuxt 3 + Tailwind 官网）

## 项目概览
- Nuxt 3 + Tailwind CSS，SSR 开启用于 SEO（见 nuxt.config.ts）。
- 以页面为中心的官网站点，导航和布局在 layouts/default.vue。
- 品牌名称为 **T1**，是一个广告投放/数字营销平台官网。
- **所有页面必须同时完成 PC 端和移动端适配**，以 `md:` 断点为 PC/移动分界线。

## 关键目录与模式
- pages/：路由即文件结构，含多级目录（如 pages/why/**、pages/contact/**）。
- components/：通用组件，Nuxt 自动导入（例如 pages/video.vue 直接使用 VideoPlayer）。
- assets/：静态资源与样式；全局样式从 assets/css/main.css 注入。
- assets/svg/：SVG 通过 components/SvgIcon.vue 的 `import.meta.glob` 动态加载。

## 运行与构建
- 安装依赖：npm install
- 开发：npm run dev（绑定 0.0.0.0）
- 生产构建：npm run build
- 预览：npm run preview
- 静态生成：npm run generate

## 运行时配置
- 公开配置在 runtimeConfig.public.siteUrl，默认 http://localhost:3000。

---

## 页面代码模式参考（以 t1-dsp.vue 为标准范本）

> **参考范本**：`pages/advertiser/t1-dsp.vue` 是项目中最完整的页面实现，包含了所有常用模式。新建页面时优先参考此文件。

### 1. 文件结构与代码组织顺序

所有页面使用 `<template>` + `<script setup>` 组合。**`<script setup>` 中的代码按以下固定顺序排列**：

```js
// 1. 组件导入（非自动导入的组件）
import FeatureCardsSection from "~/components/FeatureCardsSection.vue";

// 2. 图片导入
import img_dsp7 from "~/assets/imgaes/advertiser/DSP7.png";
import img_t1dsp6x from "~/assets/imgaes/advertiser/img_t1dsp6x.jpg";

// 3. SEO 配置
useHead({
  title: "什么是 T1 DSP - T1",
  meta: [{ name: "description", content: "页面描述..." }],
});

// 4. 静态数据定义（数组/对象）
const uniqueFeatures = [
  { title: "数据驱动型营销活动", desc: "...", icon: "advertiser-svg8" },
];

// 5. 交互状态与函数
const openFaqIndex = ref(null);
const toggleFaq = (idx) => { ... };

// 6. 滚动/轮播逻辑
const createScrollHandler = (scrollEl, cardEls, activeIndex) => { ... };

// 7. onMounted 生命周期
onMounted(() => { nextTick(() => { ... }); });
```

### 2. SEO 配置约定
- 每个页面必须调用 `useHead()` 设置 title 和 description。
- title 格式：`页面名称 - T1`（如 `广告形式 - T1`）。
- 首页 title 特殊：`T1 - 在全球顶级网站上投放广告`。

### 3. 图片与资源约定
- 图片通过 ES import 导入，template 中用 `:src` 绑定：
```js
import img_dsp7 from "~/assets/imgaes/advertiser/DSP7.png";
```
- **目录名拼写为 `imgaes`（非 images），务必保持一致**。
- 图片按页面分目录：`assets/imgaes/home/`、`assets/imgaes/why/`、`assets/imgaes/advertiser/`。
- SVG 图标用 `<SvgIcon :name="advertiser-svg8" />` 组件（文件存放在 `assets/svg/` 下，name 不含 .svg 后缀）。

### 4. PC/移动端同步开发模式（核心原则）

**所有页面必须同时处理 PC 端和移动端**，以 `md:` 为分界线，有两种实现方式：

**方式一：同一模板 + 响应式类（推荐，适用于结构差异小的区块）**
```html
<!-- 文字：移动端小号，PC端大号 -->
<h2 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px]
           leading-[40px] sm:leading-[46px] md:leading-[52px] text-[#111827] mb-4">
  标题
</h2>
<!-- 按钮：移动端小尺寸，PC端大尺寸 -->
<NuxtLink class="register-btn ... w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]">
```

**方式二：PC/移动端分开写模板（适用于布局差异大的区块）**
```html
<!-- PC端：横向左右布局 -->
<div class="hidden md:flex flex-row items-center gap-10">
  <div class="w-1/2">文案</div>
  <div class="w-1/2">图片</div>
</div>
<!-- 移动端：纵向堆叠 -->
<div class="md:hidden flex flex-col gap-6">
  <div>图片</div>
  <div>文案</div>
</div>
```

**方式三：flex order 调整顺序（适用于 PC 和移动端内容相同但顺序不同）**
```html
<div class="flex flex-col md:flex-row items-center gap-10">
  <div class="w-full md:w-1/2 order-2 md:order-1">文案</div>
  <div class="w-full md:w-1/2 order-1 md:order-2">图片</div>
</div>
```

### 5. 页面典型区块（Section）结构

页面由多个 `<section>` 纵向拼接，统一结构：
```html
<section class="bg-white py-10 sm:py-14 lg:py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- 居中标题 -->
    <h2 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px]
               leading-[40px] sm:leading-[46px] md:leading-[52px]
               tracking-normal text-[#111827] mb-4">
      区块标题
    </h2>
    <!-- 居中描述 -->
    <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px]
              leading-[20px] sm:leading-[22px] md:leading-[26px]
              tracking-normal text-[#A2A3A5] max-w-[760px] mx-auto mb-6">
      区块描述
    </p>
    <!-- 内容区 -->
  </div>
</section>
```
- 背景色交替：`bg-white` / `bg-[#F5F5F5]` / `bg-[#F5F7FB]`。
- 间距多断点递增：`py-10 sm:py-14 lg:py-16` 或 `py-12 sm:py-14 lg:py-16`。
- 容器统一 `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`，文本内容窄容器用 `max-w-5xl` 或 `max-w-4xl`。

### 6. Hero 区域（两种写法）

**全幅背景图 Hero**（t1-dsp、ad-styles、target-function）：
```html
<section class="relative overflow-hidden h-[260px] sm:h-[320px] md:h-[420px] lg:h-[560px]">
  <img :src="heroImg" class="absolute inset-0 w-full h-full object-cover object-center" />
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
    <div class="h-full flex items-center">
      <div class="w-full md:w-1/2 text-white">
        <h1 class="font-pingfang font-medium text-[32px] sm:text-[40px] md:text-[80px]
                   leading-[44px] sm:leading-[54px] md:leading-[110px] mb-4">标题</h1>
        <!-- 装饰分隔线 -->
        <div class="w-[120px] sm:w-[160px] md:w-[240px] h-[1px] bg-white/60 mb-4"></div>
        <p class="font-pingfang font-normal text-[14px] sm:text-[16px] md:text-[24px]
                  text-white/80">副标题</p>
      </div>
    </div>
  </div>
</section>
```

**渐变背景 Hero**（how-to-operate、who-are-we）：
```html
<section class="bg-gradient-to-b from-[#DFE9FB] to-[#FFFFFF] py-8 sm:py-12 lg:py-16">
```

### 7. 图文左右布局区块（PC 横排 + 移动端纵排）

```html
<section class="bg-white py-10 sm:py-14 lg:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
      <!-- 左侧文案 -->
      <div class="w-full md:w-1/2">
        <h3 class="font-pingfang font-medium text-[28px] sm:text-[32px] md:text-[36px]
                   leading-[40px] sm:leading-[46px] md:leading-[52px]
                   tracking-normal text-[#111827] mb-4">标题</h3>
        <p class="font-pingfang font-normal text-[12px] sm:text-[14px] md:text-[16px]
                  leading-[20px] sm:leading-[22px] md:leading-[26px]
                  tracking-normal text-[#A2A3A5] max-w-[560px]">描述</p>
      </div>
      <!-- 右侧图片 -->
      <div class="w-full md:w-1/2 flex justify-center md:justify-end">
        <img :src="imgSrc" class="w-full h-auto max-w-[560px] object-contain" />
      </div>
    </div>
  </div>
</section>
```

### 8. FeatureCardsSection 使用模式（三列卡片，PC grid + 移动端滑动）

使用 `components/FeatureCardsSection.vue` 通用组件，**每个调用页面需要在 script 中配置一整套滚动状态**：

```js
// 1. 定义卡片数据（每组 3 个）
const uniqueFeatures = [
  { title: "标题", desc: "描述", icon: "advertiser-svg8" },  // icon 对应 assets/svg/ 下的文件名
  { title: "标题", desc: "描述", icon: "advertiser-svg9" },
  { title: "标题", desc: "描述", icon: "advertiser-svg10" },
];

// 2. 通用滚动逻辑（直接复制使用）
const createScrollHandler = (scrollEl, cardEls, activeIndex) => {
  const calcActiveIndex = (containerEl, cardEls) => {
    if (!containerEl || !cardEls?.length) return 0;
    const containerRect = containerEl.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    let bestIdx = 0;
    let bestDist = Infinity;
    cardEls.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const dist = Math.abs(center - containerCenter);
      if (dist < bestDist) { bestDist = dist; bestIdx = idx; }
    });
    return bestIdx;
  };
  return () => { activeIndex.value = calcActiveIndex(scrollEl.value, cardEls.value); };
};

// 3. 为每组卡片创建 ref 和 handler
const uniqueScrollEl = ref(null);
const uniqueCardEls = ref([]);
const activeUniqueIndex = ref(0);
const setUniqueCardRef = (el, idx) => { if (el) uniqueCardEls.value[idx] = el; };

// 4. 组装 cardSections 数组
const cardSections = [
  {
    id: "unique",                   // 唯一标识
    title: "区块标题",
    description: "区块描述",
    items: uniqueFeatures,           // 卡片数据
    bgColor: "bg-[#F5F7FB]",        // 背景色：bg-white 或 bg-[#F5F7FB] 交替
    scrollRef: uniqueScrollEl,       // 移动端滚动容器 ref
    cardRefs: uniqueCardEls,         // 移动端卡片元素 refs
    activeIndex: activeUniqueIndex,  // 当前高亮索引
    onScroll: createScrollHandler(uniqueScrollEl, uniqueCardEls, activeUniqueIndex),
    setCardRef: setUniqueCardRef,
    ctaLink: "/ad-styles",           // 可选：底部 CTA 按钮链接
    ctaText: "查看更多",              // 可选：底部 CTA 按钮文字
  },
];

// 5. onMounted 初始化
onMounted(() => {
  nextTick(() => {
    cardSections.forEach((section) => { if (section.onScroll) section.onScroll(); });
  });
});
```

**模板中使用**：
```html
<FeatureCardsSection
  v-for="section in cardSections" :key="section.id"
  :id="section.id" :title="section.title" :description="section.description"
  :items="section.items" :bg-color="section.bgColor"
  :scroll-ref="section.scrollRef" :card-refs="section.cardRefs"
  :active-index="section.activeIndex" :on-scroll="section.onScroll"
  :set-card-ref="section.setCardRef"
  :cta-link="section.ctaLink" :cta-text="section.ctaText"
/>
```

### 9. FAQ 手风琴模式

```js
// script
const faqItems = [
  { q: "问题文本?", a: "回答文本。" },
];
const openFaqIndex = ref(null);
const toggleFaq = (idx) => {
  openFaqIndex.value = openFaqIndex.value === idx ? null : idx;
};
```
```html
<!-- template -->
<section class="bg-white py-12 sm:py-14 lg:py-16">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 class="font-pingfang font-medium text-[22px] sm:text-[24px] md:text-[28px]
               leading-[32px] sm:leading-[36px] md:leading-[40px]
               tracking-normal text-[#111827] text-center mb-8">FAQ标题</h3>
    <div class="border-t border-[#E6ECF5]">
      <div v-for="(item, idx) in faqItems" :key="item.q" class="border-b border-[#E6ECF5]">
        <button type="button" class="w-full flex items-center justify-between py-4 text-left"
                @click="toggleFaq(idx)">
          <span class="font-pingfang font-normal text-[14px] sm:text-[16px]
                       leading-[22px] text-[#111827]">{{ item.q }}</span>
          <svg class="w-5 h-5 text-[#7B8798] transition-transform"
               :class="openFaqIndex === idx ? 'rotate-180' : 'rotate-0'"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="openFaqIndex === idx" class="pb-4">
          <p class="font-pingfang font-normal text-[12px] sm:text-[14px]
                    leading-[20px] sm:leading-[22px] text-[#A2A3A5]">{{ item.a }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 10. 底部 CTA 区块模式

几乎所有内容页底部都有 CTA 行动号召区块：
```html
<section class="bg-[#F5F7FB] py-12 sm:py-14 lg:py-16">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h3 class="font-pingfang font-medium text-[22px] sm:text-[24px] md:text-[28px]
               leading-[32px] sm:leading-[36px] md:leading-[40px]
               tracking-normal text-[#3A82F9] mb-3">
      行动号召标题
    </h3>
    <p class="font-pingfang font-normal text-[12px] sm:text-[14px]
              leading-[18px] sm:leading-[22px] tracking-normal text-[#A2A3A5] mb-6">
      描述文案
    </p>
    <div class="flex justify-center">
      <NuxtLink to="/register"
        class="register-btn inline-flex items-center justify-center text-white rounded-full
               font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px]
               tracking-normal transition-colors shadow-lg hover:shadow-xl
               w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]">
        报名
      </NuxtLink>
    </div>
  </div>
</section>
```

### 11. 排版与字体规范

- 字体统一 `font-pingfang`（PingFang SC），tailwind.config.js 已定义。
- 所有文本样式遵循固定格式：`font-pingfang font-medium/normal text-[Npx] leading-[Npx] tracking-normal`。
- **字号必须使用方括号精确像素值**，不用 Tailwind 预设（如 `text-lg`），除占位页面外。
- 多断点响应式写法示例：
  - 标题：`text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[46px] md:leading-[52px]`
  - 正文：`text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px]`
- 常用颜色：
  - 大标题：`text-[#111827]`
  - 中标题：`text-[#626671]`
  - 正文/描述：`text-[#A2A3A5]` 或 `text-[#93959C]`
  - 品牌色标题：`text-[#3A82F9]` 或 `text-brand`

### 12. 品牌色与按钮样式

- 品牌主色 `#3A82F9`（tailwind.config.js 中定义为 `brand`）。
- 悬停色 `#2B6FE8`，浅色 `#E8F2FF`。
- 两类按钮样式（在 assets/css/main.css 的 `@layer components` 定义）：
  - `register-btn`：蓝色实心按钮（只需加类名，颜色自动生效）。
  - `learn-more-btn`：蓝色边框白底按钮。
- 按钮完整写法（直接复制）：
```html
<!-- 实心按钮 -->
<NuxtLink to="/register"
  class="register-btn inline-flex items-center justify-center text-white rounded-full
         font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px]
         tracking-normal transition-colors shadow-lg hover:shadow-xl
         w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]">
  按钮文字
</NuxtLink>

<!-- 边框按钮 -->
<NuxtLink to="/somewhere"
  class="learn-more-btn inline-flex items-center justify-center bg-white border-2 rounded-full
         font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px]
         tracking-normal transition-colors
         w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]">
  按钮文字
</NuxtLink>
```

### 13. 数据驱动渲染（推荐模式）

复杂页面中内容数据在 `<script setup>` 定义为数组/对象，模板用 `v-for` 渲染，避免大量硬编码重复 HTML：
```js
// 数据
const adBlocks = [
  { id: "open-screen", sectionTitle: "开屏广告", image: img1, meta: { type: "Banner广告", ... } },
];

// 元数据字段配置（控制渲染哪些字段）
const metaFields = [
  { key: "type", label: "广告类型" },
  { key: "format", label: "支持格式" },
];
```

### 14. 样式类集中管理模式

`how-to-operate.vue` 中将重复 Tailwind 类抽取为 `styles` 对象：
```js
const styles = {
  h1: "font-pingfang font-medium text-[42px] sm:text-[48px] md:text-[60px] leading-[60px] sm:leading-[72px] md:leading-[84px] tracking-normal text-[#111827] mb-4",
  btn: "register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[21px] sm:text-[24px] leading-[30px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]",
  stepTitle: "font-pingfang font-medium text-[42px] sm:text-[48px] md:text-[54px] leading-[60px] sm:leading-[69px] md:leading-[78px] tracking-normal text-[#626671] mb-4",
};
```
模板中 `:class="styles.h1"` 引用。

### 15. 交互模式汇总

- **手风琴展开/收起**：`ref(null)` + toggle 函数（见第 9 节 FAQ 模式）。
- **IntersectionObserver 滚动高亮**：`ad-styles/index.vue` 用于标签导航自动切换。
- **移动端横向滑动**：`overflow-x-auto snap-x snap-mandatory` + `@scroll.passive` + 圆点指示器。
- **隐藏滚动条**：`[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`。

### 16. 新建页面完整流程（Checklist）

1. 在 `pages/` 下按路由创建 .vue 文件。
2. 根元素 `<div class="bg-white">`。
3. `<script setup>` 中按固定顺序编写：导入 → useHead → 数据 → 交互逻辑。
4. **每个区块同时写 PC 和移动端**，用 `flex-col md:flex-row` 或 `hidden md:block` / `md:hidden`。
5. 所有文本用 `font-pingfang` + 方括号精确像素 + 多断点。
6. 按钮用 `register-btn` 或 `learn-more-btn` 类 + `rounded-full` + 固定宽高。
7. 图片用 ES import + `:src`，路径用 `~/assets/imgaes/`。
8. 区块间用 `<section>` 分隔，背景色交替。
9. 如有三列卡片需求，使用 `FeatureCardsSection` 组件 + 配套滚动逻辑。
10. 底部添加 CTA 区块。
