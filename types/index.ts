type ProjectBase = {
  name: string
}

export type Project = ProjectBase & ({
  type: 'file'
  description: string
  images: string[]
  html: string | null
  technologies: Technology[]
  url: Partial<{
    github: string
    website: string
  }>
  items?: never
} | {
  type: 'folder'
  items: Project[]
  url?: never
  images?: never
  html?: never
  technologies?: never
  description?: never
})

export type Technology = {
  name: string
  class: string
}
