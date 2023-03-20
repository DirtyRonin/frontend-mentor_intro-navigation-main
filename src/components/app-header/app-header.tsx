import { useGlobalUiContext } from '../../hooks/use-global-ui-context'
import { urlWrapper } from '../../utils/url-wrapper'
import { DesktopNavigation } from '../navigation/'

export function AppHeader() {
  const { toggleMobileNavigationVisibility, screenSize } = useGlobalUiContext()

  return (
    <div className='flex lg:w-full lg:grid lg:grid-cols-[100px,1fr,1fr] justify-between lg:justify-start lg:gap-10 py-[25px] px-4 lg:py-[32px] lg:px-9'>
      <img alt='' src={urlWrapper('logo.svg')} />
      {screenSize === 'desktop' ? (
        <>
          <div className=''>
            <DesktopNavigation />
          </div>
          <div className='flex justify-end '>
            <div className='flex text-medium-gray text-[.8rem] gap-8'>
              <button className='active:text-almost-black'>Login</button>
              <button className='py-2 px-4 border-2 border-medium-gray rounded-xl active:text-almost-black'>
                Register
              </button>
            </div>
          </div>
        </>
      ) : screenSize === 'mobile' ? (
        <button
          className='lg:hidden'
          onClick={toggleMobileNavigationVisibility}>
          <img className='h-4 w-7' alt='' src={urlWrapper('icon-menu.svg')} />
        </button>
      ) : null}
    </div>
  )
}
