import React from 'react'
import { urlWrapper } from '../../utils/url-wrapper'

interface NavigationNodeProps {
  name: string
  icon?: string
  onClick?: () => void
}

export function NavigationNode({
  name,
  icon,
  onClick,
  children
}: React.PropsWithChildren<NavigationNodeProps>) {
  const [collapsed, setCollapsed] = React.useState(true)

  const hasChildren = () => children !== undefined
  const hasIcon = () => icon !== undefined

  return (
    <div>
      <button
        onClick={
          hasChildren()
            ? () => {
                setCollapsed((prevstate) => !prevstate)
              }
            : onClick
        }
        className='flex gap-4 items-center'>
        {hasIcon() ? (
          <img className='w-auto h-[20px]' alt='' src={icon} />
        ) : null}
        <p className='text-medium-gray text-sm font-semibold active:text-almost-black'>
          {name}
        </p>
        {hasChildren() ? (
          <img
            className='h-[6px] w-[10px]'
            alt=''
            src={urlWrapper(`icon-arrow-${collapsed ? 'down' : 'up'}.svg`)}
          />
        ) : null}
      </button>
      <div
        className={`flex flex-col pl-6 py-5 gap-4 ${
          collapsed ? 'hidden' : 'visible'
        }`}>
        {children}
      </div>
    </div>
  )
}
