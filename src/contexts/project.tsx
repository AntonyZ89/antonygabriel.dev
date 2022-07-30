import { TagEnum } from '@enum'
import React, { createContext, useContext, useState } from 'react'

interface ProjectProviderProps {
  children: React.ReactNode
}

export interface ProjectProps {
  filters: Array<TagEnum>
  setFilters: React.Dispatch<React.SetStateAction<Array<TagEnum>>>

  selected: Array<TagEnum>
  setSelected: React.Dispatch<React.SetStateAction<Array<TagEnum>>>
}

const ProjectContext = createContext({} as ProjectProps)

const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<Array<TagEnum>>([])
  const [selected, setSelected] = useState<Array<TagEnum>>(filters)

  return (
    <ProjectContext.Provider
      value={{
        filters,
        setFilters,

        selected,
        setSelected
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

const useProject = (): ProjectProps => {
  const context = useContext(ProjectContext)

  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider')
  }

  return context
}

export { useProject, ProjectProvider, ProjectContext }
