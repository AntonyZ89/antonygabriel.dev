import web from './web'
import mobile from './mobile'
import type { Project } from '~/types'

export default [
  {
    type: 'folder',
    name: 'web',
    items: web,
  },
  {
    type: 'folder',
    name: 'mobile',
    items: mobile,
  },
] satisfies Project[]
