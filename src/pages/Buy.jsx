import React from 'react'
import Navbar from '../components/Navbar'
import assets from '../assets/assets'
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiExternalLink, FiHome, FiMapPin } from "react-icons/fi";
import { useApi } from '../context/ApiContext';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import { SlLocationPin } from 'react-icons/sl';
import { MdBookmark } from 'react-icons/md';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Buy = () => {

    const navigate = useNavigate();

    const { properties, loading } = useApi();


    return (
        <div>
            <div className="px-10 relative">
                <Navbar />
                {/* <img src={assets.buy_img1} className="w-[70vw] md:w-full rounded-t-xl" alt="" /> */}
                <img src={assets.buy_img1} className="w-[80vw] ml-4 h-[40vh] md:object-cover md:w-[90vw] md:ml-7 mt-10 md:h-[70vh] rounded-xl" alt="" />


                {/* Overlay text */}
                <div className="hidden absolute inset-0 md:flex flex-col left-30 top-120 text-white">
                    <h1 className="font-bold text-4xl md:text-5xl">
                        Featured Properties For Sale
                    </h1>
                    <p className="mt-2 text-lg md:text-xl">
                        Discover, Buy, or Rent Verified Properties with Ease.
                    </p>
                </div>

                {/* Search Property  */}
                <div className='absolute inset-0 top-140 flex flex-col'>
                    <div className="hidden md:flex flex-col md:flex-row mt-6 w-[64vw] bg-white justify-center items-center gap-5 bg-red- rounded-full ml-70 shadow-lg px-10 py-4 space-x-4 ">
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


            {/* Featured Property  */}
            <div className="mt-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-16">
                    <h1 className="text-xl md:text-3xl font-bold text-[#1E3A8A]">
                        Featured Property
                    </h1>
                    <button 
                    onClick={()=> navigate('/properties')}
                    className="hidden md:flex border-2 mt-4 md:mt-0 px-3 py-2 text-[#1E3A8A] items-center gap-2 cursor-pointer rounded-3xl border-[#1E3A8A]">
                        See {properties.length} New Projects <HiMiniArrowUpRight />
                    </button>
                </div>

                {/* Property Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 md:px-16 mb-30">

                    {/* Card 1 */}
                    <div className="relative mb-20">
                        <img
                            src={assets.buy_img2}
                            className="w-full h-64 md:h-[500px] object-cover rounded-xl"
                            alt=""
                        />
                        <div className="absolute -bottom-16 left-8 md:left-16 bg-white p-5 w-[70vw] md:w-[80%] rounded-2xl shadow-md">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <SlLocationPin className='text-[#1E3A8A]'/>
                                    <p className="text-xs md:text-xl font-semibold ml-3">
                                        Green Villa, Uttar Pradesh
                                    </p>
                                </div>
                                <MdBookmark className="text-xl text-[#1E3A8A]" />
                            </div>
                            <p className=" text-xs md:text-sm text-[#555555] mt-2">
                                Spacious 3BHK apartment in a prime location with modern amenities.
                            </p>
                            <div className="flex justify-between mt-1 md:mt-6 items-start md:items-center">
                                <h1 className="font-md md:font-bold md:text-xl">$450,000</h1>
                                <button className="md:mt-0 text-white rounded-full bg-[#1E3A8A] px-2.5 py-1 md:px-6 md:py-2 cursor-pointer text-xs md:text-sm">
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative mb-20">
                        <img
                            src={assets.buy_img3}
                            className="w-full h-64 md:h-[500px] object-cover rounded-xl"
                            alt=""
                        />
                        <div className="absolute -bottom-16 left-8 md:left-16 bg-white p-5 w-[70vw] md:w-[80%] rounded-2xl shadow-md">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <SlLocationPin className='text-[#1E3A8A]'/>
                                    <p className="text-xs md:text-xl font-semibold ml-3">
                                        Green Villa, Uttar Pradesh
                                    </p>
                                </div>
                                <MdBookmark className="text-xl text-[#1E3A8A]" />
                            </div>
                            <p className=" text-xs md:text-sm text-[#555555] mt-2">
                                Spacious 3BHK apartment in a prime location with modern amenities.
                            </p>
                            <div className="flex justify-between mt-1 md:mt-6 items-start md:items-center">
                                <h1 className="font-md md:font-bold md:text-xl">$450,000</h1>
                                <button className="md:mt-0 text-white rounded-full bg-[#1E3A8A] px-2.5 py-1 md:px-6 md:py-2 cursor-pointer text-xs md:text-sm">
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Buy