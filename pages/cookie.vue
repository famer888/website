<script setup>
// 重定向到 terms 页面的 cookie tab
const route = useRoute()
await navigateTo(`/terms?tab=cookie${route.query ? '&' + new URLSearchParams(route.query).toString() : ''}`)
</script>

