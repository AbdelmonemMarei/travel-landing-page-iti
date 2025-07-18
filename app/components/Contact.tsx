'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.getInTouch}
          </h2>
          <div className="w-24 h-1 bg-[#F18F01] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-semibold text-gray-900 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {isRTL ? 'تواصل معنا' : 'Get In Touch'}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2E8BC0] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className={`ml-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-gray-600">{isRTL ? 'البريد الإلكتروني' : 'Email'}</p>
                  <p className="text-lg font-medium text-gray-900">info@travelbooking.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2E8BC0] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className={`ml-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-gray-600">{isRTL ? 'الهاتف' : 'Phone'}</p>
                  <p className="text-lg font-medium text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2E8BC0] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className={`ml-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-gray-600">{isRTL ? 'العنوان' : 'Address'}</p>
                  <p className="text-lg font-medium text-gray-900">
                    {isRTL ? 'شارع الأمير محمد بن عبدالعزيز، الرياض' : '123 Travel Street, New York, NY 10001'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8BC0] focus:border-transparent transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8BC0] focus:border-transparent transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8BC0] focus:border-transparent transition-colors duration-200 resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#2E8BC0] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2570a0] transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>{t.sendMessage}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;