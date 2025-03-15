import html_en from './html_en'
import html_pt from './html_pt'
import html_es from './html_es'
import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'delivery-app',
  description: 'Um aplicativo para gerenciar a entrega de produtos',
  url: {
    github: 'https://github.com/AntonyZ89/Delivery-App',
  },
  images: [
    '/images/delivery-app/home.png',
    '/images/delivery-app/product.png',
    '/images/delivery-app/order.png',
    '/images/delivery-app/checkout.png',
    '/images/delivery-app/status.png',
    '/images/delivery-app/order-list.png',
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
