'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className={`text-2xl font-bold text-[#2E8BC0] mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {isRTL ? 'حجز السفر' : 'TravelBooking'}
            </h3>
            <p className={`text-gray-400 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {isRTL ? 
                'نحن شركة رائدة في مجال السفر والسياحة، نقدم أفضل الخدمات لجعل رحلتك لا تُنسى.' :
                'We are a leading travel company providing the best services to make your journey unforgettable.'
              }
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-[#2E8BC0] cursor-pointer transition-colors duration-200" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-[#2E8BC0] cursor-pointer transition-colors duration-200" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-[#2E8BC0] cursor-pointer transition-colors duration-200" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-[#2E8BC0] cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className={`text-gray-400 hover:text-white transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#destinations" className={`text-gray-400 hover:text-white transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.destinations}
                </a>
              </li>
              <li>
                <a href="#packages" className={`text-gray-400 hover:text-white transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.packages}
                </a>
              </li>
              <li>
                <a href="#contact" className={`text-gray-400 hover:text-white transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {isRTL ? 'قانوني' : 'Legal'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`text-gray-400 hover:text-white transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.termsConditions}
                </a>
              </li>
              <li>
                <a href="#" className={`text-gray-400 hover:text-white transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="#" className={`text-gray-400 hover:text-white transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.aboutUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.contact}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#2E8BC0] mr-3" />
                <span className="text-gray-400 text-sm">info@travelbooking.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#2E8BC0] mr-3" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;