import html_en from './html_en'
import html_pt from './html_pt'
import html_es from './html_es'
import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'music-player',
  description: 'Um aplicativo para reprodução de músicas',
  url: {
    github: 'https://github.com/AntonyZ89/Music-Player-App',
  },
  images: [
    '/images/music-player/DiscoverTab.png',
    '/images/music-player/FoldersTab.png',
    '/images/music-player/GenresTab.png',
    '/images/music-player/PlayerScreen.png',
    '/images/music-player/TracksTab.png',
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
