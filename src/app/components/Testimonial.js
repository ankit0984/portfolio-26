// TextCarousel.js
import Image from 'next/image';
import React from 'react';

const TextCarousel = () => {
  return (
    <div className='h-screen'>
      <h1 className=' font-bold text-2xl  text-center '>Testimonials</h1>
      <h1 className=' font-regular text-2xl text-center mb-10'>What People Talk About Us</h1>
    <div className='container rounded-lg bg-[#B968FF] bg-opacity-20 w-auto ml-48 mr-48'>
    <div className="flex flex-col items-center">
        
      <div className="carousel w-full mt-8">
        <div id="item1" className="carousel-item w-full flex flex-col items-center">
          <p className="text-center text-lg font-bold">&quot;We are incredibly grateful to Deva for revamping our product&apos;s interface.
            Their exceptional eye for design, coupled with a deep understanding of user behavior, made a
            significant impact on our conversion rates. Their designs strike the perfect balance between
            aesthetics and functionality. Highly commendable work!&quot;</p>
            <Image src="/Images/profile.png" height="120" width="120" className=' mt-6' alt="" />
            <h1 className=' text-[#B968FF] font-bold text-2xl'>Sunder Pichai</h1>
            <h2 className=' text-[#B968FF] font-regular text-xl'>CEO of Alphabet and Google</h2>
        </div>
        <div id="item2" className="carousel-item w-full flex flex-col items-center">
          <p className="text-center text-lg font-bold">&quot;We are incredibly grateful to Deva for revamping our product&apos;s interface.
            Their exceptional eye for design, coupled with a deep understanding of user behavior, made a
            significant impact on our conversion rates. Their designs strike the perfect balance between
            aesthetics and functionality. Highly commendable work!&quot;</p>
            <Image src="/Images/profile.png" height="120" width="120" className=' mt-6' alt="" />
            <h1 className=' text-[#B968FF] font-bold text-2xl'>Sunder Pichai</h1>
            <h2 className=' text-[#B968FF] font-regular text-xl'>CEO of Alphabet and Google</h2>
        </div>
        <div id="item3" className="carousel-item w-full flex flex-col items-center">
        
          <p className="text-center text-lg font-bold">&quot;We are incredibly grateful to Deva for revamping our product&apos;s interface.
            Their exceptional eye for design, coupled with a deep understanding of user behavior, made a
            significant impact on our conversion rates. Their designs strike the perfect balance between
            aesthetics and functionality. Highly commendable work!&quot;</p>
            <Image src="/Images/profile.png" height="120" width="120" className=' mt-6' alt="" />
            <h1 className=' text-[#B968FF] font-bold text-2xl'>Sunder Pichai</h1>
            <h2 className=' text-[#B968FF] font-regular text-xl'>CEO of Alphabet and Google</h2>
        </div>
        <div id="item4" className="carousel-item w-full flex flex-col items-center">
        
          <p className="text-center text-lg font-bold">&quot;We are incredibly grateful to Deva for revamping our product&apos;s interface.
            Their exceptional eye for design, coupled with a deep understanding of user behavior, made a
            significant impact on our conversion rates. Their designs strike the perfect balance between
            aesthetics and functionality. Highly commendable work!&quot;</p>
            <Image src="/Images/profile.png" height="120" width="120" className=' mt-6' alt="" />
            <h1 className=' text-[#B968FF] font-bold text-2xl'>Sunder Pichai</h1>
            <h2 className=' text-[#B968FF] font-regular text-xl'>CEO of Alphabet and Google</h2>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mt-6 mb-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TextCarousel;
