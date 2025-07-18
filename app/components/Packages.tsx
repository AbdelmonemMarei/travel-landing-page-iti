'use client';

import React from 'react';
import { Calendar, Users, Plane, Hotel } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Packages = () => {
  const { t, isRTL } = useLanguage();

  const packages = [
    {
      id: 1,
      title: isRTL ? 'باقة دبي الفاخرة' : 'Dubai Luxury Package',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      price: '$1,299',
      duration: isRTL ? '7 أيام' : '7 Days',
      people: isRTL ? '2 أشخاص' : '2 People',
      includes: isRTL ? 
        ['طيران ذهاب وإياب', 'فندق 5 نجوم', 'جولات سياحية', 'وجبات الإفطار'] :
        ['Round-trip flights', '5-star hotel', 'City tours', 'Breakfast included']
    },
    {
      id: 2,
      title: isRTL ? 'مغامرة باريس الرومانسية' : 'Paris Romance Adventure',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      price: '$1,899',
      duration: isRTL ? '10 أيام' : '10 Days',
      people: isRTL ? '2 أشخاص' : '2 People',
      includes: isRTL ? 
        ['طيران ذهاب وإياب', 'فندق بوتيك', 'جولة في برج إيفل', 'عشاء رومانسي'] :
        ['Round-trip flights', 'Boutique hotel', 'Eiffel Tower tour', 'Romantic dinner']
    },
    {
      id: 3,
      title: isRTL ? 'استكشاف طوكيو الثقافي' : 'Tokyo Cultural Explorer',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      price: '$2,199',
      duration: isRTL ? '12 أيام' : '12 Days',
      people: isRTL ? '2 أشخاص' : '2 People',
      includes: isRTL ? 
        ['طيران ذهاب وإياب', 'رايوكان تقليدي', 'جولات معابد', 'تجربة طعام'] :
        ['Round-trip flights', 'Traditional Ryokan', 'Temple tours', 'Food experience']
    },
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.travelPackages}
          </h2>
          <div className="w-24 h-1 bg-[#F18F01] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#F18F01] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {pkg.title}
                </h3>
                
                <div className="flex items-center justify-between mb-6 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{pkg.people}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className={`text-sm font-medium text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL ? 'يشمل:' : 'Includes:'}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        {index === 0 && <Plane className="w-4 h-4 mr-2 text-[#2E8BC0]" />}
                        {index === 1 && <Hotel className="w-4 h-4 mr-2 text-[#2E8BC0]" />}
                        {index > 1 && <div className="w-4 h-4 mr-2 flex items-center justify-center"><div className="w-2 h-2 bg-[#2E8BC0] rounded-full"></div></div>}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-3 bg-[#2E8BC0] text-white font-medium rounded-lg hover:bg-[#2570a0] transition-colors duration-200">
                  {t.bookNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;