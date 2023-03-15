import React from 'react'

export type GlobalUiContextProps = {
  showMobileNavigation: boolean
}

export type GlobalUiContextActionProps = {
  toggleMobileNavigationVisibility: () => void
}

export type GlobalUiContextState = GlobalUiContextProps &
  GlobalUiContextActionProps

export const GlobalUiContext = React.createContext<
  GlobalUiContextState | undefined
>(undefined)
