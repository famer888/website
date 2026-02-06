<template>
  <div class="min-h-screen bg-white">
    <!-- 页面内容 -->
    <div
      class="w-full relative h-[255px] sm:h-[540px] bg-[url(~/assets/imgaes/help/m-banner.jpg)] sm:bg-[url(~/assets/imgaes/help/banner.jpg)] bg-cover bg-center"
    >
      <div class="max-w-7xl mx-auto">
        <div
          class="px-[30px] pt-[30px] sm:pt-[100px] sm:px-[120px] mx-auto flex flex-col justify-start sm:justify-center text-white sm:text-center"
        >
          <div class="text-[36px] sm:text-[64px] font-bold">常见问题解答</div>
          <div class="sm:my-0 sm:h-0 my-8 h-[1px] bg-white w-[90px]"></div>
          <div class="text-[18px] sm:mt-8">您有问题，我们有答案!</div>
          <div
            class="bg-white p-[18px] rounded-[36px] flex gap-2 items-center text-[#93959C] mt-[50px] sm:mt-20 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]"
          >
            <input
              class="border-0 p-0 outline-none"
              type="text"
              placeholder="请搜索我们的常见问题解答或者选择以下类别"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="prose max-w-none">
        <!-- 这里可以添加业务内容 -->
        <div class="mt-8">
          <!-- tab -->
          <div
            class="grid sm:flex sm:gap-20 grid-cols-3 sm:justify-start justify-center text-[#626671] text-[16px] sm:text-[32px] text-center sm:text-start"
          >
            <template v-for="tab in tabs" :key="tab.id">
              <div
                class="cursor-pointer relative"
                @click="handleTabClick(tab.id)"
              >
                <span>{{ tab.name }}</span>
                <label
                  v-if="activeTab === tab.id"
                  class="absolute bottom-[-10px] sm:bottom-[-15px] left-[50%] transform translate-x-[-50%] w-[25px] sm:w-[100px] h-[3px] sm:h-[4px] bg-[#3982F9]"
                ></label>
              </div>
            </template>
          </div>

          <!-- 展开文本内容 -->
          <div class="mt-5 sm:mt-20">
            <div v-for="info in informations" :key="info.key" @click="handleInfoClick(info.key)">
              <div
                class="flex py-4 sm:py-8 justify-between items-center border-b-[1px] border-[#3A82F9]"
              >
                <span class="text-[16px] sm:text-[24px]">{{ info.title }}</span>
                <img :src="infoActive === info.key ? ArrowUpSrc : ArrowDownSrc" alt="" class="w-[14px] sm:w-[32px]" />
              </div>
              <div v-if="infoActive === info.key" class="my-4 p-4 bg-[#F4F5F9]">
                <div class="text-[14px] text-[#626671] sm:min-h-[150px]">
                  {{ info.content }}
                </div>
              </div>
            </div>
          </div>

          <!-- 联系客服 -->
          <div class="mt-5 sm:mt-10">
            <div class="flex flex-col py-10 bg-[#F4F5F9] justify-center">
              <div class="text-center">这是否解答了您的问题？</div>
              <div class="flex mt-3 gap-2 items-center justify-center">
                <img :src="Emo1Src" alt="" class="w-[32px]" />
                <img :src="Emo2Src" alt="" class="w-[32px]" />
                <img :src="Emo3Src" alt="" class="w-[32px]" />
              </div>
            </div>
            <div class="mt-10">
              <div class="w-[160px] h-[40px] sm:w-[250px] sm:h-[60px] mx-auto rounded-[20px] sm:rounded-[30px] bg-[#3A82F9] text-[16px] sm:text-[20px] text-white flex items-center justify-center gap-2 cursor-pointer">
                <img :src="ServiceSrc" alt="" class="w-[10px] sm:w-[15px]"></img>
                <span>联系客服</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowDownSrc from "~/assets/imgaes/help/arrow-d-icon.svg";
import ArrowUpSrc from "~/assets/imgaes/help/arrow-t-icon.svg";
import Emo1Src from "~/assets/imgaes/help/emo1-icon.svg";
import Emo2Src from "~/assets/imgaes/help/emo2-icon.svg";
import Emo3Src from "~/assets/imgaes/help/emo3-icon.svg";
import ServiceSrc from "~/assets/imgaes/help/service-icon.svg";

// SEO 配置
useHead({
  title: "帮助中心 - T1",
  meta: [{ name: "description", content: "获取帮助和支持" }],
});

const activeTab = ref(1);
const infoActive = ref(-1);

const tabs = [
  {
    id: 1,
    name: "一般的",
  },
  {
    id: 2,
    name: "广告商",
  },
  {
    id: 3,
    name: "基本面",
  },
];

const informations = [
  {
    key: 1,
    title: "T1 Ads是什么?",
    content: 'T1Ads是一家广告联盟，负责管理全球一些最大的成人视频网站的横幅广告。TraficJunky采用自助竞价、预付费的广告平台，向广告商提供广告位。'
  },
  {
    key: 2,
    title: "T1 Ads的市场是什么?",
    content: 'T1Ads是一家广告联盟，负责管理全球一些最大的成人视频网站的横幅广告。TraficJunky采用自助竞价、预付费的广告平台，向广告商提供广告位。'
  }
]

const handleTabClick = (tabId) => {
  activeTab.value = tabId;
};

const handleInfoClick = (infoKey) => {
  if(infoActive.value === infoKey) {
    infoActive.value = -1;
  }else {
    infoActive.value = infoKey;
  }
}
</script>
