import React from 'react'

const Hero = () => {
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
              <span className='text-6xl font-bold'>I'm </span>
              <span className='text-6xl font-bold text-[#5651e5]'>Deva</span>
            </p>
            <p className='py-1'>
              <span className='text-6xl font-bold text-[#5651e5]'>a </span>
              <span className='text-6xl font-bold '>UI/UX Designer</span>
            </p>
            <p className='py-4 text-3xl text-gray-600'>
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
                <img className="h-5 w-5" src="images/send.png" aria-hidden="true" fill="none" alt="" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </button>
            </div>
            <div className='container flex gap-4 m-auto py-2 justify-center md:justify-start'>
              <a href='https://www.linkedin.com/in/aditya-dev-b48345217/' target='_blank' rel='noreferrer'>
                <div className='h-6 w-6'>
                  <img src="images/linkedin (4).png" alt="/" />
                </div>
              </a>
              <a href='https://instagram.com/designerlive.tech?igshid=NGExMmI2YTkyZg==/' target='_blank' rel='noreferrer'>
                <div className='h-6 w-6'>
                  <img src="images/instagram (3).png" alt="/" />
                </div>
              </a>
              <a href='https://www.behance.net/onboarding/adobe/' target='_blank' rel='noreferrer'>
                <div className='h-6 w-6'>
                  <img src="images/behance.png" alt="/" />
                </div>
              </a>
              <a href='https://dribbble.com/' target='_blank' rel='noreferrer'>
                <div className='h-6 w-6'>
                  <img src="images/dribble-big-logo.png" alt="/" />
                </div>
              </a>
            </div>
          </div>
        {/* Profile image (visible only in desktop view) */}
      <div className="hidden md:block ">
        <img
          className="mt-4 md:mt-0 h-auto w-auto "
          src="images/snapchat.png" // Replace this with the path to your profile image
          alt="Profile"
        />
      </div>

      {/* Profile image (visible only in mobile view) */}
      <div className="md:hidden w-0">
        <img
          className="w-full rounded-full"
          src="images/snapchat.png" // Replace this with the path to your profile image
          alt="Profile"
        />
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Hero
