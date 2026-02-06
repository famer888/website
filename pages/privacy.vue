<script setup>
// 重定向到 terms 页面的 privacy tab
const route = useRoute()
await navigateTo(`/terms?tab=privacy${route.query ? '&' + new URLSearchParams(route.query).toString() : ''}`)
</script>

