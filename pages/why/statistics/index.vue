<template>
  <div class="min-h-screen bg-white">
    <!-- 上半部分：蓝色背景区域 -->
    <div
      class="relative overflow-hidden pt-[48px] pb-[66px] md:py-[136px]"
      style="
        background: linear-gradient(to bottom right, #3966c9, #3c40c6, #2e83b9);
      "
    >
      <div
        class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center md:items-center"
      >
        <!-- 响应式布局 -->
        <div
          class="w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-center"
        >
          <!-- 左侧：文字内容 -->
          <div class="w-full md:flex-[0.60] text-white text-left px-[5px]">
            <h1
              class="font-pingfang font-medium tracking-[0px] text-[36px] leading-[56px] md:text-[64px] md:leading-[96px]"
            >
              T1 Ads数字
            </h1>
            <div
              class="hidden md:block w-[90px] h-px bg-white mt-[24px] mb-0"
            ></div>
            <p
              class="font-pingfang font-medium tracking-[0px] text-[16px] leading-[24px] md:text-[24px] md:leading-[36px] mt-[24px] mb-[18px] md:my-6"
            >
              高价值流量就是付费流量。
            </p>
            <div
              class="text-white/75 md:text-white md:w-[350px] font-pingfang font-normal md:font-medium tracking-[0px] text-[14px] leading-[20px] md:text-[18px] md:leading-[28px]"
            >
              <div>
                我们的网络访客遍布全球;超过75%的访客来自中国、北美和欧洲的一线流量国家。
              </div>
              <div>我们在亚洲也拥有相当大的市场份额。</div>
            </div>
          </div>

          <!-- 右侧：两个数据圆圈容器 -->
          <div
            class="w-full md:flex-1 flex flex-col md:flex-row gap-6 md:gap-12 items-center md:justify-end mt-6 md:mt-0"
          >
            <!-- 中间：数据圆圈1 -->
            <div
              class="relative w-[335px] h-[335px] md:w-[320px] md:h-[320px] flex items-center justify-center"
            >
              <img
                :src="statistics3ImageSrc"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <div class="relative z-10 text-center">
                <div
                  class="text-[#3A82F9] mb-1"
                  style="
                    font-family: DINPro;
                    font-weight: 700;
                    font-size: 72px;
                    line-height: 72px;
                    letter-spacing: 0px;
                  "
                >
                  103
                </div>
                <div
                  class="text-[#3A82F9]"
                  style="
                    font-family: PingFang SC;
                    font-weight: 500;
                    font-size: 26px;
                    line-height: 26px;
                    letter-spacing: 0px;
                  "
                >
                  百万
                </div>
                <div
                  class="text-[#062E57] mt-2"
                  style="
                    font-family: PingFang SC;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 22px;
                    letter-spacing: 0px;
                  "
                >
                  每日访客
                </div>
              </div>
            </div>

            <!-- 右边：数据圆圈2 -->
            <div
              class="relative w-[335px] h-[335px] md:w-[320px] md:h-[320px] flex items-center justify-center"
            >
              <img
                :src="statistics3ImageSrc"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <div class="relative z-10 text-center">
                <div
                  class="text-[#3A82F9] mb-1"
                  style="
                    font-family: DINPro;
                    font-weight: 700;
                    font-size: 72px;
                    line-height: 72px;
                    letter-spacing: 0px;
                  "
                >
                  1.2
                </div>
                <div
                  class="text-[#3A82F9]"
                  style="
                    font-family: PingFang SC;
                    font-weight: 500;
                    font-size: 26px;
                    line-height: 26px;
                    letter-spacing: 0px;
                  "
                >
                  十亿
                </div>
                <div
                  class="text-[#062E57] mt-2"
                  style="
                    font-family: PingFang SC;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 22px;
                    letter-spacing: 0px;
                  "
                >
                  每日印象
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 性别和年龄分布 -->
    <div class="bg-white py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- PC模式：使用 statistics5.svg -->
        <div class="hidden md:flex items-center justify-center">
          <img
            :src="statistics5ImageSrc"
            alt="性别和年龄分布"
            class="w-full max-w-4xl h-auto"
          />
        </div>

        <!-- 移动端：左右布局 -->
        <div class="flex flex-col md:hidden gap-8 items-center">
          <!-- 左侧：性别分布 -->
          <div class="flex flex-col gap-6 w-full items-center">
            <div class="flex items-center gap-4 mt-[50px]">
              <img
                :src="statistics1ImageSrc"
                alt="男性"
                class="w-28 h-28 flex-shrink-0"
              />
              <div>
                <div
                  class="text-[#626671] font-pingfang font-normal tracking-[0px] text-[18px] leading-[26px] md:text-[32px] md:leading-[48px]"
                >
                  男性
                </div>
                <div class="text-[#3A82F9] font-bold flex items-baseline">
                  <span class="text-6xl">68</span
                  ><span class="text-3xl">%</span>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-4 mt-[20px]">
              <img
                :src="statistics2ImageSrc"
                alt="女性"
                class="w-28 h-28 flex-shrink-0"
              />
              <div>
                <div
                  class="text-[#626671] font-pingfang font-normal tracking-[0px] text-[18px] leading-[26px] md:text-[32px] md:leading-[48px]"
                >
                  女性
                </div>
                <div class="text-[#F5729D] font-bold flex items-baseline">
                  <span class="text-6xl">32</span
                  ><span class="text-3xl">%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 横线分隔 -->
          <div class="w-full border-t border-gray-300 my-4"></div>

          <!-- 右侧：年龄分布 -->
          <div class="flex flex-col items-center justify-center gap-4">
            <img
              :src="statistics14ImageSrc"
              alt="年龄分布"
              class="w-full max-w-[280px] h-auto"
            />
            <img
              :src="statistics15ImageSrc"
              alt="年龄分布"
              class="w-full max-w-md h-auto mt-[20px]"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 中间部分：轻松触达目标受众 -->
    <div class="bg-white py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-[#171A1D] md:text-[#626671] md:text-center mb-4 md:mb-6 font-pingfang font-medium tracking-[0px] text-[32px] leading-[48px] md:text-[56px] md:leading-[96px]"
        >
          轻松触达目标受众
        </h2>
        <div
          class="text-[#93959C] text-justify md:text-center mx-auto mb-8 md:mb-[60px] font-pingfang font-normal tracking-[0px] text-[16px] leading-[24px] md:text-[18px] md:leading-[26px]"
        >
          <div>T1提供覆盖各种地区和设备的多种定向功能。</div>
          <div>
            借助我们的自动优化算法,我们能够运用成熟的定向技术,帮助您发现、定位并优化最能提升品牌转化率的受众群体。
          </div>
        </div>

        <!-- 国家流量数据图片 -->
        <div class="flex flex-col md:flex-row gap-6 md:gap-8 max-w-5xl mx-auto">
          <!-- 左侧图片 -->
          <div class="flex-1">
            <img
              :src="statistics6ImageSrc"
              alt="国家流量数据"
              class="w-full h-auto"
            />
          </div>

          <!-- 右侧图片 -->
          <div class="flex-1">
            <img
              :src="statistics7ImageSrc"
              alt="国家流量数据"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 下半部分：热门垂直行业 -->
    <div class="bg-white py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-[#171A1D] md:text-[#626671] text-left md:text-center mb-8 font-pingfang font-medium tracking-[0px] text-[32px] leading-[48px] md:text-[56px] md:leading-[96px]"
        >
          我们网络上推广的热门垂直行业
        </h2>

        <!-- 行业图标网格 -->
        <!-- 移动端：包含"还有更多......"的网格 -->
        <div
          class="grid grid-cols-2 gap-x-[76px] gap-y-[32px] md:gap-16 max-w-4xl mx-auto mb-8 mt-[50px] md:hidden"
        >
          <div
            v-for="(industry, index) in industriesForMobile"
            :key="index"
            class="flex flex-col items-center justify-center"
          >
            <img
              v-if="!industry.isText"
              :src="industry.icon"
              :alt="industry.name"
              class="w-full max-w-[100px] h-auto"
            />
            <p
              v-else
              class="text-[#626671] block md:hidden text-center mt-[50px] font-pingfang font-normal md:font-medium text-[14px] md:text-[24px] leading-[28px] md:leading-[36px] tracking-[0px]"
            >
              {{ industry.text }}
            </p>
          </div>
        </div>

        <!-- PC端：不包含"还有更多......"的网格 -->
        <div
          class="hidden md:grid grid-cols-3 gap-16 max-w-4xl mx-auto mb-8 mt-[50px]"
        >
          <div
            v-for="(industry, index) in industriesForPC"
            :key="index"
            class="flex flex-col items-center"
          >
            <img
              :src="industry.icon"
              :alt="industry.name"
              class="w-full max-w-[100px] h-auto"
            />
          </div>
        </div>

        <!-- 还有更多文字（仅PC端，移动端在网格内显示） -->
        <p
          class="hidden md:block text-[#626671] text-center mt-[50px] font-pingfang font-medium text-[24px] leading-[36px] tracking-[0px]"
        >
          还有更多......
        </p>

        <!-- 分隔线 -->
        <div class="border-t border-gray-300 my-8 mt-[100px]"></div>

        <!-- 免责声明 -->
        <p class="text-sm text-[#93959C] text-center max-w-3xl mx-auto">
          *免责声明:这些统计数据基于我们发布商网络的累计数据。
        </p>
      </div>
    </div>

    <!-- 联系我们部分 -->
    <ContactSection />

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
// 导入图片
import ContactSection from "@/components/ContactSection.vue";
import statistics1ImageSrc from "~/assets/imgaes/why/statistics1.svg";
import statistics2ImageSrc from "~/assets/imgaes/why/statistics2.svg";
import statistics3ImageSrc from "~/assets/imgaes/why/statistics3.webp";
import statistics4ImageSrc from "~/assets/imgaes/why/statistics4.svg";
import statistics5ImageSrc from "~/assets/imgaes/why/statistics5.svg";
import statistics6ImageSrc from "~/assets/imgaes/why/statistics6.png";
import statistics7ImageSrc from "~/assets/imgaes/why/statistics7.png";
import statistics9ImageSrc from "~/assets/imgaes/why/statistics9.svg";
import statistics10ImageSrc from "~/assets/imgaes/why/statistics10.svg";
import statistics11ImageSrc from "~/assets/imgaes/why/statistics11.svg";
import statistics12ImageSrc from "~/assets/imgaes/why/statistics12.svg";
import statistics13ImageSrc from "~/assets/imgaes/why/statistics13.svg";
import statistics14ImageSrc from "~/assets/imgaes/why/statistics14.svg";
import statistics15ImageSrc from "~/assets/imgaes/why/statistics15.svg";

// 行业数据
const industriesForPC = [
  { name: "博彩", icon: statistics9ImageSrc },
  { name: "化妆品", icon: statistics10ImageSrc },
  { name: "游戏", icon: statistics11ImageSrc },
  { name: "约会", icon: statistics12ImageSrc },
  { name: "web3", icon: statistics13ImageSrc },
];

const industriesForMobile = [
  { name: "博彩", icon: statistics9ImageSrc },
  { name: "化妆品", icon: statistics10ImageSrc },
  { name: "游戏", icon: statistics11ImageSrc },
  { name: "约会", icon: statistics12ImageSrc },
  { name: "web3", icon: statistics13ImageSrc },
  { isText: true, text: "还有更多......" },
];

// SEO 配置
useHead({
  title: "数据统计 - T1",
  meta: [{ name: "description", content: "查看我们的数据统计和业绩表现" }],
});
</script>
