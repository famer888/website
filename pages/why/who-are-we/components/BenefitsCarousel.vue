<template>
  <div class="w-full">
    <!-- 标题 -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">所有好处尽在此处!</h2>
      <p class="text-gray-600">我们能为您提供很多,以下是一些我们相信您会喜欢的其他福利!</p>
    </div>

    <!-- 桌面端：四个卡片在上方 -->
    <div class="hidden md:grid grid-cols-4 gap-4 mb-8">
      <div
        v-for="(card, index) in cards"
        :key="index"
        @click="activeIndex = index"
        class="cursor-pointer transition-all duration-300 p-6 rounded-lg border-2"
        :class="activeIndex === index 
          ? 'bg-[#3A82F9] text-white border-[#3A82F9]' 
          : 'bg-white text-gray-900 border-gray-200 hover:border-[#3A82F9]'"
      >
        <h3 class="font-bold text-lg mb-3">{{ card.title }}</h3>
        <p class="text-sm leading-relaxed" :class="activeIndex === index ? 'text-white' : 'text-gray-600'">
          {{ card.description }}
        </p>
      </div>
    </div>

    <!-- 移动端：图表在上方 -->
    <div class="block md:hidden mb-4">
      <div class="relative w-full h-[300px] mx-auto">
        <div class="overflow-hidden w-full h-full">
          <div 
            class="flex transition-transform duration-500 ease-in-out h-full"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="w-full h-full flex-shrink-0"
            >
              <!-- 第一张图显示 why6.svg -->
              <div v-if="index === 0" class="w-full h-full flex items-center justify-center">
                <img :src="why6ImageSrc" alt="Benefits" class="w-full h-full object-contain" />
              </div>
              <!-- 第二张图显示 why7.svg -->
              <div v-else-if="index === 1" class="w-full h-full flex items-center justify-center">
                <img :src="why7ImageSrc" alt="Benefits" class="w-full h-full object-contain" />
              </div>
              <!-- 第三张图显示 why9.svg -->
              <div v-else-if="index === 2" class="w-full h-full flex items-center justify-center">
                <img :src="why9ImageSrc" alt="综合统计与分析" class="w-full h-full object-contain" />
              </div>
              <!-- 第四张图显示 why10.svg -->
              <div v-else-if="index === 3" class="w-full h-full flex items-center justify-center">
                <img :src="why10ImageSrc" alt="人口统计数据" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 桌面端：轮播图区域 -->
    <div class="hidden md:block relative mb-6 w-[976px] h-[560px] mx-auto">
      <div class="overflow-hidden w-full h-full">
        <div 
          class="flex transition-transform duration-500 ease-in-out h-full"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="w-full h-full flex-shrink-0"
          >
            <!-- 第一张图显示 why6.svg -->
            <div v-if="index === 0" class="w-full h-full flex items-center justify-center">
              <img :src="why6ImageSrc" alt="Benefits" class="w-full h-full object-contain" />
            </div>
            <!-- 第二张图显示 why7.svg -->
            <div v-else-if="index === 1" class="w-full h-full flex items-center justify-center">
              <img :src="why7ImageSrc" alt="Benefits" class="w-full h-full object-contain" />
            </div>
            <!-- 第三张图显示 ECharts 图表 -->
            <div v-else-if="index === 2" class="w-full h-full flex flex-col px-4 pt-4 pb-6 bg-[#F9FAFD]">
              <!-- 顶部图表区域 -->
              <div id="main-chart-container" class="w-full h-[280px] mb-4 bg-white rounded-lg px-4 pt-4 pb-6"></div>
              <!-- 底部数据面板 -->
              <div class="grid grid-cols-3 gap-4 h-[300px]">
                <!-- 左侧数据面板 -->
                <div class="bg-white rounded-lg overflow-auto shadow-md">
                  <div class="bg-[#f3f4f6] px-3 pt-3">
                    <table class="w-full text-xs">
                      <thead>
                        <tr class="text-gray-600 border-b">
                          <th class="text-left pb-2">Impressions</th>
                          <th class="text-left pb-2">Clicks</th>
                          <th class="text-left pb-2">CTR</th>
                          <th class="text-left pb-2">Value</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div class="px-3 pb-3">
                    <table class="w-full text-xs">
                      <thead class="hidden">
                        <tr>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(row, rowIndex) in tableData.left" :key="rowIndex" class="border-b">
                          <td class="py-1">{{ row.impressions }}</td>
                          <td class="py-1">{{ row.clicks || '' }}</td>
                          <td class="py-1">{{ row.ctr }}</td>
                          <td class="py-1">
                            <div v-if="row.value" :class="row.value === 'green' ? 'w-9 h-3 bg-green-500 rounded' : 'w-6 h-3 bg-gray-400 rounded'"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- 中间数据面板 -->
                <div class="bg-white rounded-lg overflow-auto shadow-md">
                  <div class="bg-[#f3f4f6] px-3 pt-3">
                    <table class="w-full text-xs">
                      <thead>
                        <tr class="text-gray-600 border-b">
                          <th class="text-left pb-2">Impressions</th>
                          <th class="text-left pb-2">Clicks</th>
                          <th class="text-left pb-2">CTR %</th>
                          <th class="text-left pb-2">Value</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div class="px-3 pb-3">
                    <table class="w-full text-xs">
                      <thead class="hidden">
                        <tr>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(row, rowIndex) in tableData.middle" :key="rowIndex" class="border-b">
                          <td class="py-1">{{ row.impressions }}</td>
                          <td class="py-1">{{ row.clicks }}</td>
                          <td class="py-1">{{ row.ctr }}</td>
                          <td class="py-1">
                            <div :class="row.value === 'green' ? 'w-9 h-3 bg-green-500 rounded' : 'w-6 h-3 bg-gray-400 rounded'"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- 右侧数据面板 -->
                <div class="bg-white rounded-lg p-3 overflow-auto shadow-md">
                  <div class="mb-2 flex items-center justify-center">
                    <div id="donut-chart-container" class="w-24 h-24"></div>
                  </div>
                  <table class="w-full text-xs">
                    <thead>
                      <tr class="text-gray-600 border-b bg-[#f3f4f6]">
                        <th class="text-left pb-2">Impressions</th>
                        <th class="text-left pb-2">Clicks</th>
                        <th class="text-left pb-2">CTR %</th>
                        <th class="text-left pb-2">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, rowIndex) in tableData.right" :key="rowIndex" class="border-b">
                        <td class="py-1">{{ row.impressions }}</td>
                        <td class="py-1">{{ row.clicks }}</td>
                        <td class="py-1">{{ row.ctr }}</td>
                        <td class="py-1">
                          <div class="w-9 h-3 bg-green-500 rounded"></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- 第四张图显示表格 -->
            <div v-else-if="index === 3" class="w-full h-full">
              <DailyAdImpressionsTable />
            </div>
            <!-- 其他页面显示网格布局 -->
            <div v-else class="grid grid-cols-4 gap-4 w-full h-full">
              <div
                v-for="(item, itemIndex) in slides[index]"
                :key="itemIndex"
                class="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center"
              >
                <div v-if="item.icon" class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg class="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div v-else class="w-full h-full flex flex-col gap-2">
                  <div class="h-2 bg-gray-300 rounded"></div>
                  <div class="h-2 bg-gray-300 rounded"></div>
                  <div class="h-2 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 移动端：卡片在下方，可左右滑动 -->
    <div class="block md:hidden mt-4">
      <div 
        ref="mobileCardsContainer"
        class="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;"
      >
        <div class="flex gap-4" style="width: max-content;">
          <div
            v-for="(card, index) in cards"
            :key="index"
            @click="activeIndex = index"
            class="flex-shrink-0 cursor-pointer transition-all duration-300 p-4 rounded-lg border-2 w-[280px]"
            :class="activeIndex === index 
              ? 'bg-[#3A82F9] text-white border-[#3A82F9]' 
              : 'bg-white text-gray-900 border-gray-200'"
            style="scroll-snap-align: start;"
          >
            <h3 class="font-bold text-base mb-2">{{ card.title }}</h3>
            <p class="text-xs leading-relaxed" :class="activeIndex === index ? 'text-white' : 'text-gray-600'">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页指示器 -->
    <div class="flex justify-center gap-2 mt-4">
      <button
        v-for="(card, index) in cards"
        :key="index"
        @click="activeIndex = index"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="activeIndex === index ? 'bg-[#3A82F9] w-8' : 'bg-gray-300'"
      ></button>
    </div>
  </div>
