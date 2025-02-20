import studyCases from './study-cases'
import sideProjects from './side-projects'
import type { Project } from '~/types'

export default [
  {
    type: 'folder',
    name: 'study-cases',
    items: studyCases,
  },
  {
    type: 'folder',
    name: 'side-projects',
    items: sideProjects,
  },
] satisfies Project[]
