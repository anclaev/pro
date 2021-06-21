import { Lang } from './store.types'

export interface IHelmet {
  lang?: Lang
  title?: string
  description?: string
  keywords?: string
  og?: string
}

export interface ICursor {
  x: number
  y: number
}

export interface IBackground {
  opacity?: string
  isPoster?: boolean
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}
