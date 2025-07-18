'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: isRTL ? 'أحمد محمد' : 'John Smith',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      review: isRTL ? 
        'تجربة رائعة! تم تنظيم الرحلة بشكل مثالي وكانت الخدمة ممتازة. أنصح بشدة!' :
        'Amazing experience! The trip was perfectly organized and the service was excellent. Highly recommend!',
      location: isRTL ? 'الرياض، السعودية' : 'New York, USA'
    },
    {
      id: 2,
      name: isRTL ? 'فاطمة أحمد' : 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      review: isRTL ? 
        'خدمة عملاء متميزة ودعم على مدار الساعة. سأحجز معهم مرة أخرى بالتأكيد!' :
        'Outstanding customer service and 24/7 support. Will definitely book with them again!',
      location: isRTL ? 'دبي، الإمارات' : 'London, UK'
    },
    {
      id: 3,
      name: isRTL ? 'محمد علي' : 'Mike Wilson',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      review: isRTL ? 
        'أفضل موقع لحجز الرحلات! الأسعار معقولة والخدمة رائعة. شكرًا لكم!' :
        'Best travel booking site! Great prices and amazing service. Thank you!',
      location: isRTL ? 'القاهرة، مصر' : 'Sydney, Australia'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.testimonials}
          </h2>
          <div className="w-24 h-1 bg-[#F18F01] mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className={`text-lg text-gray-700 mb-6 leading-relaxed italic text-center`}>
                "{testimonials[currentSlide].review}"
              </p>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-gray-600">{testimonials[currentSlide].location}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50`}
          >
            {isRTL ? <ChevronRight className="w-6 h-6 text-gray-600" /> : <ChevronLeft className="w-6 h-6 text-gray-600" />}
          </button>
          
          <button
            onClick={nextSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-4' : 'right-4'} bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50`}
          >
            {isRTL ? <ChevronLeft className="w-6 h-6 text-gray-600" /> : <ChevronRight className="w-6 h-6 text-gray-600" />}
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-[#2E8BC0]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;