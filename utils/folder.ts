import type { Project } from '~/types'

const getIcon = (project: Project) => {
  if (project.type === 'folder') {
    return '📁'
  }

  // if (project.type === 'file') {
  //   return '📄'
  // }

  return '🛠️'
}

export default {
  getIcon,
}
