"use client"
import Image from 'next/image';
import { useState } from 'react';
import './Nav.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-center">
              <a to="/" className="text-black font-semibold">
                <div>
                  <h1 className="ml-3 text-xl">Designerlive</h1>
                  <h2 className="ml-10 px-12 text-regular">.tech</h2>
                </div>
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={handleMenuToggle} className="text-black focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-black hover:bg-blue-300 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/about" className="text-black hover:bg-blue-300 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
              <a href="/contact" className="text-black hover:bg-blue-300 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
              <div className="flex md:order-2 text-heliotrope">
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center button justify-center bg-white py-2 px-4 rounded-lg gap-2" aria-controls="navbar-sticky" aria-expanded="false">
                  <Image height="20" width="20" src="/Images/direct.png" aria-hidden="true" viewBox="0 0 17 14" alt="" />
                  Let&apos;s Talk
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </button>
              </div>

            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="/about" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                Projects
              </a>
              <a href="/contact" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
              <div className="flex md:order-2 text-heliotrope">
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center button justify-center bg-white py-2 px-4 rounded-lg gap-2" aria-controls="navbar-sticky" aria-expanded="false">
                  <Image height="20" width="20" src="/Images/direct.png" aria-hidden="true" viewBox="0 0 17 14" alt="" />
                  Let&apos;s Talk
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

    </>
  );
};

export default Navbar;
