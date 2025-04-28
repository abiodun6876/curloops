import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here in a real implementation
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-900">
            Contact <span className="text-primary-500">Us</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-montserrat">
            Reach out to discuss how our innovative solutions can address your challenges.
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-poppins font-semibold text-primary-900 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 font-montserrat">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-montserrat"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 font-montserrat">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-montserrat"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 font-montserrat">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-montserrat"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Information">Product Information</option>
                  <option value="Service Request">Service Request</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Career">Career Information</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 font-montserrat">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-montserrat"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-primary-500 text-white font-medium rounded-md shadow-md hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center font-poppins"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-poppins font-semibold text-primary-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-poppins font-medium text-primary-900">Address</h4>
                    <p className="text-gray-600 font-montserrat mt-1">
                      Lagos State, Nigeria<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-poppins font-medium text-primary-900">Phone</h4>
                    <p className="text-gray-600 font-montserrat mt-1">
                      +2348168766206
                      
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-poppins font-medium text-primary-900">Email</h4>
                    <p className="text-gray-600 font-montserrat mt-1">
                      abiodunmosesakinpelu@gmail.com<br />
                      info@curloops.com<br />
                      support@curloops.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 h-64">
              <h3 className="text-2xl font-poppins font-semibold text-primary-900 mb-4">
                Our Location
              </h3>
              <div className="h-full bg-gray-200 rounded-md overflow-hidden">
                {/* Map would be embedded here in a real implementation */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 font-montserrat">
                  Interactive Map Would Appear Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;