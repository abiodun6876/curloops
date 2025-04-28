import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import Logo from './Logo';

const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Products', href: '#products' },
  
  { title: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <Logo />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-white hover:text-primary-300 font-montserrat transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}
          </nav>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-4 bg-primary-900">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-white hover:text-primary-300 font-montserrat py-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;