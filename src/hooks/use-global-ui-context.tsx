import React from 'react'
import { GlobalUiContext } from '../contexts/global-ui-context'

export function useGlobalUiContext() {
  const context = React.useContext(GlobalUiContext)

  if (context === undefined)
    throw new Error('MobileNaviagtionContext is used out of its context')

  return context
}
