// MainRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './App.css'
import Contact from './Components/Contact'; // This is your contact page component
import Navbar from './Components/Navbar';
import ReadyForSingIn from './Components/Ready'
import Footer from './Components/Footer'
import TestimonialCarousel from './Components/Testomonail'

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Contact" element={<>  
        
        <main className='bg-black mb-32'>  <Navbar/> <Contact /> </main> 
        <TestimonialCarousel/>
            <section className='bgImgBanner bgImage bg-repeat bg-cover bg-bottom  grayscale-50 '>
               <div className='w-full h-[85vh]  py-10 mt-24 mb-0 '><ReadyForSingIn/>  </div>
            </section>   <Footer/> 
            
            </> }  />
      </Routes>
    </Router>
  );
}
