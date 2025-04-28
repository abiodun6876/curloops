import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-poppins font-semibold">
              <span className="text-white">Curloops</span>
              <span className="text-primary-400"> Innovations</span>
            </h3>
            <p className="font-montserrat text-gray-300">
              Shaping Tomorrow with Infinite Innovation
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/minfinity241650" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Quick Links</h3>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-primary-400 transition-colors">Products</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors">Projects</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Services</h3>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Product Manufacturing</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Software Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Educational Infrastructure</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">R&D Consulting</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Contact Us</h3>
            <ul className="space-y-3 font-montserrat">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Lagos State, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+2348168766206</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300"> abiodunmosesakinpelu@gmail.com</span>
                
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 font-montserrat text-sm">
            &copy; {year} Curloops Innovations Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;