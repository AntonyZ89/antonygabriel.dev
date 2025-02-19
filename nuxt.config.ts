import process from 'node:process'

const env = process.env

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/eslint', 'nuxt-api-shield', '@nuxt/icon'],
  devtools: { enabled: true },
  runtimeConfig: {
    email: env.GMAIL_EMAIL,
    password: env.GMAIL_PASSWORD,
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    experimental: {
      tasks: true,
    },
    scheduledTasks: {
      '*/1 * * * *': ['shield:clean'],
    },
    storage: {
      shield: {
        driver: 'memory',
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  nuxtApiShield: {
    limit: {
      max: 2,
      duration: 10,
      ban: 10,
    },
    delayOnBan: false,
  },
})

