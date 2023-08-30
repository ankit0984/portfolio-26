import React from 'react'
import Image from 'next/image'
export default function Demoproject() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className=" items-center justify-center carousel-item w-full">
          <div className=" grid grid-cols-2 grid-rows-2 gap-6">
            <Image src="/Images/AI.jpg" width={600} height={300} className=' shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/AI-healtthcare.jpg" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/coffee.jpg" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/wine.png" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
          </div>
        </div>
        <div id="item2" className="items-center justify-center carousel-item w-full">
        <div className=" grid grid-cols-2 grid-rows-2 gap-6">
            <Image src="/Images/AI.jpg" width={600} height={300} className=' shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/AI-healtthcare.jpg" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/coffee.jpg" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/wine.png" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
          </div>
        </div>
        <div id="item3" className="items-center justify-center carousel-item w-full">
        <div className=" grid grid-cols-2 grid-rows-2 gap-6">
            <Image src="/Images/AI.jpg" width={600} height={300} className=' shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/AI-healtthcare.jpg" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/coffee.jpg" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/wine.png" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
          </div>
        </div>
        <div id="item4" className="items-center justify-center carousel-item w-full">
        <div className=" grid grid-cols-2 grid-rows-2 gap-6">
            <Image src="/Images/AI.jpg" width={600} height={300} className=' shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/AI-healtthcare.jpg" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/coffee.jpg" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
            <Image src="/Images/wine.png" width={600} height={300} className='shadow-xl shadow-gray-400 rounded-xl' />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mt-6">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  )
}
