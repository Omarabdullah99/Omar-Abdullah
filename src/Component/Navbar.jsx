/* eslint-disable no-unused-vars */
// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" w-[90%] mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-black font-bold text-xl">Omar</div>
        <div className="hidden md:flex space-x-4">
          <a href='' className="text-black">Home</a>
          <a href='' className="text-black">About</a>
          <a href='' className="text-black">Skills</a>
          <a href='' className="text-black">Project</a>
          <a href='' className="text-black">Contact</a>

        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
        <a href='' className="text-black">Home</a>
        <a href='' className="text-black">About</a>
        <a href='' className="text-black">Skills</a>
        <a href='' className="text-black">Project</a>
        <a href='' className="text-black">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
