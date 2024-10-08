import { RouterState } from "connected-react-router"

export type State = {
  app: AppState
  router: RouterState
}

export interface Action {
  type: string
}

export type AppState = {
  lang: Lang
  cursor: boolean
}

export interface AppAction extends Action {
  lang?: Lang
  cursor?: boolean
}

export type Lang = "ru" | "en"
