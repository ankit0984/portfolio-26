import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#B968FF] mb-11">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="mr-10 px-14">
          <h1 className="text-xl font-bold">Designerlive</h1>
          <h2 className="ml-10 px-12 text-regular">.tech</h2>
        </div>
        
        <div className="flex items-center ml-6 sm:ml-auto sm:mt-0">
          <p className="text-lg font-bold mr-4 p-2 border-r">
            <a href="/" className="text-white">designerlive.tech</a>
          </p>
          <a href='https://www.linkedin.com/in/aditya-dev-b48345217/' target='_blank' rel='noreferrer'>
            <Image height="30" width="30" src="/Images/linkedin (5).png" aria-hidden="true" viewBox="0 0 17 14" alt="" className='mr-2'/>
          </a>
          <a className="mr-2 text-gray-500" href='https://instagram.com/designerlive.tech?igshid=NGExMmI2YTkyZg==' target='_blank' rel='noreferrer'>
            <Image height="30" width="30" src="/Images/instagram (4).png" aria-hidden="true" viewBox="0 0 17 14" alt="" />
          </a>
          <a className="mr-24 text-gray-500" href='https://dribbble.com/' target='_blank' rel='noreferrer'>
            <Image height="30" width="30" src="/Images/dribbble-logo.png" aria-hidden="true" viewBox="0 0 17 14" alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}
