<template>
  <div>
    <div
      class="w-full relative h-[380px] md:h-[540px] bg-[url(~/assets/imgaes/contact/m-banner.jpg)] sm:bg-[url(~/assets/imgaes/contact/banner.webp)] bg-cover bg-center"
    >
      <div class="max-w-7xl mx-auto relative h-[100%]">
        <div class="absolute left-0 top-[50%] transform translate-y-[-50%]">
          <div class="p-8 sm:p-15">
            <h1 class="text-[36px] md:text-[80px] leading-[56px] md:leading-[110px] font-bold text-white mb-6 md:mb-8">
              联系我们
            </h1>
            <div class="w-[90px] md:w-[148px] h-[1px] bg-white mb-8"></div>
            <p class="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] text-white mb-4">我们非常乐意<br/>帮助您超越广告目标！</p>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="prose max-w-none">
        <div class="mt-8">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 px-10 sm:px-18">
            <!-- <div class="flex items-start space-x-3">
              <div
                class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
              >
                <img :src="CallIconSrc" alt="call-icon"/>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900">致电给我们</h3>
                <p class="mt-1 text-gray-600">+44(20)4577-0610</p>
              </div>
            </div> -->
            <div class="flex items-start space-x-3">
              <div
                class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
              >
                <img :src="EditIconSrc" alt="edit-icon" />
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900">商务合作</h3>
                <p class="mt-1 text-gray-600">立即联系广告经理</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div
                class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
              >
                <img :src="EmailIconSrc" alt="email-icon" />
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900">
                  发送邮件给我们
                </h3>
                <p class="mt-1 text-[#3A82F9]">T1t1adx@gmail.com</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div>
                <button
                  class="mt-1 bg-blue-600 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors"
                >
                  <img :src="SendIconSrc" alt="send-icon" />
                  <a
                    href="tg://resolve?domain=@t1t1_com_01"
                    class="font-pingfang font-normal tracking-[0px] text-[20px] leading-[30px] ml-[18.5px]"
                  >
                    发送消息
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO 配置
useHead({
  title: "联系我们 - T1",
  meta: [{ name: "description", content: "联系我们，获取更多信息" }],
});

import CallIconSrc from "~/assets/imgaes/contact/call-icon.svg";
import EmailIconSrc from "~/assets/imgaes/contact/email-icon.svg";
import EditIconSrc from "~/assets/imgaes/contact/edit-icon.svg";
import SendIconSrc from "~/assets/imgaes/contact/send-icon.svg";
</script>

