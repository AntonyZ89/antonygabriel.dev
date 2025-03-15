import html_en from './html_en'
import html_pt from './html_pt'
import html_es from './html_es'
import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'book-store',
  description: 'Um aplicativo para comprar livros',
  url: {
    github: 'https://github.com/AntonyZ89/book-store-app',
  },
  images: [
    '/images/book-store/HomeScreen.png',
    '/images/book-store/HomeDrawer.png',
    '/images/book-store/BookListScreen.png',
    '/images/book-store/CartScreen.png',
    '/images/book-store/LoginScreen.png',
  ],
  html: {
    en: html_en,
    pt: html_pt,
    es: html_es,
  },
  technologies: [
    technology.javascript,
    technology.react_native,
    technology.typescript,
  ],
} satisfies Project
