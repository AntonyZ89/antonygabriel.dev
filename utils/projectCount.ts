import type { Project } from '~/types'

export default function count(project: Project): number {
  if (project.type === 'folder') {
    return project.items.reduce((acc, project) => acc + count(project), 0)
  }
  return 1
}
