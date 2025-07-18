'use client';

import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Destinations = () => {
  const { t, isRTL } = useLanguage();

  const destinations = [
    {
      id: 1,
      name: isRTL ? 'دبي' : 'Dubai',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: isRTL ? 'مدينة الأحلام والتسوق' : 'City of dreams and shopping',
      rating: 4.8,
      price: '$299'
    },
    {
      id: 2,
      name: isRTL ? 'باريس' : 'Paris',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: isRTL ? 'مدينة الحب والرومانسية' : 'City of love and romance',
      rating: 4.9,
      price: '$599'
    },
    {
      id: 3,
      name: isRTL ? 'طوكيو' : 'Tokyo',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: isRTL ? 'مدينة التكنولوجيا والثقافة' : 'City of technology and culture',
      rating: 4.7,
      price: '$899'
    },
    {
      id: 4,
      name: isRTL ? 'لندن' : 'London',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: isRTL ? 'مدينة التاريخ والثقافة' : 'City of history and culture',
      rating: 4.6,
      price: '$699'
    },
    {
      id: 5,
      name: isRTL ? 'نيويورك' : 'New York',
      image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: isRTL ? 'المدينة التي لا تنام' : 'The city that never sleeps',
      rating: 4.8,
      price: '$799'
    },
    {
      id: 6,
      name: isRTL ? 'سنغافورة' : 'Singapore',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: isRTL ? 'مدينة الحدائق والتسوق' : 'Garden city and shopping',
      rating: 4.9,
      price: '$599'
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.topDestinations}
          </h2>
          <div className="w-24 h-1 bg-[#F18F01] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                  <span className="text-2xl font-bold text-[#2E8BC0]">{destination.price}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{destination.description}</span>
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

export default Destinations;