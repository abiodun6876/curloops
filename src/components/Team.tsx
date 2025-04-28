import React from 'react';
import { team } from '../data/team';

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-900">
            Our <span className="text-primary-500">Team</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-montserrat">
            Meet the experts behind our innovative solutions and groundbreaking technologies.
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-primary-900">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-montserrat font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 font-montserrat text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;