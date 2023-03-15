import React from 'react'
import IconLogo from './assets/images/logo.svg'
import IconMenu from './assets/images/icon-menu.svg'

function App() {
  const imagePath = (image: string) =>
    `${process.env.PUBLIC_URL}/images/${image}`

  return (
    <div className='w-[375px] h-[775px] bg-white'>
      <header className='flex justify-between p-4'>
        <img alt='' src={IconLogo} />
        <img className='h-4 w-7' alt='' src={IconMenu} />
      </header>
      <nav></nav>
      <main>
        <div className='flex flex-col gap-12'>
          <picture>
            <source
              media='(min-width:300px)'
              srcSet={imagePath('image-hero-mobile.png')}
            />
            <source
              media='(min-width:768px)'
              srcSet={imagePath('image-hero-desktop.png')}
            />
            <img alt='' src={imagePath('image-hero-mobile.png')} />
          </picture>
          <div className='flex flex-col justify-center text-center  gap-4'>
            <h1 className='text-almost-black text-[2rem] font-extrabold mx-1'>
              Make remote work
            </h1>
            <p className='text-medium-gray text-sm mx-4'>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <div>
              <button className='bg-almost-black text-almost-white rounded-xl text-sm px-5 py-3'>
                Learn more
              </button>
            </div>
          </div>
          <div className='flex items-center gap-6 px-3.5'>
            <img
              className='h-[14.5px]'
              alt=''
              src={imagePath('client-databiz.svg')}
            />
            <img
              className='h-6 '
              alt=''
              src={imagePath('client-audiophile.svg')}
            />
            <img
              className='h-[14.5px]'
              alt=''
              src={imagePath('client-meet.svg')}
            />
            <img
              className='h-[17.5px]'
              alt=''
              src={imagePath('client-maker.svg')}
            />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
