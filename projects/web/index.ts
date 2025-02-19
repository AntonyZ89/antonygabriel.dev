// import react from './react'
import vue from './vue'
import type { Project } from '~/types'

export default [
  {
    id: 10,
    type: 'folder',
    name: 'vue',
    items: vue,
  },
] satisfies Project[]
