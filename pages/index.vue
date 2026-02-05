<template>
  <div>
    <!-- Hero 区域 -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            欢迎来到官网
          </h1>
          <p class="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
            响应式设计，完美适配 PC 和移动端
          </p>
          <NuxtLink 
            to="/video" 
            class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            观看视频
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO 配置
useHead({
  title: '首页 - 官网',
  meta: [
    { name: 'description', content: '欢迎访问我们的官方网站，提供响应式设计和视频服务' }
  ]
})

const features = [
  {
    icon: '🚀',
    title: '快速响应',
    description: '基于 Nuxt 3 构建，提供极速的页面加载体验'
  },
  {
    icon: '📱',
    title: '响应式设计',
    description: '完美适配 PC 端和移动端，一套代码全平台支持'
  },
  {
    icon: '🎥',
    title: '视频支持',
    description: '支持高质量视频播放，优化移动端和桌面端体验'
  },
  {
    icon: '🔍',
    title: 'SEO 优化',
    description: '服务端渲染，完美支持搜索引擎优化'
  },
  {
    icon: '🎨',
    title: '现代设计',
    description: '使用 Tailwind CSS 打造美观现代的界面'
  },
  {
    icon: '⚡',
    title: '高性能',
    description: '优化的代码和资源加载，确保最佳性能'
  }
]
</script>

