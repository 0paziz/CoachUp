
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navitems = [
  { id: 1, href: '/#coaching', label: 'Coaching' },
  { id: 2, href: '/#reviews', label: 'Reviews' },
  { id: 3, href: '/#about', label: 'About' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="w-full px-6 py-4 transition ease-out bg-transparent z-50">
      <nav className="flex items-center justify-between max-w-6xl mx-auto text-white relative">
        <div className="flex items-center space-x-2">
          <Link to="/#hero" className="hover:text-gray-300 transition text-white text-xl font-semibold cursor-pointer">
            CoachUp
          </Link>

          <div className="ml-4 border-l-2 border-[#a0a0a0] h-6"></div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 ml-5">
            {Navitems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="relative group transition-colors duration-200"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1.5 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <Link className="relative group transition-colors duration-200" to="/contact">
              Contact
             <span className="absolute left-0 -bottom-1.5 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
             
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-2xl text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop CTA */}
          <button className="hidden lg:inline backdrop-blur-sm font-semibold bg-white/10 text-white px-8 py-2 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <a href='#coaching'>View Plans </a>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#0d0d0d] flex flex-col items-center lg:hidden py-6 gap-6 transition-all duration-300 z-40">
            {Navitems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-lg hover:text-gray-300 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
             <li>
              <Link   className="relative group transition-colors duration-200" to="/contact">
              Contact
             <span className="absolute left-0 -bottom-1.5 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
             
            </li>
            <button className="mt-4 backdrop-blur-sm font-semibold bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
              <a href='#coaching'>View Plans </a>
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
}
