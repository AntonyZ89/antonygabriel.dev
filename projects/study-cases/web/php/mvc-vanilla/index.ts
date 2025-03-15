import html_en from './html_en'
import html_pt from './html_pt'
import html_es from './html_es'
import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'mvc-vanilla',
  description: 'Um aplicativo MVC simples em PHP',
  url: {
    github: 'https://github.com/AntonyZ89/mvc-vanilla',
    website: 'https://devedor.in-development.tk/',
  },
  images: [],
  html: {
    en: html_en,
    pt: html_pt,
    es: html_es,
  },
  technologies: [
    technology.bootstrap,
    technology.css,
    technology.html,
    technology.mysql,
    technology.php,
    technology.phpunit,
  ],
} satisfies Project
