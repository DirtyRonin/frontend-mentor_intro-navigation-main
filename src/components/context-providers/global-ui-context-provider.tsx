import React from 'react'
import { GlobalUiContext } from '../../contexts/global-ui-context'
import { useGlobalUi } from '../../hooks/use-global-ui'

export function GlobalUiContextProvider({
  children
}: React.PropsWithChildren<{}>) {
  const {
    state: { showMobileNavigation, breakPointMobileDesign },
    toggleMobileNavigationVisibility
  } = useGlobalUi()

  return (
    <>
      <GlobalUiContext.Provider
        value={{
          showMobileNavigation,
          breakPointMobileDesign,
          toggleMobileNavigationVisibility
        }}>
        {children}
      </GlobalUiContext.Provider>
    </>
  )
}
