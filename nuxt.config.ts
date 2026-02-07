// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  // SEO 配置
  app: {
    // 确保构建资源路径正确 - 使用 /nuxt/ 匹配实际请求路径
    buildAssetsDir: '/nuxt/',
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '官网',
      meta: [
        { name: 'description', content: '官方网站' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  // SSG 配置（静态站点生成）
  // 注意：SSG 仍然需要 ssr: true，因为需要在构建时进行服务端渲染
  ssr: true,

  // 确保客户端 JavaScript 正确加载和 hydration
  experimental: {
    payloadExtraction: false
  },

  // 确保客户端脚本正确加载
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },

  // Nitro 配置 - 启用静态站点生成
  // @ts-ignore - nitro 配置在运行时有效
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/why/who-are-we',
        '/why/advantages',
        '/why/statistics',
        '/why/mobile-ads',
        '/advertiser/how-to-operate',
        '/advertiser/t1-dsp',
        '/advertiser/target-function',
        '/ad-styles',
        '/contact',
        '/contact/help-center',
        '/contact/quality-guide',
        '/contact/download-media-kit',

      ],
      // 忽略不存在的路由，避免构建失败
      ignore: [
        '/login',
        '/register',
        '/learn-more',
        '/how-it-works',
        '/download-media-kit',
        '/terms',
        '/privacy',
        '/cookie',
        '/sitemap',
        '/brand-protection',
        '/referral'
      ]
    },
    // 确保静态资源正确输出
    publicAssets: [
      {
        baseURL: '/',
        dir: 'public',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      }
    ]
  },

  // 运行时配置
  runtimeConfig: {
    public: {
      siteUrl: (process as any).env?.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  }
})

