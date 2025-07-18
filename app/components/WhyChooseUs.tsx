'use client';

import React from 'react';
import { DollarSign, Clock, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: DollarSign,
      title: t.bestPriceGuarantee,
      description: t.bestPriceDesc,
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: t.support24_7,
      description: t.supportDesc,
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: t.securePayments,
      description: t.secureDesc,
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: t.trustedTravelers,
      description: t.trustedDesc,
      color: 'text-orange-600'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.whyChooseUs}
          </h2>
          <div className="w-24 h-1 bg-[#F18F01] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className={`text-xl font-semibold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {feature.title}
              </h3>
              
              <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;