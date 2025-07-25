'use client'
import React from 'react'
import { motion } from 'framer-motion'

const aboutSections = [
  {
    text: (
      <>
        I started my triathlon journey <br />
        <span className="text-white font-bold">struggling with balance and technique</span>.
        <br />
        <span className="text-gray-400">
          Now, I guide others to achieve their full potential.
        </span>
      </>
    ),
    image: '/images/coach4.jpg',
  },
  {
    text: (
      <>
        I know what it's like to feel <br />
        <span className="text-white font-bold">overwhelmed and stuck</span>.
        <br />
        <span className="text-gray-400">
          That's why I help athletes find structure and progress.
        </span>
      </>
    ),
    image: '/images/c5.jpg',
  },
  {
    text: (
      <>
        Coaching is my passion. <br />
        <span className="text-white font-bold">Every athlete deserves a guide</span>.
        <br />
        <span className="text-gray-400">
          Let's unlock your potential, one session at a time.
        </span>
      </>
    ),
    image: '/images/coach3.jpg',
  },
]

export default function AboutScrollSection() {
  return (
    <section id='about'
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white mt-20"
      style={{ scrollBehavior: 'smooth' }}
    >
      {aboutSections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="snap-start min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-12 md:px-20 py-20"
        >
          {/* Text */}
          <div className="flex-1 max-w-xl text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed mb-4">
              {section.text}
            </h2>
          </div>

          {/* Image */}
          <motion.div
            className="flex justify-end w-full lg:w-auto"
            initial={{ scale: 0.95, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={section.image}
              alt={`About ${index + 1}`}
              className="rounded-2xl object-cover shadow-xl border border-gray-700 grayscale
                         w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-64 sm:h-72 md:h-80 lg:h-[28rem]"
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  )
}