</template>

<script setup>
// 导入图片
import why6ImageSrc from '~/assets/imgaes/why/why6.svg'
import why7ImageSrc from '~/assets/imgaes/why/why7.svg'
import why9ImageSrc from '~/assets/imgaes/why/why9.svg'
import why10ImageSrc from '~/assets/imgaes/why/why10.svg'
// 导入 ECharts
import * as echarts from 'echarts'
// 导入表格组件
import DailyAdImpressionsTable from './DailyAdImpressionsTable.vue'

const activeIndex = ref(0)
let mainChart = null
let donutChart = null
let mainChartMobile = null
let donutChartMobile = null

// 移动端滑动相关
const mobileCardsContainer = ref(null)
const touchStartX = ref(0)
const touchStartY = ref(0)
const isDragging = ref(false)

// 触摸事件处理
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
  touchStartY.value = e.touches[0].clientY
  isDragging.value = false
}

const handleTouchMove = (e) => {
  if (!touchStartX.value || !touchStartY.value) return
  
  const touchEndX = e.touches[0].clientX
  const touchEndY = e.touches[0].clientY
  const diffX = touchStartX.value - touchEndX
  const diffY = touchStartY.value - touchEndY
  
  // 判断是横向滑动
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
    isDragging.value = true
  }
}

