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
import why6ImageSrc from '~/assets/imgaes/why/why6.svg'
import why7ImageSrc from '~/assets/imgaes/why/why7.svg'
import why9ImageSrc from '~/assets/imgaes/why/why9.svg'
import why10ImageSrc from '~/assets/imgaes/why/why10.svg'

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
        title: '精准定位目标受众！',
        description: '了解你的受众是关键，能够精准定位他们才是你的营销活动和公司取得成功的关键因素！',
        image: why6ImageSrc
    },
    {
        title: '流量购买机会！',
        description: '以极低的价格获得海量优质流量。广告商可以放心，使用 T1 绝不会超出预设的预算限额。',
        image: why7ImageSrc
    },
    {
        title: '综合统计与分析！',
        description: '借助我们先进的分析报告工具，您可以清晰了解整体营销绩效以及各个营销活动的效率。轻松衡量您的增长和业绩，从而专注于触达更广泛的目标受众。',
        image: why9ImageSrc
    },
    {
        title: '人口统计数据！',
        description: '精准定位目标国家、地区、城市和人群，探索触达特定受众的最佳时间和地点。T1 提供海量流量，其中大部分来自优质国家，并覆盖所有相关人群。',
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
