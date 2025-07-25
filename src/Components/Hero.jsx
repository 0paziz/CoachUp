import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen px-6 md:px-16 py-24 text-white relative flex flex-col justify-center"
    >
      {/* Content container */}
      <div className="flex flex-col gap-6 max-w-2xl mx-auto md:mx-0 px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-0.5 bg-white"></div>
          <span className="text-sm tracking-wider uppercase text-white">
            Experienced Triathlon Coach
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Level Up Your Performance
        </h1>


        <p className="text-base sm:text-lg text-white max-w-md sm:max-w-lg">
          Achieve your best triathlon results with tailored coaching and training plans designed just for you.
        </p>

        <Link to="/contact">
          <button className="group inline-flex items-center mt-4 gap-2 w-fit px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-opacity-90 transition-all">
            Start Now
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </Link>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-row  items-center gap-4 mt-12 px-4 sm:px-10">
        {/* Line */}
        <div className="h-16 sm:h-16 border-l-2 border-gray-300" />
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#F5B614] grayscale-50 text-xl" />
            ))}
          </div>
          <p className="text-md text-white mt-2">100+ Positive Client Reviews</p>
        </div>
      </div>
    </section>
  );
}
