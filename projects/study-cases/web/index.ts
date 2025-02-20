import react from './react'
import php from './php'
import type { Project } from '~/types'

export default [
  {
    type: 'folder',
    name: 'react',
    items: react,
  },
  {
    type: 'folder',
    name: 'php',
    items: php,
  },
] satisfies Project[]
