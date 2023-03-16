import { urlWrapper } from '../utils/url-wrapper'

export function LandingPage() {
  return (
    <div className='flex flex-col gap-[40px]'>
      <picture>
        <source
          media='(min-width:300px)'
          srcSet={urlWrapper('image-hero-mobile.png')}
        />
        <source
          media='(min-width:768px)'
          srcSet={urlWrapper('image-hero-desktop.png')}
        />
        <img alt='' src={urlWrapper('image-hero-mobile.png')} />
      </picture>
      <div className='flex flex-col justify-center text-center gap-2'>
        <h1 className='text-almost-black text-[2rem] font-extrabold mx-1'>
          Make remote work
        </h1>
        <p className='text-medium-gray text-sm mx-4'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
      </div>
      <div className='flex justify-center'>
        <button
          className='bg-almost-black text-almost-white rounded-xl text-sm px-5 py-3 
        active:bg-almost-white active:text-almost-black active:border active:border-almost-black '>
          Learn more
        </button>
      </div>
      <div className='flex items-center gap-6 px-3.5'>
        <img
          className='h-[14.5px]'
          alt=''
          src={urlWrapper('client-databiz.svg')}
        />
        <img
          className='h-6 '
          alt=''
          src={urlWrapper('client-audiophile.svg')}
        />
        <img
          className='h-[14.5px]'
          alt=''
          src={urlWrapper('client-meet.svg')}
        />
        <img
          className='h-[17.5px]'
          alt=''
          src={urlWrapper('client-maker.svg')}
        />
      </div>
    </div>
  )
}
