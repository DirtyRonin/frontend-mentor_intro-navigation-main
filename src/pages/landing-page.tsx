import { urlWrapper } from '../utils/url-wrapper'

export function LandingPage() {
  return (
    <div className='flex flex-col-reverse lg:grid lg:grid-cols-[525px,1fr] gap-[40px] lg:gap-20 lg:pt-[18px]'>
      <div className='flex flex-col gap-[40px] lg:py-28 '>
        <div className='flex flex-col justify-center text-center lg:text-start gap-2 lg:gap-10'>
          <h1 className='text-almost-black text-[2rem] font-extrabold  lg:text-[4.4rem] lg:leading-[4.4rem] '>
            Make remote work
          </h1>
          <p className='text-medium-gray text-sm lg:text-lg'>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <div className='flex justify-center lg:justify-start '>
          <button
            className='bg-almost-black text-almost-white rounded-xl text-sm px-5 py-3 
              lg:text-base lg:px-[30px]
            active:bg-almost-white active:text-almost-black active:border active:border-almost-black '>
            Learn more
          </button>
        </div>
        <div className='flex items-center gap-6  lg:gap-[40px]   lg:py-16'>
          <img
            className='h-[14.5px] lg:h-[20px]'
            alt=''
            src={urlWrapper('client-databiz.svg')}
          />
          <img
            className='h-6 lg:h-[36px]'
            alt=''
            src={urlWrapper('client-audiophile.svg')}
          />
          <img
            className='h-[14.5px] lg:h-[20px]'
            alt=''
            src={urlWrapper('client-meet.svg')}
          />
          <img
            className='h-[17.5px] lg:h-[24px]'
            alt=''
            src={urlWrapper('client-maker.svg')}
          />
        </div>
      </div>
      <div>
        <div className='lg:w-[480px] '>
          <picture className=''>
            <source
              media='(min-width:1024px)'
              srcSet={urlWrapper('image-hero-desktop.png')}
            />
            <source
              media='(min-width:300px)'
              srcSet={urlWrapper('image-hero-mobile.png')}
            />
            <img alt='' src={urlWrapper('image-hero-mobile.png')} />
          </picture>
        </div>
      </div>
    </div>
  )
}
