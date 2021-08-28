import { useSelector } from "react-redux"
import { useState } from "react"
import { IntlProvider } from "react-intl"

import LOCALES from "./i18n/locales"
import messages from "./i18n/messages"

import data from "./config/content.json"

import Style from "./styled/root"

import { State } from "./types/store.types"
import { ICursor } from "./types/components.types"

import Helmet from "./components/Helmet"
import Cursor from "./components/Cursor"
import Background from "./components/Background"
import Analytics from "./components/Analytics"

import Header from "./containers/Header"
import Social from "./containers/Social"
import Menu from "./containers/Menu"

import Home from "./pages/Home.page"

import { StyledWrapper } from "./styled/containers"

const App: React.FC = () => {
  const { lang } = useSelector((state: State) => state.app)
  const [menu, setMenu] = useState<boolean>(false)

  const [cursorState, setCursorState] = useState<ICursor>({
    x: 0,
    y: 0,
    status: false,
  })

  const cursorMoveHandler = (e: any) => {
    let isActive = false
    try {
      isActive = e.target.className.includes("cursor")
    } catch (e) {
      isActive = true
    }
    setCursorState({ x: e.clientX, y: e.clientY, status: isActive })
  }

  const menuStatusHandler = (status: boolean) => setMenu(status)

  return (
    <StyledWrapper onMouseMove={cursorMoveHandler}>
      <IntlProvider
        messages={messages[lang]}
        locale={lang}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Style />
        <Helmet
          lang={lang}
          description={data[lang].helmet.description}
          title={data[lang].helmet.title}
          keywords={data[lang].helmet.keywords}
          og={data[lang].helmet.og}
        />

        <Header status={menu} setStatus={menuStatusHandler} />
        <Social items={data["social"]} status={menu} />

        <Home
          title={data[lang].pages.home.title}
          subtitle={data[lang].pages.home.subtitle}
        />

        <Menu status={menu} />
        <Cursor
          x={cursorState.x}
          y={cursorState.y}
          status={cursorState.status}
        />
        <Background />
        <Analytics />
      </IntlProvider>
    </StyledWrapper>
  )
}

export default App
