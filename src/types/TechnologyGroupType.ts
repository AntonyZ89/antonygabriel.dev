export interface TechnologyGroupType {
  name: string
  list: Array<TechnologyType>
}

export interface TechnologyType {
  name: string
  experience: string
  level: 1 | 2 | 3 | 4 | 5
}
