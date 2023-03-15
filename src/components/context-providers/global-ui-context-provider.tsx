import React from 'react'
import { GlobalUiContext } from '../../contexts/global-ui-context'
import { useGlobalUi } from '../../hooks/use-global-ui'

export function GlobalUiContextProvider({
  children
}: React.PropsWithChildren<{}>) {
  const {
    state: { showMobileNavigation },
    toggleMobileNavigationVisibility
  } = useGlobalUi()

  return (
    <>
      <GlobalUiContext.Provider
        value={{ showMobileNavigation, toggleMobileNavigationVisibility }}>
        {children}
      </GlobalUiContext.Provider>
    </>
  )
}
