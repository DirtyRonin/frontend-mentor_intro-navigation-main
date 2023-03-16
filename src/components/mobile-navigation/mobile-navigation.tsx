import React from 'react'
import { useGlobalUi } from '../../hooks/use-global-ui'
import { useGlobalUiContext } from '../../hooks/use-global-ui-context'
import { urlWrapper } from '../../utils/url-wrapper'
import { NavigationNode } from '../navigation-node'
import './mobile-navigation.css'

export function MobileNavigation() {
  const { showMobileNavigation, toggleMobileNavigationVisibility } =
    useGlobalUiContext()

  return (
    <div
      className={`absolute position-right bg-almost-white h-mobile w-mobile-navigation z-[1000] ${
        showMobileNavigation ? 'visible' : 'hidden'
      }`}>
      <div className='grid p-4 gap-8'>
        <div className='flex flex-row-reverse'>
          <button onClick={toggleMobileNavigationVisibility}>
            <img
              className=' h-6 w-6 '
              alt=''
              src={urlWrapper('icon-close-menu.svg')}
            />
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <NavigationNode name='Features'>
            <NavigationNode
              name='Todo List'
              icon={urlWrapper('icon-todo.svg')}></NavigationNode>
            <NavigationNode
              name='Calendar'
              icon={urlWrapper('icon-calendar.svg')}></NavigationNode>
            <NavigationNode
              name='Reminders'
              icon={urlWrapper('icon-reminders.svg')}></NavigationNode>
            <NavigationNode
              name='Planning'
              icon={urlWrapper('icon-planning.svg')}></NavigationNode>
          </NavigationNode>
          <NavigationNode name='Company'>
            <NavigationNode name='History'></NavigationNode>
            <NavigationNode name='Our Team'></NavigationNode>
            <NavigationNode name='Blog'></NavigationNode>
          </NavigationNode>
          <NavigationNode name='Careers'></NavigationNode>
          <NavigationNode name='About'></NavigationNode>
          <div className='flex flex-col text-medium-gray text-[.8rem]'>
            <button className='pt-2 pb-3'>Login</button>
            <button className='py-2 border-2 border-medium-gray rounded-xl'>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
