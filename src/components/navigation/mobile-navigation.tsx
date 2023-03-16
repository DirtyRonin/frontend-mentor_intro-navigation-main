import { useGlobalUiContext } from '../../hooks/use-global-ui-context'
import { urlWrapper } from '../../utils/url-wrapper'
import './mobile-navigation.css'
import { CreateMenu } from './create-menu'

export function MobileNavigation() {
  const { showMobileNavigation, screenSize, toggleMobileNavigationVisibility } =
    useGlobalUiContext()

  return (
    <>
      {screenSize === 'mobile' ? (
        <div
          className={`absolute position-right bg-almost-white h-mobile w-mobile-navigation z-[1000] ${
            showMobileNavigation ? 'visible' : 'hidden'
          }`}>
          <div className='grid py-[25px] px-4  gap-8'>
            <div className='flex flex-row-reverse'>
              <button onClick={toggleMobileNavigationVisibility}>
                <img
                  className=' h-6 w-6 '
                  alt=''
                  src={urlWrapper('icon-close-menu.svg')}
                />
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <CreateMenu />
              <div className='flex flex-col text-medium-gray text-[.8rem]'>
                <button className='pt-2 pb-3'>Login</button>
                <button className='py-2 border-2 border-medium-gray rounded-xl'>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
