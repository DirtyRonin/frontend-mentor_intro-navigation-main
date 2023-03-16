import React from 'react'
import { urlAssetsWrapper, urlWrapper } from '../../utils/url-wrapper'
import { NavigationNode } from './navigation-node'

interface MenuNode {
  name: string
  icon?: string
  subs?: [{ name: string; icon?: string }]
  subsOrientation?: 'left' | 'right'
}

export function CreateMenu() {
  const [menu, setMenu] = React.useState<MenuNode[]>([])

  React.useEffect(() => {
    fetch(urlAssetsWrapper('menu.json'))
      .then((result) => result.json())
      .then((data: MenuNode[]) => setMenu(data))
  }, [])

  return (
    <>
      {menu.map((x, indexX) => (
        <React.Fragment key={`MenuNode - ${indexX}`}>
          <NavigationNode
            name={x.name}
            icon={x.icon ? urlWrapper(x.icon) : undefined}
            subsOrientation={x.subsOrientation}>
            {x.subs
              ? x.subs.map((y, indexY) => (
                  <React.Fragment key={`MenuSubNode - ${indexX} - ${indexY}`}>
                    <NavigationNode
                      name={y.name}
                      icon={y.icon ? urlWrapper(y.icon) : undefined}
                    />
                  </React.Fragment>
                ))
              : null}
          </NavigationNode>
        </React.Fragment>
      ))}
    </>
  )
}
