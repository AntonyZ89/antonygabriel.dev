import web from './web'
import sideProjects from './side-projects'
import mobile from './mobile'
import type { Project } from '~/types'

export default [
  {
    id: 1,
    type: 'folder',
    name: 'web',
    items: web,
  },
  {
    id: 2,
    type: 'folder',
    name: 'side-projects',
    items: sideProjects,
  },
  {
    id: 3,
    type: 'folder',
    name: 'mobile',
    items: mobile,
  },
] satisfies Project[]
