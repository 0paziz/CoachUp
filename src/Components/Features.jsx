import React from 'react';
import CountUp from 'react-countup';

export default function Features() {
  return (
    <section className="w-full py-16 px-6 sm:px-10 md:px-16 lg:px-32 bg-white text-black">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
    
        <div className="max-w-xl flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Unlock Your Full Potential
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            With proven training methods, tailored plans, and expert coaching, we help athletes of all levels exceed their goals.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Join the hundreds who’ve transformed their performance with our science-based approach.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="./images/coach4.jpg"
            alt="Athlete Training"
            className="w-full max-w-xs rounded-xl shadow-lg object-cover grayscale-[75%]"
          />
        </div>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center md:text-left">
        {[
          { number: 15, suffix: '+', label: 'Years of experience' },
          { number: 200, suffix: '+', label: 'Athletes coached' },
          { number: 500, suffix: '+', label: 'Race strategies' },
          { number: 10000, suffix: '+', label: 'Training hours' },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center md:items-start">
            <div className="w-25 h-[2px] bg-gray-300 mb-5"></div>
            <h3 className="text-3xl font-semibold">
              <CountUp end={item.number} duration={2.5} suffix={item.suffix} />
            </h3>
            <p className="text-sm text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
