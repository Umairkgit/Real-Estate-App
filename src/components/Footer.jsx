import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-[#495f9c] h-full">
      {/* Top Section */}
      <div className="text-white flex flex-col items-center text-center px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold mt-10">
          Get in Touch with Us
        </h1>
        <p className="text-base md:text-xl font-medium mt-6">
          Subscribe now for exclusive <br className="hidden md:block" /> property
          insights and deals!
        </p>

        {/* Email Input */}
        <div className="flex items-center bg-white px-1 py-1 mt-8 rounded-full overflow-hidden w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-white text-[#555555] placeholder:text-[#555555] focus:outline-none text-sm md:text-base"
          />
          <button className="bg-[#1E3A8A] text-white px-6 md:px-8 py-2 rounded-full hover:bg-blue-900 transition text-sm md:text-base">
            Submit
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row text-white justify-between items-center px-6 md:px-20 pt-16 pb-8 gap-6">
        {/* Logo */}
        <img src={assets.logo} className="w-24 md:w-32 invert" alt="Logo" />

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
          <p className="cursor-pointer hover:underline">For Sale</p>
          <p className="cursor-pointer hover:underline">Rentals</p>
          <p className="cursor-pointer hover:underline">New Projects</p>
          <p className="cursor-pointer hover:underline">Property News</p>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-center">
          © 2025 Propbot. All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
