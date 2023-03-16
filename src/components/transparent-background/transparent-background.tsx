import { useGlobalUi } from '../../hooks/use-global-ui'
import { useGlobalUiContext } from '../../hooks/use-global-ui-context'

export function TransparentBackground() {
  const { showMobileNavigation } = useGlobalUiContext()

  return (
    <div
      className={`absolute  bg-black/75 w-full h-full  ${
        showMobileNavigation ? 'visible' : 'hidden'
      }`}></div>
  )
}
