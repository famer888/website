<script setup>
// 重定向到 terms 页面的 sitemap tab
const route = useRoute()
await navigateTo(`/terms?tab=sitemap${route.query ? '&' + new URLSearchParams(route.query).toString() : ''}`)
</script>

