import React from 'react'
import ReactDOM from 'react-dom'
import { ChildrenProps } from '../../models/children-props'

const modal = document.getElementById('modal')

export function Modal({ children }: ChildrenProps) {
  const el = document.createElement('div')

  React.useEffect(() => {
    modal?.appendChild(el)

    return () => {
      modal?.removeChild(el)
    }
  }, [])

  return ReactDOM.createPortal(children, el)
}
