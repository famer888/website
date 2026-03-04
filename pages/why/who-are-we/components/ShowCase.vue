<template>
    <section class="w-full  py-[30px] md:pt-[60px] md:pb-[40px] ">
        <div class="w-full md:max-w-[1200px] mx-auto px-6 md:px-0 mb-[36px] md:mb-[48px] text-left md:text-center">
            <h2
                class="text-[#626671] font-pingfang font-medium tracking-[0px] text-[36px] leading-[56px] md:text-[56px] md:leading-[96px] mb-[16px] md:mb-[24px]">
                所有好处尽在此处!</h2>
            <p
                class="text-[#626671] md:text-[#93959C] font-pingfang font-medium tracking-[0px] text-[16px] leading-[24px] md:text-[24px] md:leading-[36px]">
                我们能为您提供很多，以下是一些我们相信您会喜欢的其他福利!</p>
        </div>
        <div class="flex flex-col">
            <!-- 卡片区域 -->
            <div ref="scrollContainer"
                class="w-full md:max-w-[1200px] mx-auto pl-[24px] md:px-0 order-2 md:order-1 mt-[24px] md:mt-0 mb-0 md:mb-[32px] overflow-x-auto md:overflow-visible scrollbar-hide"
                style="-webkit-overflow-scrolling: touch;">
                <div class="flex md:grid md:grid-cols-4 gap-6">
                    <div v-for="(card, index) in cards" :key="index" @click="activeIndex = index"
                        class="flex-shrink-0 w-[280px] md:w-auto cursor-pointer transition-all duration-300 py-[32px] px-[18px] rounded-[16px] border"
                        :class="activeIndex === index
                            ? 'bg-[#3982F9] text-white border-[#3982F9]'
                            : 'bg-white border-[#E4E4E4] hover:border-[#3982F9]'">
                        <h3 class="font-pingfang font-medium tracking-[0px] text-[24px] leading-[36px] text-center mb-4"
                            :class="activeIndex === index ? 'text-white' : 'text-[#626671]'">
                            {{ card.title }}</h3>
                        <p class="font-pingfang font-normal tracking-[0px] text-[16px] leading-[26px] text-center md:text-justify"
                            :class="activeIndex === index ? 'text-white' : 'text-[#626671]'">
                            {{ card.description }}
                        </p>
                    </div>
                    <!-- H5 尾部：第一张卡片副本，点击回到第一张 -->
                    <div @click="activeIndex = 0"
                        class="flex-shrink-0 w-[280px] md:hidden cursor-pointer transition-all duration-300 py-[32px] px-[18px] rounded-[16px] border opacity-50"
                        :class="activeIndex === 0
                            ? 'bg-[#3982F9] text-white border-[#3982F9]'
                            : 'bg-white border-[#E4E4E4]'">
                        <h3 class="font-pingfang font-medium tracking-[0px] text-[24px] leading-[36px] text-center mb-4"
                            :class="activeIndex === 0 ? 'text-white' : 'text-[#626671]'">
                            {{ cards[0].title }}</h3>
                        <p class="font-pingfang font-normal tracking-[0px] text-[16px] leading-[26px] text-center"
                            :class="activeIndex === 0 ? 'text-white' : 'text-[#626671]'">
                            {{ cards[0].description }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- 大图区域 -->
            <div class="w-full md:max-w-[1200px] mx-auto px-4 md:px-0 order-1 md:order-2">
               <img :key="activeIndex" :src="activeImage" alt="" class="w-full h-auto" />
            </div>

            <!-- 分页器 -->
            <div class="flex justify-center gap-[16px] md:gap-[10px] mt-[60px] md:mt-[48px] order-3">
                <button v-for="(card, index) in cards" :key="index" @click="activeIndex = index"
                    class="rounded-full transition-all duration-300 w-[12px] h-[12px] md:h-[10px]"
                    :class="activeIndex === index ? 'bg-[#3A82F9] md:w-[48px]' : 'bg-[#C3C4C8] md:w-[10px]'"></button>
            </div>
        </div>
    </section>
</template>
<script setup>
import why6ImageSrc from '~/assets/imgaes/why/why6@2x.webp'
import why7ImageSrc from '~/assets/imgaes/why/why7@2x.webp'
import why9ImageSrc from '~/assets/imgaes/why/why9@2x.webp'
import why10ImageSrc from '~/assets/imgaes/why/why10@2x.webp'

const activeIndex = ref(0)
const scrollContainer = ref(null)
const activeImage = computed(() => cards[activeIndex.value].image)

// H5 切换时滚动卡片到左侧 24px 位置
watch(activeIndex, (index) => {
    if (!scrollContainer.value || window.innerWidth >= 768) return
    const cardWidth = 280 + 24 // 卡片宽度 + gap
    scrollContainer.value.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
    })
})

// 自动轮播：每 5 秒切换一次
let timer = null
const startAutoPlay = () => {
    timer = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % cards.length
    }, 5000)
}
const stopAutoPlay = () => {
    if (timer) {
        clearInterval(timer)
        timer = null
    }
}

onMounted(() => startAutoPlay())
onUnmounted(() => stopAutoPlay())

const cards = [
    {
        title: '精准受众定向',
        description: '基于人群标签与行为数据分析，帮助广告精准触达目标用户，提高点击率与转化效果。',
        image: why6ImageSrc
    },
    {
        title: '优质流量资源',
        description: '整合多渠道流量资源，支持灵活预算控制与智能投放策略，帮助广告主稳定获取高质量流量。',
        image: why7ImageSrc
    },
    {
        title: '数据统计与分析',
        description: '提供实时数据报表与效果监测系统，清晰展示曝光、点击与转化情况，方便优化投放策略。',
        image: why9ImageSrc
    },
    {
        title: '多维度人群覆盖',
        description: '支持国家、地区、城市及人群标签定向，覆盖全球多个市场，满足不同业务需求。',
        image: why10ImageSrc
    }
]
</script>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
