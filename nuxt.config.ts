import process from 'node:process'

const env = process.env

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    'nuxt-security',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    email: env.GMAIL_EMAIL,
    password: env.GMAIL_PASSWORD,
  },
  routeRules: {
    '/api/*': {
      security: {
        rateLimiter: {
          tokensPerInterval: 3,
          interval: 10000,
        },
      },
    },
  },
  compatibilityDate: '2024-11-01',
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
