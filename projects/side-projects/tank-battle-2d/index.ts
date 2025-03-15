import html_en from './html_en'
import html_pt from './html_pt'
import html_es from './html_es'
import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'Tank Battle 2D',
  description: 'tank battle 2d',
  url: {
    website: 'https://tank2d.antonygabriel.dev',
  },
  images: [
    '/images/tank-battle-2d/game.png',
    '/videos/tank-battle-2d/gameplay.mp4',
  ],
  technologies: [
    technology.bun,
    technology.typescript,
    technology.html,
    technology.css,
    technology.javascript,
  ],
  html: {
    en: html_en,
    pt: html_pt,
    es: html_es,
  },
} satisfies Project
