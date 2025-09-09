import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUserCircle, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const tokenParts = token.split(".");
        if (tokenParts.length === 3) {
          const userData = JSON.parse(atob(tokenParts[1]));
          setUser(userData.name);
        } else {
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <motion.nav
      className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl backdrop-blur-sm border-b border-gray-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between p-3 sm:p-4">
        {/* Logo */}
        <NavLink to="/" className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent hover:from-emerald-300 hover:to-green-300 transition-all duration-300">
          🌱 <span className="hidden sm:inline">Farmer's Market</span><span className="sm:hidden">Farm</span>
        </NavLink>

        {/* Search Bar */}
        <div className="hidden md:flex relative w-1/3 max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 sm:py-3 px-4 sm:px-5 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-gray-700/80 shadow-lg transition-all duration-300 border border-gray-600 text-sm sm:text-base"
          />
          <button className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <FaSearch className="text-sm sm:text-lg" />
          </button>
        </div>

        {/* Links and Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-4 xl:space-x-8 font-semibold">
            <NavLink to="/" className="py-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300 border-b-2 border-transparent hover:border-emerald-400 text-sm xl:text-base">
              Home
            </NavLink>
            <NavLink to="/about" className="py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-400 text-sm xl:text-base">
              About
            </NavLink>
            <NavLink to="/services" className="py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 border-b-2 border-transparent hover:border-purple-400 text-sm xl:text-base">
              Services
            </NavLink>
            <NavLink to="/contact" className="py-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 border-b-2 border-transparent hover:border-pink-400 text-sm xl:text-base">
              Contact
            </NavLink>
          </div>

          {/* Shopping Cart */}
          <NavLink to="/cart" className="relative text-gray-300 hover:text-emerald-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800">
            <FaShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
          </NavLink>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <FaUserCircle
              className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300 cursor-pointer hover:text-emerald-400 transition-colors duration-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-3 w-40 bg-gray-800/95 backdrop-blur-sm border border-gray-600 rounded-xl shadow-xl overflow-hidden"
              >
                {/* Account */}
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/OrderedList");
                  }}
                  className="flex items-center w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-emerald-400 transition-colors duration-200"
                >
                  <FaCog className="mr-3 text-emerald-400" /> Account
                </button>

                {/* Logout */}
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    handleLogout();
                  }}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-red-400 transition-colors duration-200 border-t border-gray-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 focus:outline-none p-2 rounded-lg hover:bg-gray-800 hover:text-emerald-400 transition-colors duration-200"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 py-6 space-y-2 font-semibold shadow-lg border-t border-gray-700">
          <NavLink to="/" className="block text-center py-3 hover:bg-gray-700 hover:text-emerald-400 transition-colors duration-200">
            Home
          </NavLink>
          <NavLink to="/about" className="block text-center py-3 hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200">
            About
          </NavLink>
          <NavLink to="/services" className="block text-center py-3 hover:bg-gray-700 hover:text-purple-400 transition-colors duration-200">
            Services
          </NavLink>
          <NavLink to="/contact" className="block text-center py-3 hover:bg-gray-700 hover:text-pink-400 transition-colors duration-200">
            Contact
          </NavLink>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;