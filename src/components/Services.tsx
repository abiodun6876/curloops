import React from 'react';
import { services } from '../data/services';
import { Factory, Code, School, LeafyGreen, Car, Plane, Shield, Microscope } from 'lucide-react';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'factory':
      return <Factory size={36} className="text-primary-500" />;
    case 'code':
      return <Code size={36} className="text-primary-500" />;
    case 'school':
      return <School size={36} className="text-primary-500" />;
    case 'leafy-green':
      return <LeafyGreen size={36} className="text-primary-500" />;
    case 'car':
      return <Car size={36} className="text-primary-500" />;
    case 'plane':
      return <Plane size={36} className="text-primary-500" />;
    case 'shield':
      return <Shield size={36} className="text-primary-500" />;
    case 'microscope':
      return <Microscope size={36} className="text-primary-500" />;
    default:
      return <Factory size={36} className="text-primary-500" />;
  }
};

const Services: React.FC = () => {
  const renderDetail = (detail: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(detail)) !== null) {
      if (match.index > lastIndex) {
        parts.push(detail.substring(lastIndex, match.index));
      }
      parts.push(
        <a
          key={match[2]}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 underline hover:text-primary-700"
        >
          {match[1]}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < detail.length) {
      parts.push(detail.substring(lastIndex));
    }

    return parts;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 leading-tight font-poppins animate-fade-in">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-montserrat animate-slide-up">
            Discover our diverse range of technology-driven solutions crafted to shape a smarter, greener future.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mx-auto mb-6 shadow-md">
                {getIconComponent(service.icon)}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-primary-900 text-center mb-4 font-poppins">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm text-center font-montserrat mb-6">
                {service.description}
              </p>

              {/* Details List */}
              <ul className="space-y-2 text-gray-600 text-sm font-montserrat">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span>{renderDetail(detail)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
