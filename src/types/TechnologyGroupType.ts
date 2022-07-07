export interface TechnologyGroupType {
  name: string
  columns?: Partial<Record<string, number>>
  list: Array<TechnologyType>
}

export interface TechnologyType {
  name: string
  experience: string
  level: 1 | 2 | 3 | 4 | 5
}
