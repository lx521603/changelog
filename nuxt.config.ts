// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@comark/nuxt',
    '@nuxt/content' 
  ],

  devtools: {
    enabled: true
  },

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      defaultVariants: {
        color: 'neutral'
      }
    }
  },

  runtimeConfig: {
    // 👇 这里改成读取 MY_GITHUB_TOKEN
    githubToken: process.env.MY_GITHUB_TOKEN || ''
  },
  
nitro: {
  prerender: {
    routes: [
      '/'
    ],
    crawlLinks: true
  }
},
  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
