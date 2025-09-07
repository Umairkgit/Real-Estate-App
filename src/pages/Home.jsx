import React from 'react'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import FeaturedProperties from '../components/FeaturedProperties'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />

            {/* WHAT WE - SECTION  */}
            <div className='flex flex-col items-center h-full mt-10'>
                {/* Headings  */}
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='text-xl md:text-3xl text-[#1E3A8A] font-bold'>What We Do?</h1>
                    <p className='text-xs md:text-xl text[#555555] text-center'>Helping you find, buy, and rent the perfect <br /> property with ease.</p>
                </div>

                {/* Cards  */}
                <div className='flex flex-col md:flex-row mt-10 gap-15'>
                    <div className="bg-[#EEEEEE] hover:bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                        {/* Icon */}
                        <div className="bg-gray-200 rounded-full p-4 mb-4">
                            <img src={assets.bar_icon} alt="" />
                        </div>
                        <h3 className="text-lg font-semibold">Buy & Sell <br /> Properties</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Find verified homes for sale or list <br /> your property with ease.
                        </p>
                    </div>
                    <div className="bg-[#EEEEEE] hover:bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                        {/* Icon */}
                        <div className="bg-gray-200 rounded-full p-4 mb-4">
                            <img src={assets.key_icon} alt="" />
                        </div>
                        <h3 className="text-lg font-semibold">Find Rental <br /> Homes</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Browse through thousands of <br /> rental options suited to your needs
                        </p>
                    </div>
                    <div className="bg-[#EEEEEE] hover:bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                        {/* Icon */}
                        <div className="bg-gray-200 rounded-full p-4 mb-4">
                            <img src={assets.mic_icon} alt="" />
                        </div>
                        <h3 className="text-lg font-semibold">Smart AI <br /> Property Search</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Get instant recommendations <br /> based on your budget & location
                        </p>
                    </div>
                    <div className="bg-[#EEEEEE] hover:bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                        {/* Icon */}
                        <div className="bg-gray-200 rounded-full p-4 mb-4">
                            <img src={assets.lock_icon} alt="" />
                        </div>
                        <h3 className="text-lg font-semibold">Safe & Secure <br /> Transactions</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Verified listings & secure deals to <br /> ensure a smooth experience.
                        </p>
                    </div>

                </div>
            </div>


            {/* FEATURED PROPERTIES - SECTION  */}
            <FeaturedProperties />

            {/* Footer  */}
            <Footer />


        </div>
    )
}

export default Home