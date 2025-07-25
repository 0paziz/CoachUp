'use client'
import React, { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'James Carter',
    role: 'Journalist',
    text: 'Training with a coach who really knows the sport has been a game-changer. I’ve shaved minutes off my time and am in the best shape of my life.',
    avatar: './avatar/pr3.jpg',
  },
  {
    name: 'Emily Rivera',
    role: 'Triathlete',
    text: 'The personalized training helped me crush my personal record. I feel stronger, faster, and more confident.',
    avatar: './avatar/pr5.jpg',
  },
  {
    name: 'Kaafi Hussien',
    role: 'Footballer',
    text: 'In just a few weeks, I’ve seen improvements I never thought possible. The coaching has been top-notch.',
    avatar: './avatar/cabud.jpg',
  },
  {
    name: 'Sarah Kim',
    role: 'Fitness Blogger',
    text: 'Best investment I’ve made in myself. The progress I’ve made speaks for itself!',
    avatar: './avatar/pr2.jpg',
  },
]

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0)

  
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const handleAvatarClick = (index) => {
    setActive(index)
  }

  const { name, role, text, avatar } = testimonials[active]

  return (
    <section id='reviews' className="text-center py-12 px-4 mt-16 mb-40 bg-white">
      {/* Stars */}
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-500 fill-yellow-500 w-5 h-5 mx-0.5" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-xl md:text-3xl font-medium max-w-3xl mx-auto leading-relaxed text-black transition-all duration-500 ease-in-out">
        {text}
      </p>

      {/* Name */}
      <p className="mt-6 text-gray-600">{name}, {role}</p>

      {/* Avatar group */}
      <div className="mt-6 flex justify-center gap-4">
        {testimonials.map((person, i) => (
          <img
            key={i}
            src={person.avatar}
            alt={`Avatar ${i}`}
            onClick={() => handleAvatarClick(i)}
            className={`w-10 h-10 rounded-full object-cover cursor-pointer transition-all duration-300 
              ${i === active ? 'ring-2 ring-black scale-110' : 'opacity-70 hover:opacity-100'}`}
          />
        ))}
      </div>
    </section>
  )
}
