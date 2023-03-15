import React from 'react'
import IconLogo from './assets/images/logo.svg'
import IconMenu from './assets/images/icon-menu.svg'
import { Modal } from './components/modal'
import { MobileNavigation } from './components/mobile-navigation'
import { urlWrapper } from './utils/url-wrapper'
import { GlobalUiContextProvider } from './components/context-providers'
import { useGlobalUiContext } from './hooks/use-global-ui-context'
import { MobileHeader } from './components/mobile-header'
import { LandingPage } from './pages'

function App() {
  return (
    <GlobalUiContextProvider>
      <div className='relative w-mobile h-mobile bg-white'>
        <header>
          <MobileHeader />
        </header>
        <nav>
          <Modal>
            <MobileNavigation />
          </Modal>
        </nav>
        <main>
          <LandingPage />
        </main>
        <footer></footer>
      </div>
    </GlobalUiContextProvider>
  )
}

export default App
