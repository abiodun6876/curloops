import React from 'react';
import { products } from '../data/products';
import { Check } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-900">
            Our <span className="text-primary-500">Products</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-montserrat">
            Innovative solutions designed to meet modern challenges with efficiency and reliability.
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {product.status === 'coming-soon' && (
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-poppins">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-poppins font-semibold text-primary-900">
                  {product.name}
                </h3>
                <p className="text-gray-700 font-montserrat leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-poppins text-primary-700">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={20} className="text-primary-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-montserrat">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {product.status === 'available' ? (
                  <a 
                    href="#contact" 
                    className="inline-block mt-4 px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors duration-300 font-poppins"
                  >
                    Request Information
                  </a>
                ) : (
                  <button 
                    className="inline-block mt-4 px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md cursor-not-allowed font-poppins"
                    disabled
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;