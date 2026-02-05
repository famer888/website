<template>
  <img
    v-if="src"
    :src="src"
    :alt="altText"
    v-bind="$attrs"
  />
  <span
    v-else
    class="inline-block text-[12px] leading-[16px] text-[#A2A3A5]"
    v-bind="$attrs"
  >
    {{ altText }}
  </span>
</template>

<script setup>
defineOptions({ inheritAttrs: false })

const props = defineProps({
  /**
   * svg 文件名（不带扩展名），例如：advertiser-svg8
   */
  name: {
    type: String,
    required: true
  },
  /**
   * 可选：用于无障碍/占位显示的 alt 文本
   */
  alt: {
    type: String,
    default: ''
  }
})

// 将 assets/svg 下的所有 svg 预加载成 url 映射
// keys 类似：'../assets/svg/advertiser-svg8.svg'
const svgModules = import.meta.glob('../assets/svg/**/*.svg', {
  eager: true,
  import: 'default'
})

const altText = computed(() => props.alt || props.name)

const src = computed(() => {
  const name = props.name.trim()
  if (!name) return ''

  const targetSuffix = `/assets/svg/${name}.svg`

  // 兼容不同 key 形式：只要 path 以 /assets/svg/<name>.svg 结尾即可
  const matchKey = Object.keys(svgModules).find((k) => k.replaceAll('\\', '/').endsWith(targetSuffix))
  if (!matchKey) return ''

  return svgModules[matchKey]
})
</script>


