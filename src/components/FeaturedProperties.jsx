import React from "react";
import { FaStar } from "react-icons/fa";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import assets from "../assets/assets";
import { useApi } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () => {

    const navigate = useNavigate();
    const { properties, loading } = useApi();

    if (loading) {
        return <p className="text-center mt-10">Loading properties...</p>;
    }

    const mainProperty = properties[0];
    const secondProperty = properties[11];
    const thirdProperty = properties[2];
    const fourthProperty = properties[3];

    return (
        <div>
            {/* Featured Section */}
            <div className="hidden md:flex items-center justify-between mt-10 h-full">
                <h1 className="text-3xl ml-15 font-bold text-[#1E3A8A]">
                    Featured Property
                </h1>
                <button
                    onClick={() => navigate('/buy')}
                    className="hidden md:flex border-2 mr-15 px-3 py-2 text-[#1E3A8A] rounded-4xl border-[#1E3A8A] cursor-pointer">
                    See {properties.length} New Projects <HiMiniArrowUpRight />
                </button>
            </div>

            {/* Images Grid */}
            <div className="hidden md:flex gap-5 h-96 p-1 mt-10">
                {/* Left main image */}
                <div className="relative ml-15 flex-1 overflow-hidden">
                    <img
                        src={
                            mainProperty?.image ||
                            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop"
                        }
                        alt={mainProperty?.name || "Property"}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-xs opacity-90 mb-1">
                            By {mainProperty?.ownerName || "Finder & Projects"}
                        </p>
                        <h2 className="text-lg font-semibold">
                            {mainProperty?.name || "Property Name"}
                        </h2>
                        <p className="text-xs opacity-80">
                            {mainProperty?.city}, {mainProperty?.country}
                        </p>
                    </div>
                </div>

                {/* Middle image */}
                <div className="w-64 overflow-hidden">
                    <img
                        src={
                            secondProperty?.image ||
                            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=600&fit=crop"
                        }
                        alt={secondProperty?.name || "Modern house"}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right column - 2x2 grid */}
                <div className="w-64 flex flex-col mr-15 gap-5">
                    <div className="flex-1 overflow-hidden">
                        <img
                            src={thirdProperty?.image || assets.img_not_found}
                            alt="Property"
                            className="w-full h-48 object-cover p-2 rounded-3xl"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = assets.img_not_found;
                            }}
                        />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <img
                            src={fourthProperty?.image || assets.img_not_found}
                            alt="Property"
                            className="w-full h-48 object-cover p-2 rounded-3xl"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = assets.img_not_found;
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Best Properties Available */}
            <div className="flex flex-col">
                <div className="flex justify-between mt-10 ml-5 md:ml-15 h-full">
                    <div>
                        <h1 className="text-xl md:text-3xl  font-bold text-[#1E3A8A]">
                            Best Properties Available For Sale
                        </h1>
                        <p className="text-xs md:text-xl text-[#555555]">
                            Browse our top-rated properties for sale, featuring premium
                            listings tailored to <br /> your needs. Find your dream home
                            today!
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => navigate('/properties')}
                            className="hidden md:flex mr-15 px-6 py-3 text-sm text-white bg-[#1E3A8A] rounded-4xl cursor-pointer">
                            View More Properties
                        </button>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-5 mr-5 gap-6 mt-10 px-4 sm:px-6 lg:px-8">
                    {properties.slice(0, 4).map((property) => (
                        <div
                            key={property.id}
                            className="bg-[#F1F1F1] w-full max-w-sm mx-auto rounded-xl shadow-lg overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={property.image || assets.img_not_found}
                                    alt="Property"
                                    className="w-full h-48 object-cover p-2 rounded-3xl"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = assets.img_not_found;
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                {/* Location + Rating */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                                        <IoLocationOutline />
                                        {property.city || "New York, NY"}, {property.country}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-amber-300" />
                                        <span className="text-sm text-gray-600">4.5/5</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                                    {property.description ||
                                        "Spacious 3BHK apartment in a prime location with modern amenities."}
                                </p>

                                {/* Button + Price */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                                    <button className="bg-[#1E3A8A] text-white px-6 py-2 rounded-full font-medium text-sm w-full sm:w-auto">
                                        Buy Now
                                    </button>
                                    <div className="text-xl font-semibold text-[#222222] mt-2 sm:mt-0">
                                        $450,000
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Rental Home */}
            <div className="flex flex-col">
                <div className="flex justify-between mt-10 ml-5 md:ml-15 h-full">
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold text-[#1E3A8A]">
                            Find The Perfect Rental Home
                        </h1>
                        <p className="text-xs md:text-xl text-[#555555]">
                            Browse our top-rated properties for rent, featuring premium
                            listings tailored to your needs. Find your dream home today!
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => navigate('/properties')}
                            className="hidden md:flex mr-15 px-6 py-3 text-sm font-medium text-white bg-[#1E3A8A] rounded-4xl cursor-pointer">
                            View All Rentals
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-5 mr-5 mt-10 px-4 sm:px-6 lg:px-8">
                    {properties.slice(5, 9).map((property) => (
                        <div
                            key={property.id}
                            className="bg-[#F1F1F1] w-full max-w-sm mx-auto rounded-xl shadow-lg overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={property.image || assets.img_not_found}
                                    alt="Property"
                                    className="w-full h-48 object-cover p-2 rounded-3xl"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = assets.img_not_found;
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                {/* Location + Rating */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                                        <IoLocationOutline />
                                        {property.city || "New York, NY"}, {property.country}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-amber-300" />
                                        <span className="text-sm text-gray-600">4.5/5</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                                    {property.description ||
                                        "Spacious 3BHK apartment in a prime location with modern amenities."}
                                </p>

                                {/* Button + Price */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                                    <button className="bg-[#1E3A8A] text-white px-6 py-2 rounded-full font-medium text-sm w-full sm:w-auto">
                                        Buy Now
                                    </button>
                                    <div className="text-xl font-semibold text-[#222222] mt-2 sm:mt-0">
                                        $450,000
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Rest of your component (forms, newsletter, etc.) stays the same */}
            <div className="mt-10 ml-5 md:ml-15">
                <h1 className="text-xl md:text-3xl font-bold text-[#1E3A8A]">
                    Start Your Journey Today!
                </h1>
                <p className="text-xs md:text-xl text-[#555555]">
                    Create a profile in seconds and find your ideal home.
                </p>

                <div className="py-8">
                    <div className="max-w-6xl mx-15">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <div className="flex-1 max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                />
                            </div>
                            <div className="flex-1 max-w-xs relative">
                                <select
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                                >
                                    <option disabled selected className="text-gray-400">Select User Type</option>
                                    <option value="buyer">Buyer</option>
                                    <option value="seller">Seller</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                    <IoIosArrowDown />
                                </div>
                            </div>

                            <div className="flex-1 max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Enter Your Location"
                                    className="w-full px-6 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                />
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="bg-[#1E3A8A] text-white px-15 py-2 rounded-full font-medium text-base transition-colors duration-200 whitespace-nowrap">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Newsletter Subscription Section  */}
            <div className="flex flex-col md:flex-row mt-40 mb-20 justify-center items-center">
                <div className="relative mb-10 w-full max-w-2xl mx-auto px-4">
                    {/* First Image */}
                    <div className="relative z-10">
                        <img
                            src={assets.react_img1}
                            alt="White modern house"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Second Image */}
                    <div
                        className="absolute top-10 left-1/4 w-2/3 sm:top-20 sm:left-1/3 sm:w-2/3 lg:top-32 lg:left-48 lg:w-3/5 z-20">
                        <img
                            src={assets.react_img2}
                            alt="A-frame house"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>


                <div className="flex flex-col items-center px-4 sm:px-6 lg:px-20">
                    {/* Heading */}
                    <h1 className="text-[#1E3A8A] text-center text-xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                        We Provide Latest Properties <br className="hidden sm:block" /> For Our Valuable Clients
                    </h1>

                    {/* Feature 1 */}
                    <div className="flex gap-5 w-full max-w-2xl mt-10">
                        <img src={assets.icon1} className="w-12 h-12 flex-shrink-0" alt="Budget Friendly" />
                        <div className="flex flex-col">
                            <h2 className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">Budget Friendly</h2>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus.
                                Lectus quis pretium varius iaculis sed.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-5 w-full max-w-2xl mt-10">
                        <img src={assets.icon3} className="w-10 h-10 flex-shrink-0" alt="Trusted" />
                        <div className="flex flex-col">
                            <h2 className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">Trusted By Thousand</h2>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus.
                                Lectus quis pretium varius iaculis sed.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-5 w-full max-w-2xl mt-10">
                        <img src={assets.icon2} className="w-10 h-10 flex-shrink-0" alt="Prime Location" />
                        <div className="flex flex-col">
                            <h2 className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">Prime Location</h2>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus.
                                Lectus quis pretium varius iaculis sed.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedProperties;
