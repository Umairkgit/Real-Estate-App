import React, { useState } from "react";
import { useApi } from "../context/ApiContext";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";
import assets from "../assets/assets";

const Properties = () => {
  const { properties } = useApi();
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 15;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  // Calculate current properties
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  return (
    <div className="flex flex-col">
      <Navbar />

      {/* Header */}
      <div className="flex justify-between mt-10 px-4 sm:px-8 lg:px-16">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
            All Properties
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Browse our top-rated properties for sale, featuring premium listings
            tailored to your needs. Find your dream home today!
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-4 sm:px-8 lg:px-16">
        {currentProperties.map((property) => (
          <div
            key={property.id}
            className="bg-[#F1F1F1] w-full max-w-sm mx-auto rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={property.image || assets.img_not_found}
                alt="Property"
                className="w-full h-48 object-cover p-2 rounded-2xl"
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
                  "Spacious 3BHK apartment in a prime location with modern amenities."
              </p>

              {/* Price + Button */}
              <div className="flex items-center justify-between">
                <button className="bg-[#1E3A8A] text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-[#16377a] transition">
                  Buy Now
                </button>
                <div className="text-lg font-semibold text-[#222222]">
                  <p>$450,000</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-10 mb-10 px-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#1E3A8A] text-white"
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-[#1E3A8A] text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#1E3A8A] text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Properties;
