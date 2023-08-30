"use client"
import Testimonial from './Testimonial'
import ProjectItem from './ProjectItem'
import './style.css'
import Image from "next/image";
import Contact from "./Contact";
import Demoproject from './Demoproject';
export default function Projects() {
  return (
    <>
      <div id='projects' className='md:h-screen'>
        <div className=" mx-auto container flex flex-wrap justify-center">
          <h1 className="container text-center px-12 mx-auto text-4xl font-bold mt-6 text-black">My Recent Projects</h1>
          <h2 className='px-12 mx-auto py-4 text-md'>What I&apos;ve Built</h2>
        </div>
        <Demoproject />
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
        <div className="flex justify-center items-center">
      <Testimonial />
    </div>

        {/* end of card */}
        <Contact />
      </div>


    </>
  )
}





