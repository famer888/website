<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl sm:text-4xl font-bold mb-8 text-center">视频中心</h1>
    
    <!-- 视频播放器组件 -->
    <div class="mb-12">
      <VideoPlayer 
        :video-url="currentVideo.url"
        :title="currentVideo.title"
        :poster="currentVideo.poster"
      />
    </div>

    <!-- 视频列表 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div 
        v-for="video in videos" 
        :key="video.id"
        @click="selectVideo(video)"
        class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      >
        <div class="relative aspect-video bg-gray-200">
          <img 
            v-if="video.poster" 
            :src="video.poster" 
            :alt="video.title"
            class="w-full h-full object-cover"
          >
          <div v-else class="w-full h-full flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity">
            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2 line-clamp-2">{{ video.title }}</h3>
          <p class="text-gray-600 text-sm line-clamp-2">{{ video.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO 配置
useHead({
  title: '视频中心 - 官网',
  meta: [
    { name: 'description', content: '观看我们的精彩视频内容，支持 PC 和移动端播放' }
  ]
})

const currentVideo = ref({
  id: 1,
  url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  title: '示例视频 1',
  description: '这是一个示例视频',
  poster: null
})

const videos = ref([
  {
    id: 1,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: '示例视频 1 - 大雄兔',
    description: '这是一个高质量的视频示例，展示了视频播放器的功能',
    poster: null
  },
  {
    id: 2,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: '示例视频 2 - 大象的梦',
    description: '另一个精彩的视频内容，支持全屏播放',
    poster: null
  },
  {
    id: 3,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    title: '示例视频 3',
    description: '更多精彩内容等待您发现',
    poster: null
  },
  {
    id: 4,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    title: '示例视频 4',
    description: '响应式设计，完美适配各种设备',
    poster: null
  }
])

const selectVideo = (video) => {
  currentVideo.value = video
  // 滚动到视频播放器
  nextTick(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
</script>

