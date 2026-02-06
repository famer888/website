# Nuxt 3 + Tailwind CSS 官网项目

这是一个基于 Nuxt 3 和 Tailwind CSS 构建的响应式官网项目，完美支持 SEO 优化和视频播放功能。

## 技术栈

- **Nuxt 3** - Vue.js 全栈框架（最新稳定版）
- **Tailwind CSS** - 实用优先的 CSS 框架
- **SSR** - 服务端渲染，完美支持 SEO

## 特性

- ✅ 响应式设计，一套代码适配 PC 和移动端
- ✅ SEO 优化，服务端渲染
- ✅ 视频播放功能，支持 PC 和移动端
- ✅ 现代化 UI 设计
- ✅ 高性能优化

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
.
├── components/          # 组件目录
│   └── VideoPlayer.vue  # 视频播放器组件
├── layouts/            # 布局目录
│   └── default.vue     # 默认布局
├── pages/              # 页面目录
│   ├── index.vue       # 首页
│   └── video.vue       # 视频页面
├── app.vue             # 根组件
├── nuxt.config.ts      # Nuxt 配置文件
└── tailwind.config.js  # Tailwind 配置
```

## 响应式设计

项目使用 Tailwind CSS 的响应式工具类实现移动端和 PC 端的适配：

- `sm:` - 小屏幕（≥640px）
- `md:` - 中等屏幕（≥768px）
- `lg:` - 大屏幕（≥1024px）
- `xl:` - 超大屏幕（≥1280px）

## SEO 配置

项目已配置基础的 SEO 设置，包括：

- 服务端渲染（SSR）
- Meta 标签配置
- 页面标题和描述

可以在 `nuxt.config.ts` 和各个页面的 `useHead` 中进一步自定义 SEO 设置。

## 视频功能

视频播放器组件支持：

- 响应式视频播放
- 移动端和 PC 端适配
- 自定义封面图
- 全屏播放

## 许可证

MIT

