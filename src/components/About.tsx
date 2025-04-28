import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-900">
            About <span className="text-primary-500">Curloops</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Curloops Innovation Lab" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-full -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-poppins font-semibold text-primary-900">
              Our Story
            </h3>
            <p className="text-gray-700 font-montserrat leading-relaxed">
              Curloops Innovations was founded with a vision to create technological solutions inspired by mathematical principles and innovative thinking. Our name represents the infinite possibilities of technology when guided by creative problem-solving and scientific rigor.
            </p>
            <p className="text-gray-700 font-montserrat leading-relaxed">
              Starting as a small R&D lab, we've grown into a multifaceted technology company operating across various sectors including manufacturing, software, defense, agriculture, and education. Our collaborative approach brings together experts from diverse fields to create integrated solutions for complex challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-poppins font-semibold text-primary-900 mb-2">Our Vision</h4>
                <p className="text-gray-700 font-montserrat text-sm">To lead technological innovation that creates meaningful impact across industries and improves lives globally.</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-poppins font-semibold text-primary-900 mb-2">Our Mission</h4>
                <p className="text-gray-700 font-montserrat text-sm">To develop advanced, sustainable technology solutions through interdisciplinary collaboration and cutting-edge research.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-poppins font-semibold text-primary-900">
              Our Core Values
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries to create solutions that didn\'t exist before.',
                color: 'bg-primary-100 border-primary-500'
              },
              {
                title: 'Collaboration',
                description: 'Working across disciplines to create integrated, holistic solutions.',
                color: 'bg-secondary-100 border-secondary-500'
              },
              {
                title: 'Excellence',
                description: 'Maintaining the highest standards in everything we design and build.',
                color: 'bg-accent-100 border-accent-500'
              },
              {
                title: 'Sustainability',
                description: 'Creating technology that benefits humanity while preserving our planet.',
                color: 'bg-primary-100 border-primary-500'
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${value.color} border-l-4 transition-transform duration-300 hover:-translate-y-2`}
              >
                <h4 className="font-poppins font-semibold text-primary-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-700 font-montserrat">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;