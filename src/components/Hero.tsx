import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-primary-900 overflow-hidden"
    >
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-900/90"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight animate-fade-in">
            Shaping Tomorrow with <br />
            <span className="text-primary-400">Infinite Innovation</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-montserrat animate-slide-up">
            Curloops Innovations leads the way in advanced technology solutions across multiple industries, from manufacturing to defense, software to agriculture.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="#services"
              className="px-8 py-3 bg-primary-500 text-white font-medium rounded-md shadow-lg hover:bg-primary-600 transition-all duration-300 text-base font-poppins"
            >
              Explore Our Services
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-900 transition-all duration-300 text-base font-poppins"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} className="text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
