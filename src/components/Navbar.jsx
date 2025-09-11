import React, { useState } from 'react';
import assets from '../assets/assets';
import { FaBars, FaRegArrowAltCircleRight, FaTimes, FaUserCircle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-5 flex justify-between items-center bg-white shadow-md relative">
      {/* Logo */}
      <div>
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          className="w-28 sm:w-32 cursor-pointer"
          alt="Logo"
        />
      </div>

      {/* Desktop Navlinks */}
      <div className="hidden md:flex gap-7">
        <NavLink to="/"><p>Home</p></NavLink>
        <NavLink to="/buy"><p>Buy</p></NavLink>
        <NavLink to="/rent"><p>Rent</p></NavLink>
        <NavLink to=""><p>Sell</p></NavLink>
        <NavLink to=""><p>About Us</p></NavLink>
        <NavLink to=""><p>Contact Us</p></NavLink>
      </div>

      {/* Desktop Right side: auth buttons */}
      <div className="hidden sm:flex items-center justify-center">
        {user ? (
          <div className="flex items-center gap-3">
            <button
              onClick={logout}
              className="flex items-center gap-2 justify-center bg-red-500 text-white px-4 py-2 rounded-3xl cursor-pointer"
            >
              <FaUserCircle />
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#1E3A8A] text-white px-5 py-2.5 rounded-3xl flex items-center gap-3 cursor-pointer"
          >
            Login / Register <FaRegArrowAltCircleRight />
          </button>
        )}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setShowMenu(!showMenu)} className="text-2xl">
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {showMenu && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 z-50 md:hidden">
          <NavLink onClick={() => setShowMenu(false)} to="/">Home</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/buy">Buy</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/rent">Rent</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/sell">Sell</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about-us">About Us</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact-us">Contact Us</NavLink>

          {user ? (
            <button
              onClick={() => {
                logout();
                setShowMenu(false);
              }}
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-3xl"
            >
              <FaUserCircle />
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/signup");
                setShowMenu(false);
              }}
              className="bg-[#1E3A8A] text-white px-6 py-2 rounded-3xl flex items-center gap-2"
            >
              Login / Register <FaRegArrowAltCircleRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
