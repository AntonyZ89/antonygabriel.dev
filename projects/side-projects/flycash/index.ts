import html_en from './html_en'
import html_pt from './html_pt'
import html_es from './html_es'
import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'FlyCash',
  description: 'flycash',
  url: {
    website: 'https://flyca.sh',
  },
  images: [
    '/images/flycash/home.png',
    '/images/flycash/register.png',
    '/images/flycash/blog.png',
  ],
  technologies: [
    technology.typescript,
    technology.vuejs,
    technology.nuxt,
  ],
  html: {
    en: html_en,
    pt: html_pt,
    es: html_es,
  },
} satisfies Project
