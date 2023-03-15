import React from 'react'
import { GlobalUiContextProps } from '../contexts/global-ui-context'

export function useGlobalUi() {
  const [state, dispatch] = React.useState<GlobalUiContextProps>({
    showMobileNavigation: false
  })

  const toggleMobileNavigationVisibility = () => {
    dispatch((prevState) => ({
      ...prevState,
      showMobileNavigation: !prevState.showMobileNavigation
    }))
  }

  return { state, toggleMobileNavigationVisibility }
}
