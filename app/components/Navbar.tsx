'use client';

import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'destinations', href: '#destinations' },
    { key: 'packages', href: '#packages' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className={`flex items-center order-1`}>
            <span className="text-2xl font-bold text-[#2E8BC0]">
              {isRTL ? 'حجز السفر' : 'TravelBooking'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 order-2 ${isRTL ? ' space-x-reverse ' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-[#2E8BC0] transition-colors duration-200 font-medium"
              >
                {t[item.key as keyof typeof t]}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className={`flex items-center space-x-4 order-3 ${isRTL ? 'space-x-reverse ' : ''}`}>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#F18F01] text-white hover:bg-[#e67e00] transition-colors duration-200"
            >
              <Globe size={16} />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-[#2E8BC0] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {t[item.key as keyof typeof t]}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;