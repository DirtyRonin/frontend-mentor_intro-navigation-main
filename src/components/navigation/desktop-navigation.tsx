import { useGlobalUiContext } from '../../hooks/use-global-ui-context'
import { CreateMenu } from './create-menu'

export function DesktopNavigation() {
  const { screenSize } = useGlobalUiContext()

  return (
    <>
      {screenSize === 'desktop' ? (
        <div className='flex gap-8 items-end'>
          <CreateMenu />
        </div>
      ) : null}
    </>
  )
}
