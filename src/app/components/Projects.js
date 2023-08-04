"use client"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';


import ProjectItem from './ProjectItem'
import './style.css'
import Image from "next/image";



// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Projects() {
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
                title='Podcast App UI'
                backgroundImg="/Images/podcast.png"
                projectUrl='/podcast'
                tech='Adobe XD'
              />
              <ProjectItem
                title='Furniture web UI'
                backgroundImg="/Images/furniture.png"
                projectUrl='/furniture'
                tech='Adobe XD'
              />

              <ProjectItem
                title='Crypto UI'
                backgroundImg="/Images/android.png"
                projectUrl='/android'
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

        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }} pagination={{
          "clickable": true
        }} navigation={false} className="mySwiper">
          <SwiperSlide>
            &quot;Working with Deva was an absolute pleasure!
            Their innovative designs and user-centric approach transformed our product,
            resulting in a seamless and engaging user experience. Their attention to detail
            and ability to understand our brand&apos;s essence truly impressed us. Highly recommend!&quot;
          </SwiperSlide>
          <SwiperSlide>
            &quot;Deva is a true creative genius! Their designs not only
            look stunning but also function flawlessly. They expertly crafted our website, making
            navigation intuitive and user-friendly. Their professionalism and timely delivery made
            the whole collaboration a breeze. We couldn&apos;t be happier with the results!&quot;
          </SwiperSlide>
          <SwiperSlide>
            &quot;Thanks to Deva, our app&apos;s usability has skyrocketed! They skillfully
            redesigned the interface, incorporating modern design elements and simplifying complex
            features. The end product exceeded our expectations and received fantastic feedback from
            our users. If you need a top-notch UI/UX designer, look no further!&quot;
          </SwiperSlide>
          <SwiperSlide>
            &quot;We are incredibly grateful to Deva for revamping our product&apos;s interface.
            Their exceptional eye for design, coupled with a deep understanding of user behavior, made a
            significant impact on our conversion rates. Their designs strike the perfect balance between
            aesthetics and functionality. Highly commendable work!&quot;
          </SwiperSlide>
          <SwiperSlide>
            &quot;Collaborating with Deva was a game-changer for our startup! Their
            ability to grasp our vision and translate it into a visually appealing and intuitive design was
            remarkable. They infused creativity into every aspect, breathing life into our platform. We&apos;re
            thrilled with the final outcome and would gladly work with them again!&quot;
          </SwiperSlide>
          <SwiperSlide>&quot;Kudos to Deva for their outstanding work! They transformed our outdated
            website into a modern, user-centric platform. The redesign not only improved our user engagement but
            also boosted our SEO rankings. Their dedication to delivering top-quality designs and their professional
            approach make them a true asset to any project.&quot;
            </SwiperSlide>
          <SwiperSlide>&quot;We are beyond impressed with Deva&apos;s talent and expertise. They took the time
            to understand our business goals and target audience, resulting in a design that resonates with our users.
            Their designs breathe life into our brand and elevate our digital presence. We highly recommend their services
            to anyone seeking an exceptional UI/UX designer.&quot;
          </SwiperSlide>
          <SwiperSlide>&quot;Deva possesses an exceptional understanding of user psychology and design principles.
            They revamped our app&apos;s interface, simplifying complex workflows and making it more enjoyable for our users to interact
            with our product. Their professionalism and communication skills made the whole collaboration effortless. A truly talented designer!&quot;
          </SwiperSlide>
          <SwiperSlide>
            &quot;A big shoutout to Deva for their phenomenal work on our e-commerce platform.
            Their intuitive design solutions streamlined the shopping process, leading to increased sales and customer satisfaction.
            Their ability to balance creativity with functionality sets them apart as a highly skilled UI/UX designer.
            Highly recommended!&quot;
          </SwiperSlide>
        </Swiper>
        {/* end of card */}
      </div>

    </>
  )
}

export default Projects




