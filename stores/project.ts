import type { Project } from '~/types'
import projects from '~/projects'

type Store = {
  path: string[]
  projects: Project[]
}

type Getter = {
  selectedProject(arg: Store): Project | null
  previousProject(arg: Store): Project | null
  breadCrumbs(arg: Store): string[]
}

export const useProjectStore = defineStore('project', {
  getters: {
    selectedProject(state: Store) {
      const path = state.path

      if (!path.length) return null

      let aux = state.projects.find(project => project.name === path[0]) || null

      for (let i = 1; i < path.length; i++) {
        aux = (aux?.type === 'folder' && aux.items.find(project => project.name === path[i])) || null

        if (!aux) return null
      }

      return aux
    },
    previousProject(state: Store) {
      const path = state.path
      const selectedProject = this.selectedProject as unknown as ReturnType<typeof this.selectedProject>

      if (!path.length) return null

      if (path.length === 1 && selectedProject?.type === 'file') return null

      let aux = state.projects.find(project => project.name === path[0])

      for (let i = 1; i < path.length; i++) {
        const project = aux?.type === 'folder' && aux.items.find(project => project.name === path[i])

        if (!project) return null

        if (i === path.length - 1 && project.type === 'file')
          break

        aux = project
      }

      return aux!
    },
    breadCrumbs(state: Store) {
      const path = state.path
      const breadCrumbs: string[] = ['projetos']

      if (!path.length) return breadCrumbs

      let aux = state.projects.find(project => project.name === path[0])

      if (aux) {
        breadCrumbs.push(aux.name)
      }

      for (let i = 1; i < path.length; i++) {
        const project = aux?.type === 'folder' && aux.items.find(project => project.name === path[i])

        if (!project) return []

        if (i === path.length - 1 && project.type === 'file')
          break

        breadCrumbs.push(project.name)

        aux = project
      }

      return breadCrumbs
    },
  } satisfies Getter,
  state: (): Store => ({
    path: [],
    projects,
  }),
})
