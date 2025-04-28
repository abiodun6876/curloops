import React, { useState } from 'react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-900">
            Our <span className="text-primary-500">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-montserrat">
            Explore our portfolio of successful implementations across various industries.
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } font-poppins`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-poppins">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 font-montserrat mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-montserrat">
                    Completed: {project.year}
                  </span>
                  <a
                    href="#contact"
                    className="text-primary-500 hover:text-primary-700 font-medium font-poppins transition-colors"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;