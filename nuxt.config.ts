// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
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
      title: 'T1 - 在全球顶级网站上投放广告 - 广告联盟 流量变现 - T1T1.com',
      meta: [
        { name: 'description', content: 'T1 - 在全球顶级网站上投放广告，广告联盟，流量变现' },
        { name: 'keywords', content: 'T1, 广告联盟, 流量变现, 全球广告投放, DSP, 移动广告, T1T1.com' },
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
    },
    // Vite 开发服务器代理配置 - 类似 Vue CLI 的 devServer.proxy
    server: {
      proxy: {
        '/api': {
          target: 'https://official.adcs01.top',
          changeOrigin: true,
          secure: true, // 如果是 https，需要设置为 true
          rewrite: (path) => path, // 保持路径不变，/api/userinfo -> https://official.adcs01.top/api/userinfo
        }
      }
    }
  },

  // Nitro 配置 - 启用静态站点生成
  // @ts-ignore - nitro 配置在运行时有效
  nitro: {
    // Nitro 开发代理配置 - 处理服务端渲染时的 API 请求
    devProxy: {
      '/api': {
        target: 'https://official.adcs01.top',
        changeOrigin: true,
        prependPath: true,
      }
    },
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
        '/auth/login',
        '/auth/register',
        '/auth/logout',
        '/admin',
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
      siteUrl: (process as any).env?.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      // 广告主管理后台地址，可通过环境变量 NUXT_PUBLIC_ADMIN_DASHBOARD_URL 配置
      adminDashboardUrl: (process as any).env?.NUXT_PUBLIC_ADMIN_DASHBOARD_URL || '/admin',
      // API 基础地址，可通过环境变量 NUXT_PUBLIC_API_BASE_URL 配置
      // 开发环境：使用相对路径，通过 Vite 代理到 https://official.adcs01.top
      // 生产环境：自动使用当前域名
      // 注意：实际请求时，开发环境会通过 Vite 代理，生产环境使用当前域名
      apiBaseUrl: (process as any).env?.NUXT_PUBLIC_API_BASE_URL || ''
    }
  }
})

