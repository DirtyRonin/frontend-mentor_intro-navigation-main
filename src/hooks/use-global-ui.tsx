import React from 'react'
import { GlobalUiContextProps } from '../contexts/global-ui-context'
import { useActualWidth } from './use-actual-width'

export function useGlobalUi() {
  const [state, dispatch] = React.useState<GlobalUiContextProps>({
    showMobileNavigation: false,
    breakPointMobileDesign: 900
  })

  const { width } = useActualWidth()

  const autoCloseMobileNavigation = React.useCallback(() => {
    if (!state.showMobileNavigation) return
    if (width < state.breakPointMobileDesign) return

    toggleMobileNavigationVisibility()
  }, [width])

  React.useEffect(() => {
    autoCloseMobileNavigation()
  }, [width])

  const toggleMobileNavigationVisibility = () => {
    dispatch((prevState) => ({
      ...prevState,
      showMobileNavigation: !prevState.showMobileNavigation
    }))
  }

  return { state, toggleMobileNavigationVisibility }
}
