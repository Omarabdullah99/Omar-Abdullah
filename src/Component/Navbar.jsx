// Navbar.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    // Set isSticky to true when the user scrolls past a certain threshold (e.g., 50px)
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close the menu on mobile after clicking a link
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`w-[90%] mx-auto ${isSticky ? 'sticky top-0 bg-white shadow' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="text-black font-bold text-xl">Omar</div>
        <div className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection('home')} className="text-black">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-black">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-black">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-black">Project</button>
          <button onClick={() => scrollToSection('contact')} className="text-black">Contact</button>
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
          <button onClick={() => scrollToSection('home')} className="text-black">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-black">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-black">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-black">Project</button>
          <button onClick={() => scrollToSection('contact')} className="text-black">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
