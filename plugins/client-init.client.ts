// 客户端初始化插件 - 确保 Vue 应用正确 hydration
export default defineNuxtPlugin(() => {
  if (process.client) {
    // 确保在客户端正确初始化
    console.log('Client-side hydration initialized')
  }
})

