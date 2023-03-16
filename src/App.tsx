import { GlobalUiContextProvider } from './components/context-providers'
import { AppHeader } from './components/app-header'
import { LandingPage } from './pages'
import { TransparentBackground } from './components/transparent-background'
import { Modal } from './components/modal'
import { MobileNavigation } from './components/navigation'

function App() {
  return (
    <GlobalUiContextProvider>
      <div className='relative bg-almost-white w-mobile h-mobile md:h-desktop md:w-desktop '>
        <TransparentBackground />
        <header>
          <AppHeader />
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
