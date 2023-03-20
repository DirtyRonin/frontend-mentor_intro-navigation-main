import React from 'react'
import { useGlobalUiContext } from '../../hooks/use-global-ui-context'
import { urlWrapper } from '../../utils/url-wrapper'

interface NavigationNodeProps {
  name: string
  icon?: string
  subsOrientation?: 'left' | 'right'
}

export function NavigationNode({
  name,
  icon,
  subsOrientation,
  children
}: React.PropsWithChildren<NavigationNodeProps>) {
  const [collapsed, setCollapsed] = React.useState(true)

  const { screenSize } = useGlobalUiContext()

  const hasChildren = () => children !== undefined && children !== null
  const hasIcon = () => icon !== undefined

  const onClick = () => {
    setCollapsed((prevstate) => !prevstate)
  }

  const nodeElement = () => (
    <div className='flex lg:grid lg:grid-cols-[minmax(20px,auto),1fr] gap-4 lg:gap-2 items-center justify-start lg:justify-start '>
      {hasIcon() ? <img className='w-auto h-[20px]' alt='' src={icon} /> : null}
      <p className='text-medium-gray lg:text-left text-sm lg:text-[.8rem] font-semibold lg:font-medium active:text-almost-black'>
        {name}
      </p>
      {hasChildren() ? (
        <img
          className='h-[6px] w-[10px]'
          alt=''
          src={urlWrapper(`icon-arrow-${collapsed ? 'down' : 'up'}.svg`)}
        />
      ) : null}
    </div>
  )

  const dropDown = () => (
    <>
      {screenSize === 'mobile' ? (
        <div
          className={`flex flex-col pl-6 py-5 gap-4 ${
            collapsed ? 'hidden' : 'visible'
          }`}>
          {children}
        </div>
      ) : screenSize === 'desktop' ? (
        <div
          className={`absolute rounded-lg drop-shadow-2xl shadow-almost-black flex flex-col gap-2 pl-5 py-4 bg-almost-white w-[155px]  top-9 ${
            collapsed ? 'hidden' : 'visible'
          } ${
            subsOrientation === 'left'
              ? 'right-0'
              : subsOrientation === 'right'
              ? 'left-0'
              : ''
          }`}>
          {children}
        </div>
      ) : null}
    </>
  )

  return (
    <>
      {hasChildren() ? (
        <button className='relative' onClick={onClick}>
          {nodeElement()}
          {dropDown()}
        </button>
      ) : (
        <a href={`#${name.replace(' ', '-')}`}>{nodeElement()}</a>
      )}
    </>
  )
}
