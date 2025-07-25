
import React, { useRef } from 'react';
import { FaArrowUpRightFromSquare, FaPhone, FaEnvelope } from 'react-icons/fa6';

export default function Contact() {
  const formRef = useRef();

     const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset(); 
  };


  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Section */}
        <div className="space-y-6">
          <img
            src="./images/coach4.jpg" 
            alt="Profile"
            className="w-14 h-14 rounded-full"
          />
          <h1 className="text-5xl font-semibold leading-tight">
            Let’s get<br />in touch
          </h1>
          <p className="text-sm text-gray-300">
            Ready to take your triathlon performance to the next level?
            Reach out today and let’s create a personalized training plan for you.
          </p>
          <hr className="border-gray-700" />
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <FaPhone className="text-white" />
              <span>+123456789</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <span>info@example.com</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 rounded-xl space-y-4 bg-[#111]" >
        <form ref={formRef} onSubmit={handleSubmit}>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Name */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full mt-1 px-4 py-2 text-white rounded-md border border-transparent focus:border-gray-400 focus:outline-none transition-all duration-200"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full mt-1 px-4 py-2 text-white rounded-md border border-transparent focus:border-gray-400 focus:outline-none transition-all duration-200"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium">
                Phone <span className="text-gray-300">(optional)</span>
              </label>
              <input
                type="tel"
                placeholder="+123456789"
                className="w-full mt-1 px-4 py-2 text-white rounded-md border border-transparent focus:border-gray-400 focus:outline-none transition-all duration-200"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              />
            </div>

            {/* Coaching Plan */}
            <div>
              <label className="text-sm font-medium">
                Coaching plan <span className="text-gray-300">(optional)</span>
              </label>
              <select
                className="w-full mt-1 px-4 py-2  text-white rounded-md border border-transparent focus:border-gray-400 focus:outline-none transition-all duration-200"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <option>Premium</option>
                <option>Standard</option>
                <option>Basic</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              placeholder="I need..."
              className="w-full mt-1 px-4 py-2 text-white resize-none rounded-md border border-transparent focus:border-gray-400 focus:outline-none transition-all duration-200"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              rows={5}
            />
          </div>

          {/* Submit Button */}
          <button type='submit' className="w-full mt-4 cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-all">
            Submit form
            <FaArrowUpRightFromSquare />
          </button>
            </form>
        </div>
        
      </div>
    </section>
  );
}
