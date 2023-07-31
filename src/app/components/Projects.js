import React from 'react'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div>
      <div className=" mx-auto container flex flex-wrap justify-center">
        <h1 className="container text-center px-12 mx-auto text-4xl font-bold mt-6 text-black">My Recent Projects</h1>
        <h2 className='px-12 mx-auto py-4 text-md'>What I&apos;ve Built</h2>
      </div>
      <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
              title='Podcast App UI'
              backgroundImg="Images\podcast.png"
              projectUrl='/podcast'
              tech='Adobe XD'

            />
            <ProjectItem
              title='Furniture web UI'
              backgroundImg="Images/furniture.png"
              projectUrl='/furniture'
              tech='Adobe XD'
            />

            <ProjectItem
              title='Crypto UI'
              backgroundImg="Images/android.png"
              projectUrl='/android'
              tech='Adobe XD'
            />

            <ProjectItem
              title='Wine Liquor web UI'
              backgroundImg="Images/wine.png"
              projectUrl='/wine'
              tech='Adobe XD'
            />
          </div>
        </div>
      </div>
      {/* card for resume */}
      <div className='min-h-screen flex justify-center items-center'>
      <div className="flex justify-center items-center py-6">
      <div className="w-auto h-auto bg-[#B968FF] rounded-lg shadow-lg p-6 flex ">
      <div className="w-auto mt-8 p-4">
        <h1 className="text-white text-xl mt-2 font-bold">You have a new project</h1>
          <p className="text-md text-white mt-3">Contact me now &amp; and get High-Fidelity Designs </p>
          <p className="text-md text-white">and Prototype.</p>
          <button className="flex items-center justify-between px-4 py-2 mt-6 text-[#B968FF] bg-white rounded-lg focus:outline-none">
          <span className='mr-2'>Contact Me</span>
          <img src="Images/direct.png" className='h-5 w-5 items-end' alt="" />
          </button>
        </div>
        
        <div className="">
          <img
            src='Images/Snap.png'
            className="h-auto w-auto mt-4 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            alt="/"
          />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
            />
        </div>
      </div>
    </div>
    </div>
    {/* end of card */}
    </div>
  )
}

export default Projects
