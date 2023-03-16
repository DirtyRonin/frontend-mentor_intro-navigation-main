import { Modal } from './components/modal'
import { MobileNavigation } from './components/mobile-navigation'
import { GlobalUiContextProvider } from './components/context-providers'
import { MobileHeader } from './components/mobile-header'
import { LandingPage } from './pages'
import { TransparentBackground } from './components/transparent-background'

function App() {
  return (
    <GlobalUiContextProvider>
      <div className='relative w-mobile h-mobile bg-white '>
        <TransparentBackground />
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