const handleTouchEnd = (e) => {
  if (!touchStartX.value || !touchStartY.value) return
  
  const touchEndX = e.changedTouches[0].clientX
  const touchEndY = e.changedTouches[0].clientY
  const diffX = touchStartX.value - touchEndX
  const diffY = touchStartY.value - touchEndY
  
  // 如果是横向滑动且距离足够，切换卡片
  if (isDragging.value && Math.abs(diffX) > 50) {
    if (diffX > 0 && activeIndex.value < cards.length - 1) {
      activeIndex.value++
    } else if (diffX < 0 && activeIndex.value > 0) {
      activeIndex.value--
    }
    
    // 滚动到当前卡片
    nextTick(() => {
      if (mobileCardsContainer.value) {
        const cardWidth = 280 + 16 // 卡片宽度 + gap
        mobileCardsContainer.value.scrollTo({
          left: activeIndex.value * cardWidth,
          behavior: 'smooth'
        })
      }
    })
  }
  
  touchStartX.value = 0
  touchStartY.value = 0
  isDragging.value = false
}

const cards = [
  {
    title: '精准定位目标受众!',
    description: '了解你的受众是关键,能够精准定位他们才是你的营销活动和公司取得成功的关键因素!'
  },
  {
    title: '流量购买机会!',
    description: '以极低的价格获得海量优质流量。广告商可以放心,使用T1绝不会超出预设的预算限额。'
  },
  {
    title: '综合统计与分析!',
    description: '借助我们先进的分析报告工具,您可以清晰了解整体营销绩效以及各个营销活动的效率。轻松衡量您的增长和业绩,从而专注于触达更广泛的目标受众。'
  },
  {
    title: '人口统计数据!',
    description: '精准定位目标国家、地区、城市和人群,探索触达特定受众的最佳时间和地点。T1 提供海量流量,其中大部分来自优质国家,并覆盖所有相关人群。'
  }
]

// 轮播图内容 - 每个卡片对应一个轮播页，每页8个小卡片
const slides = [
  // 第一页（对应第一个卡片）
  [

  ],
  // 第二页（对应第二个卡片）
  [

  ],
  // 第三页（对应第三个卡片）
  [
  

  ],
  // 第四页（对应第四个卡片）
  [
  

  ]
]

