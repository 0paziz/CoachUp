import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black  py-20">
      <div className="container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row justify-between gap-10">
        
        <div className="flex-1">
          <div className="mb-4">
            <Link to="/" className="hover:text-gray-300 transition text-white text-2xl font-semibold ">
            CoachUp
          </Link>
          </div>
          <p className="text-white mb-4 max-w-md">
            Helping individuals unlock their full potential through personalized coaching, goal setting, and sustainable performance strategies.
          </p>
          <p className="text-sm text-white">Created by @Abdiaziz-Jama</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 ">
              <li><Link to="/" className='hover:text-gray-600'>Home</Link></li>
              <li><a href="#about"className='hover:text-gray-600' >About</a></li>
              <li><a href="#coaching" className='hover:text-gray-600'>Coaching</a></li>
              <li><Link to="/contact" className='hover:text-gray-600'>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Socials</h3>
            <ul className="space-y-2 text-gray-300 ">
              <li><a href="#" className='hover:text-gray-600'>Instagram</a></li>
              <li><a href="#" className='hover:text-gray-600'>LinkedIn</a></li>
              <li><a href="#" className='hover:text-gray-600'>Twitter/X</a></li>
              <li><a href="#" className='hover:text-gray-600'>YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
