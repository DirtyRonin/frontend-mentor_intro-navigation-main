import { useGlobalUiContext } from '../../hooks/use-global-ui-context'
import { urlWrapper } from '../../utils/url-wrapper'

export function MobileHeader() {
  const { toggleMobileNavigationVisibility } = useGlobalUiContext()

  return (
    <div className='flex justify-between py-[25px] px-4'>
      <img alt='' src={urlWrapper('logo.svg')} />
      <button onClick={toggleMobileNavigationVisibility}>
        <img className='h-4 w-7' alt='' src={urlWrapper('icon-menu.svg')} />
      </button>
    </div>
  )
}