// 表格数据 - 可以后续填充真实数据
const tableData = ref({
  left: [
    { impressions: 31879, clicks: '', ctr: '0.28545', value: null },
    { impressions: 404821, clicks: 701, ctr: '0.17316', value: 'green' },
    { impressions: 245205, clicks: 1391, ctr: '0.56728', value: 'gray' },
    { impressions: 202359, clicks: 925, ctr: '0.45711', value: 'gray' },
    { impressions: 884739, clicks: 848, ctr: '0.09585', value: 'green' }
  ],
  middle: [
    { impressions: 1768076, clicks: 5429, ctr: '0.30706', value: 'green' },
    { impressions: 15194, clicks: 102, ctr: '0.67132', value: 'gray' },
    { impressions: 1368141, clicks: 3114, ctr: '0.22761', value: 'green' },
    { impressions: 50016, clicks: 145, ctr: '0.28991', value: 'gray' },
    { impressions: 2908253, clicks: 9428, ctr: '0.32418', value: 'green' }
  ],
  right: [
    { impressions: 31879, clicks: 91, ctr: '0.42221', value: 'green' },
    { impressions: 404821, clicks: 701, ctr: '0.20188', value: 'green' },
    { impressions: 500557, clicks: 781, ctr: '0.15602', value: 'green' },
    { impressions: 750483, clicks: 2570, ctr: '0.34244', value: 'green' }
  ]
})

// 初始化图表
const initCharts = () => {
  if (activeIndex.value === 2) {
    // 桌面端：初始化主图表（柱状图+折线图）
    const chartEl = document.getElementById('main-chart-container')
    if (chartEl && chartEl.offsetWidth > 0) {
      if (mainChart) {
        mainChart.dispose()
      }
      mainChart = echarts.init(chartEl)
      const option = {
        grid: {
          left: '1%',
          right: '1%',
          top: '15%',
          bottom: '1%'
        },
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8'],
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel: {
            color: '#666'
          }
        },
        yAxis: {
          type: 'value',
          max: 1000000,
          interval: 250000,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel: {
            color: '#666',
            formatter: (value) => {
              if (value === 0) return '0'
              if (value === 250000) return '250000'
              if (value === 500000) return '500000'
              if (value === 750000) return '750000'
              if (value === 1000000) return '000000'
              return value.toString()
            }
          },
          splitLine: {
            lineStyle: {
              color: '#f0f0f0'
            }
          }
        },
        series: [
          {
            name: 'Bar',
            type: 'bar',
            data: [5000, 400000, 250000, 200000, 800000, 550000, 650000, 780000],
            itemStyle: {
              color: '#B1D3FF'
            },
            barWidth: '60%'
          },
          {
            name: 'Line',
            type: 'line',
            data: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
            lineStyle: {
              width: 2,
              color: '#FF3F00'
            },
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#FF3F00',
              borderColor: '#FF3F00',
              borderWidth: 2
            }
          }
        ],
        tooltip: {
          trigger: 'axis'
        }
      }
      mainChart.setOption(option)
    }

    // 移动端：初始化主图表
    const chartElMobile = document.getElementById('main-chart-container-mobile')
    if (chartElMobile && chartElMobile.offsetWidth > 0 && chartElMobile.offsetHeight > 0) {
      if (mainChartMobile) {
        mainChartMobile.dispose()
        mainChartMobile = null
      }
      mainChartMobile = echarts.init(chartElMobile)
      const optionMobile = {
        grid: {
          left: '5%',
          right: '5%',
          top: '10%',
          bottom: '5%'
        },
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8'],
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel: {
            color: '#666',
            fontSize: 8
          }
        },
        yAxis: {
          type: 'value',
          max: 1000000,
          interval: 250000,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel: {
            color: '#666',
            fontSize: 8,
            formatter: (value) => {
              if (value === 0) return '0'
              if (value === 250000) return '250K'
              if (value === 500000) return '500K'
              if (value === 750000) return '750K'
              if (value === 1000000) return '1M'
              return value.toString()
            }
          },
          splitLine: {
            lineStyle: {
              color: '#f0f0f0'
            }
          }
        },
        series: [
          {
            name: 'Bar',
            type: 'bar',
            data: [5000, 400000, 250000, 200000, 800000, 550000, 650000, 780000],
            itemStyle: {
              color: '#B1D3FF'
            },
            barWidth: '60%'
          },
          {
            name: 'Line',
            type: 'line',
            data: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
            lineStyle: {
              width: 2,
              color: '#FF3F00'
            },
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              color: '#FF3F00',
              borderColor: '#FF3F00',
              borderWidth: 2
            }
          }
        ],
        tooltip: {
          trigger: 'axis'
        }
      }
      mainChartMobile.setOption(optionMobile)
    }

    // 桌面端：初始化环形图
    const donutEl = document.getElementById('donut-chart-container')
    if (donutEl && donutEl.offsetWidth > 0) {
      if (donutChart) {
        donutChart.dispose()
      }
      donutChart = echarts.init(donutEl)
      const donutOption = {
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 0
            },
            label: {
              show: false
            },
            data: [
              { value: 70, itemStyle: { color: '#3A82F9' } },
              { value: 30, itemStyle: { color: '#E5E7EB' } }
            ]
          }
        ]
      }
      donutChart.setOption(donutOption)
    }

    // 移动端：初始化环形图
    const donutElMobile = document.getElementById('donut-chart-container-mobile')
    if (donutElMobile && donutElMobile.offsetWidth > 0) {
      if (donutChartMobile) {
        donutChartMobile.dispose()
      }
      donutChartMobile = echarts.init(donutElMobile)
      const donutOptionMobile = {
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 0
            },
            label: {
              show: false
            },
            data: [
              { value: 70, itemStyle: { color: '#3A82F9' } },
              { value: 30, itemStyle: { color: '#E5E7EB' } }
            ]
          }
        ]
      }
      donutChartMobile.setOption(donutOptionMobile)
    }
  }
}

