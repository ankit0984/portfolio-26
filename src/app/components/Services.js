import Image from 'next/image';
import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";

const Card = () => {
  return (
    <div className=' h-screen bg-white'>
    <div className='flex flex-col items-center justify-center mt-8 py-8 p-4'>
        <h1 className='text-4xl font-bold font-Segoe UI text-black'>Services</h1>
        <h2 className='text-xl font-md text-black py-2'>What I Offer</h2>
      </div>
      <div className="flex justify-center items-center">
      <div className="w-auto bg-[#B968FF] bg-opacity-20 rounded shadow-lg p-6 flex mb-4 ">
        <div className="mr-4 ">
          <Image
            src='/Images/screen.png'
            height="42" width="42"
            className=" text-gray-500"
            viewBox="0 0 20 20"
            alt="/"
          />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
            />
          
          <p className="text-[#B968FF] text-xl font-bold">Website UI/UX</p>
        </div>
        <div className='flex flex-col ml-10 mr-5'>
          <p className="text-md text-black px-2 mt-3">I create bold &amp; modern interface designs with UX </p>
          <p className="text-md text-black px-2 "> knowledge for companies all across the world.</p>
        </div>
        <button className='ml-4 mr-4'>
        <BsArrowUpRight/>
        </button>
      </div>
    </div>
{/* card 2 */}
    <div className="flex justify-center items-center py-6">
      <div className="w-auto bg-[#B968FF] bg-opacity-20 rounded shadow-lg p-6 flex ">
        <div className="mr-4 ">
          <Image
            src='/Images/smartphone.png'
            height="40" width="40"
            className=" text-gray-500"
            viewBox="0 0 20 20"
            alt="/"
          />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
            />
          
          <p className="text-[#B968FF] text-xl mt-2 font-bold">Application UI/UX</p>
        </div>
        <div className='flex flex-col ml-5 mr-5'>
          <p className="text-md text-black font-  px-2 mt-3">I create bold &amp; modern interface designs with UX </p>
          <p className="text-md text-black font-  px-2 ">knowledge for companies all across the world.</p>
        </div>
        <button className='ml-4 mr-4'>
        <BsArrowUpRight/>
        </button>
      </div>
    </div>
{/* card 3 */}
    <div className="flex justify-center items-center py-4">
      <div className="w-auto bg-[#B968FF] bg-opacity-20 rounded shadow-lg p-6 flex ">
        <div className="mr-4 ">
          <Image
            src='/Images/brochure.png'
            height="40" width="40"
            className=" text-gray-500"
            viewBox="0 0 20 20"
            alt="/"
          />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
            />
          
          <p className="text-[#B968FF] text-xl font-bold">Poster Designing</p>
        </div>
        <div className='flex flex-col ml-5 mr-5'>
          <p className="text-md text-black font- px-2 mt-3">I create bold &amp; modern interface designs with UX </p>
          <p className="text-md text-black font- px-2 "> knowledge for companies all across the world.</p>
        </div>
        <button className='ml-4 mr-4'>
        <BsArrowUpRight/>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Card;
