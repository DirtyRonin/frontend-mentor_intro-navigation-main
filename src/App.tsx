import { GlobalUiContextProvider } from './components/context-providers'
import { AppHeader } from './components/app-header'
import { LandingPage } from './pages'
import { TransparentBackground } from './components/transparent-background'
import { Modal } from './components/modal'
import { MobileNavigation } from './components/navigation'

function App() {
  return (
    <GlobalUiContextProvider>
      <div className='relative bg-almost-white w-mobile h-mobile lg:h-desktop lg:w-full '>
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
          <div className='flex justify-center'>
            <div className='max-w-[1024px]'>
              <LandingPage />
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </GlobalUiContextProvider>
  )
}

export default App
