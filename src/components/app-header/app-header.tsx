import { useGlobalUiContext } from '../../hooks/use-global-ui-context'
import { urlWrapper } from '../../utils/url-wrapper'
import { DesktopNavigation } from '../navigation/'

export function AppHeader() {
  const { toggleMobileNavigationVisibility, screenSize } = useGlobalUiContext()

  return (
    <div className='flex justify-between md:justify-start md:gap-8 py-[25px] px-4'>
      <img alt='' src={urlWrapper('logo.svg')} />
      {screenSize === 'desktop' ? (
        <div>
          <DesktopNavigation />
        </div>
      ) : screenSize === 'mobile' ? (
        <button
          className='md:hidden'
          onClick={toggleMobileNavigationVisibility}>
          <img className='h-4 w-7' alt='' src={urlWrapper('icon-menu.svg')} />
        </button>
      ) : null}
    </div>
  )
}
