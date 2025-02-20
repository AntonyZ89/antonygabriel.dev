import musicPlayer from './music-player'
import notepad from './notepad'
import bookStore from './book-store'
import type { Project } from '~/types'

export default {
  type: 'folder',
  name: 'react-native',
  items: [musicPlayer, notepad, bookStore],
} satisfies Project
