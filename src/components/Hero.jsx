import React from 'react'
import assets from '../assets/assets'
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiExternalLink, FiHome, FiMapPin } from "react-icons/fi";

const Hero = () => {
    return (
        <div className="px-6 md:px-10 relative">
            <img src={assets.hero_img} className="w-[80vw] ml-4 h-[40vh] md:object-cover md:w-[90vw] md:ml-7 mt-10 md:h-[70vh] rounded-xl" alt="" />


            {/* Overlay text */}
            <div className="hidden absolute inset-0 md:flex flex-col items-center top-10 text-white text-center">
                <h1 className="font-bold text-sm md:text-5xl">
                    Find Your Dream Home in One Click!
                </h1>
                <p className="mt-2 text-xs md:text-xl">
                    Discover, Buy, or Rent Verified Properties with Ease.
                </p>
            </div>

            {/* Search Property  */}
            <div className='absolute inset-0 justify-end flex flex-col'>
                <div className='hidden md:flex flex-col md:flex-row justify-around'>
                    <div className="flex gap-75 mt-6">
                        <div className="flex items-center bg-white rounded-2xl px-4 ml-8 shadow-md w-[500px]">
                            {/* Left Icon */}
                            <HiOutlineLocationMarker className="text-gray-500 text-xl mr-2" />
                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Search Location..."
                                className="flex-1 outline-none py-3 text-gray-600 placeholder-gray-400 font-medium"
                            />
                            {/* Right Icon */}
                            <FiSearch className="text-gray-500 text-xl ml-2 cursor-pointer" />
                        </div>

                        <div>
                            <button className='px-5 py-2 bg-white border font-semibold text-[#1E3A8A] border-[#1E3A8A] rounded-4xl cursor-pointer'>List Your Property</button>
                        </div>
                    </div>
                </div>



                <div className="hidden md:flex flex-col md:flex-row  mt-6 w-[64vw] justify-center bg-white items-center gap-5 rounded-full ml-70 shadow-lg px-10 py-4 space-x-4">

                    {/* Rent/Buy Dropdown */}
                    <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
                        <FiExternalLink className="text-gray-500 text-lg" />
                        <select className="outline-none bg-transparent text-gray-700 font-medium">
                            <option>For Rent</option>
                            <option>For Sale</option>
                        </select>
                    </div>

                    {/* Property Type Input */}
                    <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
                        <FiHome className="text-gray-500 text-lg" />
                        <select className="outline-none bg-transparent text-gray-700 font-medium">
                            <option>House</option>
                            <option>Office</option>
                        </select>
                    </div>

                    {/* Location Dropdown */}
                    <div className="flex items-center border rounded-full px-4 py-2 space-x-2">
                        <FiMapPin className="text-gray-500 text-lg" />
                        <select className="outline-none bg-transparent text-gray-700 font-medium">
                            <option>Indonesia</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button className="bg-blue-900 text-white font-semibold px-3 py-2 rounded-full cursor-pointer hover:bg-blue-800 transition">
                        Find Property
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Hero