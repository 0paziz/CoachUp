import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowRight, FaStar } from 'react-icons/fa';
export default function ReadyForSignIn() {
  return (
    <div className="text-center py-32 px-6 sm:px-10 lg:px-20 shadow">
      <h1 className="text-5xl font-bold mb-4 text-white">
        Ready to Achieve Your Goals?
      </h1>
      <p className="text-lg text-white mb-6 max-w-xl mx-auto">
        I’ll help you reach new heights and stay ahead of the competition with personalized coaching and a proven strategy.
      </p>
      <button className="group inline-flex items-center mt-4 gap-2 w-fit cursor-pointer px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-opacity-90 transition-all">
             <Link to='/contact'>Let's Talk</Link> 
               <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
             </button>
    </div>
  );
}
