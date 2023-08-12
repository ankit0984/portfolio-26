import Footer from './Footer';
import Image from 'next/image';
export default function Contact() {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="flex w-full">
          <div className="w-1/2 p-6 mt-20 py-20">
            <div className="text-5xl mb-2 px-24 mr-22 mx-22 justify-self-center ">
              <span className="font-bold">Let&apos;s</span>
            <span className="text-[#B968FF] font-bold"> chat</span>
            </div>
            <div className="text-5xl mb-2 px-24 mr-22 mx-22 justify-self-center">
            <span className="font-bold">Tell me </span>
            <span className="text-[#B968FF] font-bold">about your </span>
            </div>
            <div className="text-5xl mb-2 px-24 mr-22 mx-22 justify-self-center">
            <span className=" text-[#B968FF] font-bold">project</span>
            <span className=" text-black font-bold">.</span>
            </div>
            <div className="container mx-auto border border-blue-500 flex items-center">
      <div className="mr-4">
        <Image src="/Images/email (3).png" alt="Image" width="30" height="30" />
      </div>
      <p className="text-lg">Your Text Here</p>
    </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline">
              Mail Us
            </button>
          </div>
          <div className="w-1/2 p-6">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="5"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  <Footer />
  
  </>

    
  );
};

