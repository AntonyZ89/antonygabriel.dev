import html_en from './html_en'
import html_pt from './html_pt'
import html_es from './html_es'
import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'dating-app',
  description: 'Um aplicativo para encontrar um casal',
  url: {
    github: 'https://github.com/AntonyZ89/Delivery-App',
  },
  images: [
    '/images/date-app/login.png',
    '/images/date-app/home.png',
    '/images/date-app/chat.png',
  ],
  html: {
    en: html_en,
    pt: html_pt,
    es: html_es,
  },
  technologies: [
    technology.flutter,
  ],
} satisfies Project
