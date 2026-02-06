<template>
    <div class="bg-white">
      <!-- 页面内容 -->
      <div class="w-full relative h-[540px] sm:h-[380px] bg-[url(~/assets/imgaes/contact/m-banner.jpg)] sm:bg-[url(~/assets/imgaes/contact/banner.jpg)] bg-cover bg-center">
        <div class="max-w-7xl mx-auto relative h-[100%]">
          <div class="absolute left-0 top-[50%] transform translate-y-[-50%]">
            <div class="p-8 sm:p-15">
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">联系我们</h1>
              <div class="w-24 h-[1px] bg-white mb-8"></div>
              <p class="text-xl text-white mb-4">我们非常乐意</p>
              <p class="text-xl text-white">帮助您超越广告目标！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="prose max-w-none">
          <!-- 这里可以添加业务内容 -->
          <div class="mt-8">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 px-10 sm:px-18">
              <div class="flex items-start space-x-3">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
                >
                  <img :src="CallIconSrc" alt="call-icon"></img>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900">致电给我们</h3>
                  <p class="mt-1 text-gray-600">+44(20)4577-0610</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
                >
                  <img :src="EditIconSrc" alt="edit-icon"></img>
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
                  <img :src="EmailIconSrc" alt="email-icon"></img>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900">
                    发送邮件给我们
                  </h3>
                  <p class="mt-1 text-gray-600">support@hilltopads.com</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div>
                  <button
                    class="mt-1 bg-blue-600 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors"
                  >
                    <img :src="SendIconSrc" alt="send-icon"></img>
                    <span>发送消息</span>
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
  import BannerSrc from "~/assets/imgaes/contact/banner.jpg";
  import MBannerSrc from "~/assets/imgaes/contact/m-banner.jpg";
  </script>
  