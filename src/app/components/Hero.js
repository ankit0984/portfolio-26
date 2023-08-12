"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  
  return (
    <>
    <div>
      <div id='about' className='h-screen flex items-center py-auto px-6 md:px-24'>
        <div className='m-auto md:grid grid-cols-3 gap-8 items-center flex-col'>
          <div className='col-span-3 md:col-span-2 py-2 text-center md:text-left'>
            <p className='uppercase text-4xl tracking-widest text-[#5651e5]'>
              Hello
            </p>
            <p className='py-2'>
              <span className='text-6xl font-bold'>I&apos;m </span>
              <span className='text-6xl font-bold text-[#5651e5]'>Aditya Dev</span>
            </p>
            
              <TypeAnimation cursor={true} sequence={['a UI/UX Designer', 900,
             'a UI/UX Developer', 900, 'a UI/UX Designer', 900, 'a UI/UX Developer', 900]}
             wrapper='p' className='font-bold text-6xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text overflow-y-clip py-2'/>
            
            <p className='py-3 text-3xl text-gray-600'>
              High-level experience in UI/UX Designing with the latest technologies and designing knowledge, producing quality work.
            </p>
            <div className='items-center text-heliotropep py-2'>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center button justify-center bg-purple-500 text-white py-2 px-4 rounded-lg gap-2"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span>Contact Me</span>
                <Image height='20'width="20" src="/Images/send.png" aria-hidden="true" alt="" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </button>
            </div>
            <div className='container flex gap-4 m-auto py-2 justify-center md:justify-start'>
              <a href='https://www.linkedin.com/in/aditya-dev-b48345217/' target='_blank' rel='noreferrer'>
                <div className='h-6 w-6'>
                  <Image src="/Images/linkedin (4).png" alt="/" height="25" width="25"/>
                </div>
              </a>
              <a href='https://instagram.com/designerlive.tech?igshid=NGExMmI2YTkyZg==/' target='_blank' rel='noreferrer'>
                <div className='h-6 w-6'>
                  <Image src="/Images/instagram (3).png" alt="/" height="25" width="25" />
                </div>
              </a>
              <a href='https://www.behance.net/onboarding/adobe/' target='_blank' rel='noreferrer'>
                <div className='h-6 w-6'>
                  <Image src="/Images/behance.png" alt="/" height="25" width="25" />
                </div>
              </a>
              <a href='https://dribbble.com/' target='_blank' rel='noreferrer'>
                <div className='h-6 w-6'>
                  <Image src="/Images/dribble-big-logo.png" alt="/" height="25" width="25" />
                </div>
              </a>
            </div>
          </div>
        {/* Profile image (visible only in desktop view) */}
      <div className="hidden md:block ">
        <Image
          className="mt-4 md:mt-0"
          src="/Images/snapchat.png" // Replace this with the path to your profile image
          alt="Profile"
          height="300" width="300"
        />
      </div>

      {/* Profile image (visible only in mobile view) */}
      <div className="md:hidden w-0">
        <Image
        
          className=" rounded-full"
          src="/images/snapchat.png" // Replace this with the path to your profile image
          alt="Profile"
          width="100" height="100"
        />
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

