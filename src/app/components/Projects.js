"use client"

import ProjectItem from './ProjectItem'
import './style.css'
import Image from "next/image";
import Contact from "./Contact";
export default function Projects() {
  return (
    <>
      <div id='projects' className='md:h-screen'>
        <div className=" mx-auto container flex flex-wrap justify-center">
          <h1 className="container text-center px-12 mx-auto text-4xl font-bold mt-6 text-black">My Recent Projects</h1>
          <h2 className='px-12 mx-auto py-4 text-md'>What I&apos;ve Built</h2>
        </div>
        <div className='w-full'>
          <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem
                title='AI-Genrative-Design App UI'
                backgroundImg="/Images/AI.jpg"
                projectUrl='/AI'
                tech='Adobe XD'
              />
              <ProjectItem
                title='Healthcare web UI'
                backgroundImg="/Images/AI-healtthcare.jpg"
                projectUrl='/health'
                tech='Adobe XD'
              />

              <ProjectItem
                title='Coffee App UI'
                backgroundImg="/Images/coffee.jpg"
                projectUrl='/coffee'
                tech='Adobe XD'
              />

              <ProjectItem
                title='Wine Liquor web UI'
                backgroundImg="/Images/wine.png"
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
                <h1 className="text-white text-3xl mt-2 font-bold">You have a new project</h1>
                <p className="text-md text-white text-2xl mt-3">Contact me now &amp; and get High-Fidelity Designs </p>
                <p className="text-md text-white text-2xl">and Prototype.</p>
                <button className="flex items-center justify-between px-4 py-2 mt-6 text-[#B968FF] bg-white rounded-lg focus:outline-none">
                  <span className='mr-2 text-2xl'>Contact Me</span>
                  <Image src="/Images/direct.png" height="20" width="20" className=' items-end' alt="" />
                </button>
              </div>

              <div className="">
                <Image
                  src='/Images/Snap.png'
                  height="250" width="250"
                  className=" mt-4 text-gray-500"
                  viewBox="0 0 20 20"

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
        {/** slider */}
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <p className=''>&quot;We are incredibly grateful to Deva for revamping our product&apos;s interface.
            Their exceptional eye for design, coupled with a deep understanding of user behavior, made a
            significant impact on our conversion rates. Their designs strike the perfect balance between
            aesthetics and functionality. Highly commendable work!&quot;</p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

        {/* end of card */}
        <Contact />
      </div>


    </>
  )
}





