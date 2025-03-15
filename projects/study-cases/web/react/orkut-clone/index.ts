import html_en from './html_en'
import html_pt from './html_pt'
import html_es from './html_es'
import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'orkut-clone',
  description: 'Um aplicativo para compartilhar fotos e vídeos',
  url: {
    github: 'https://orkut.in-development.tk/',
  },
  images: [
    '/images/orkut/login.png',
    '/images/orkut/my_profile.png',
    '/images/orkut/friends.png',
    '/images/orkut/forum.png',
    '/images/orkut/community.png',
  ],
  html: {
    en: html_en,
    pt: html_pt,
    es: html_es,
  },
  technologies: [
    technology.nextjs,
    technology.react,
    technology.sass,
    technology.typescript,
  ],
} satisfies Project