// 监听 activeIndex 变化，重新初始化图表
watch(activeIndex, (newIndex) => {
  if (newIndex === 2) {
    nextTick(() => {
      setTimeout(() => {
        initCharts()
        // 移动端图表可能需要额外延迟
        setTimeout(() => {
          if (mainChartMobile) {
            mainChartMobile.resize()
          }
          if (donutChartMobile) {
            donutChartMobile.resize()
          }
        }, 200)
      }, 150)
    })
  } else {
    // 切换到其他页面时销毁图表
    if (mainChart) {
      mainChart.dispose()
      mainChart = null
    }
    if (donutChart) {
      donutChart.dispose()
      donutChart = null
    }
    if (mainChartMobile) {
      mainChartMobile.dispose()
      mainChartMobile = null
    }
    if (donutChartMobile) {
      donutChartMobile.dispose()
      donutChartMobile = null
    }
  }
  
  // 移动端：滚动到当前卡片
  if (mobileCardsContainer.value) {
    nextTick(() => {
      const cardWidth = 280 + 16 // 卡片宽度 + gap
      mobileCardsContainer.value.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      })
    })
  }
})

// 窗口大小变化时调整图表
const handleResize = () => {
  if (activeIndex.value === 2) {
    if (mainChart) {
      mainChart.resize()
    }
    if (donutChart) {
      donutChart.resize()
    }
    if (mainChartMobile) {
      mainChartMobile.resize()
    }
    if (donutChartMobile) {
      donutChartMobile.resize()
    }
  }
}

// 自动轮播（可选）
onMounted(() => {
  // 监听窗口大小变化
  window.addEventListener('resize', handleResize)
  // 初始化移动端图表
  if (activeIndex.value === 2) {
    nextTick(() => {
      setTimeout(() => {
        initCharts()
        // 移动端图表可能需要额外延迟
        setTimeout(() => {
          if (mainChartMobile) {
            mainChartMobile.resize()
          }
          if (donutChartMobile) {
            donutChartMobile.resize()
          }
        }, 200)
      }, 150)
    })
  }
})

onUnmounted(() => {
  if (mainChart) {
    mainChart.dispose()
    mainChart = null
  }
  if (donutChart) {
    donutChart.dispose()
    donutChart = null
  }
  if (mainChartMobile) {
    mainChartMobile.dispose()
    mainChartMobile = null
  }
  if (donutChartMobile) {
    donutChartMobile.dispose()
    donutChartMobile = null
  }
  window.removeEventListener('resize', handleResize)
})
</script>

