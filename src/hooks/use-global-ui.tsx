import React from 'react'
import { GlobalUiContextProps } from '../contexts/global-ui-context'
import { useActualWidth } from './use-actual-width'

export function useGlobalUi() {
  const [state, dispatch] = React.useState<GlobalUiContextProps>({
    showMobileNavigation: false,
    breakPointMobileDesign: 1024, //md breakpoint,
    screenSize: 'none'
  })

  const { width } = useActualWidth()

  const toggleScreenSize = React.useCallback(() => {
    const { screenSize, breakPointMobileDesign } = state
    const size: 'desktop' | 'mobile' | 'none' =
      (width || window.innerWidth) < breakPointMobileDesign
        ? 'mobile'
        : 'desktop'

    if (size !== screenSize) dispatch((prev) => ({ ...prev, screenSize: size }))
  }, [width])

  const autoCloseMobileNavigation = React.useCallback(() => {
    const { showMobileNavigation, breakPointMobileDesign } = state

    if (!showMobileNavigation) return
    if (width < breakPointMobileDesign) return

    toggleMobileNavigationVisibility()
  }, [width])

  React.useEffect(() => {
    autoCloseMobileNavigation()
    toggleScreenSize()
  }, [width])

  const toggleMobileNavigationVisibility = () => {
    dispatch((prevState) => ({
      ...prevState,
      showMobileNavigation: !prevState.showMobileNavigation
    }))
  }

  return { state, toggleMobileNavigationVisibility }
}
