<template>
  <div class="w-full bg-black rounded-lg overflow-hidden shadow-2xl">
    <div class="relative w-full" :class="containerClass">
      <video
        ref="videoElement"
        :src="videoUrl"
        :poster="poster"
        class="w-full h-full"
        controls
        playsinline
        @loadedmetadata="onVideoLoaded"
      >
        您的浏览器不支持视频播放。
      </video>
    </div>
    <div v-if="title" class="p-4 bg-white">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-900">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videoUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  poster: {
    type: String,
    default: null
  },
  aspectRatio: {
    type: String,
    default: '16/9' // 默认 16:9
  }
})

const videoElement = ref(null)

// 响应式容器类
const containerClass = computed(() => {
  // 移动端使用固定高度，PC 端使用宽高比
  return 'aspect-video'
})

const onVideoLoaded = () => {
  if (videoElement.value) {
    // 视频加载完成后的处理
    console.log('视频加载完成')
  }
}

// 确保视频在移动端正确显示
onMounted(() => {
  if (videoElement.value) {
    // 设置移动端播放属性
    videoElement.value.setAttribute('playsinline', 'true')
    videoElement.value.setAttribute('webkit-playsinline', 'true')
  }
})
</script>

<style scoped>
/* 确保视频播放器在移动端正确显示 */
video {
  max-width: 100%;
  height: auto;
}

/* 移动端优化 */
@media (max-width: 640px) {
  video {
    width: 100%;
    height: auto;
  }
}
</style>

