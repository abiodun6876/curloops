import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Transform Your Industry with Innovation?
          </h2>
          <p className="text-lg text-gray-200 font-montserrat mb-10 max-w-3xl mx-auto">
            Partner with Curloops Innovations to leverage cutting-edge technology and expert solutions tailored to your unique challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact"
              className="px-8 py-3 bg-white text-primary-900 font-medium rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300 text-base font-poppins"
            >
              Contact Us Today
            </a>
            <a 
              href="#services"
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300 text-base font-poppins"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;