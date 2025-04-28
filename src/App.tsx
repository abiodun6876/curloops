import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Projects from './components/Projects';
import Team from './components/Team';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  return (
    <div className="font-montserrat">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      
      
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;