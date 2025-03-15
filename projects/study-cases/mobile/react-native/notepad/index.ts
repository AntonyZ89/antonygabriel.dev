import html_en from './html_en'
import html_pt from './html_pt'
import html_es from './html_es'
import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'notepad',
  description: 'Um aplicativo para criação de notas',
  url: {
    github: 'https://github.com/AntonyZ89/NotePad-app',
  },
  images: [
    '/images/note-pad/app.gif',
    '/images/note-pad/ColorPicker.gif',
    '/images/note-pad/HomeScreen.png',
    '/images/note-pad/NoteListScreen.png',
    '/images/note-pad/NoteScreen.gif',
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
