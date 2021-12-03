export interface Category {
  id: number
  name: string
  spectators: string
}

export interface Channel {
  id: number
  username: string
  icon: string
  banner: string
  viewers: string
  game: string
  description: string
  preview: string
  online: boolean
}

export interface UserDTO {
  id: number
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface TopicDTO {
  id: number
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface EventDTO {
  id: number
  title: string
  local: string
  description: string
  endAt: string | null
  createdAt: string
  updatedAt: string
}

export interface TopicMessage {
  id: number
  topicId: number
  user: UserDTO
  content: string
  createdAt: string
  updatedAt: string
}

export interface EventMessage {
  id: number
  topicId: number
  user: UserDTO
  content: string
  createdAt: string
  updatedAt: string
}

export interface PollMessage {
  id: number
  topicId: number
  user: UserDTO
  content: string
  createdAt: string
  updatedAt: string
}

export interface PollDTO {
  id: number
  topicId: number
  title: string | null
  description: string | null
  isOpen: boolean
  options: PollOptionDTO[]
  endAt: string | null
  createdAt: string
  updatedAt: string
}

export interface PollOptionDTO {
  id: number
  title: string
  votes: number
  createdAt: string
  updatedAt: string
}

export interface PollVoteDTO {
  id: number
  userId: number
  pollId: number
  optionId: number
  createdAt: string
  updatedAt: string
}
