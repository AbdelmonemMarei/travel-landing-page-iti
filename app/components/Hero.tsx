'use client';

import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
          {t.heroTitle}
        </h1>
        <p className={`text-xl sm:text-2xl text-gray-200 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t.heroSubtitle}
        </p>
        <button className="group inline-flex items-center px-8 py-4 bg-[#F18F01] text-white font-semibold rounded-lg hover:bg-[#e67e00] transition-all duration-300 transform hover:scale-105">
          <span className="mr-2">{t.startJourney}</span>
          {isRTL ? (
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          ) : (
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;