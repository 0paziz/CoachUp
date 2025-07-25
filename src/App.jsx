import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Features from './Components/Features'
import CoachingPlanCard from './Components/Coaching'
import TestimonialCarousel from './Components/Testomonail'
import AboutSection from './Components/About'
import FAQ from './Components/FAQ'
import ReadyForSingIn from './Components/Ready'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

function App() {

  return (
    
     <>
  
     <main className='bgImage bg-repeat bg-cover bg-bottom '>
          <Navbar/>
  <div className='w-full h-screen flex items-end py-10 mt-5'>
         <Hero/>
  </div> </main>

  <Features/>
  <CoachingPlanCard/>
 <TestimonialCarousel/>
 <AboutSection/>
  <FAQ/>

 
    <section className='bgImgBanner bgImage bg-repeat bg-cover bg-bottom  grayscale-50 '>
       <div className='w-full h-[85vh]  py-10 mt-24 mb-0 '>
    
      <ReadyForSingIn/>
   </div>
    </section>
    <Footer/>
  
     </>
  )
}

export default App
