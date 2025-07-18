'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Translation {
  // Navigation
  home: string;
  destinations: string;
  packages: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  startJourney: string;
  
  // Destinations
  topDestinations: string;
  
  // Packages
  travelPackages: string;
  bookNow: string;
  perPerson: string;
  
  // Why Choose Us
  whyChooseUs: string;
  bestPriceGuarantee: string;
  support24_7: string;
  securePayments: string;
  trustedTravelers: string;
  bestPriceDesc: string;
  supportDesc: string;
  secureDesc: string;
  trustedDesc: string;
  
  // Testimonials
  testimonials: string;
  customerReviews: string;
  
  // Contact
  getInTouch: string;
  name: string;
  email: string;
  message: string;
  sendMessage: string;
  
  // Footer
  aboutUs: string;
  termsConditions: string;
  privacyPolicy: string;
  copyright: string;
  quickLinks: string;
  followUs: string;
}

const translations: Record<string, Translation> = {
  en: {
    home: 'Home',
    destinations: 'Destinations',
    packages: 'Packages',
    contact: 'Contact',
    heroTitle: 'Explore the world with ease',
    heroSubtitle: 'Book flights, hotels, and tours in one place',
    startJourney: 'Start Your Journey',
    topDestinations: 'Top Destinations',
    travelPackages: 'Travel Packages',
    bookNow: 'Book Now',
    perPerson: 'per person',
    whyChooseUs: 'Why Choose Us',
    bestPriceGuarantee: 'Best Price Guarantee',
    support24_7: '24/7 Support',
    securePayments: 'Secure Payments',
    trustedTravelers: 'Trusted by 10k+ Travelers',
    bestPriceDesc: 'We guarantee the best prices on all our travel packages',
    supportDesc: 'Round-the-clock customer support for all your travel needs',
    secureDesc: 'Your payments are protected with industry-leading security',
    trustedDesc: 'Join thousands of satisfied travelers who trust us',
    testimonials: 'What Our Customers Say',
    customerReviews: 'Customer Reviews',
    getInTouch: 'Get in Touch',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    aboutUs: 'About Us',
    termsConditions: 'Terms & Conditions',
    privacyPolicy: 'Privacy Policy',
    copyright: '© 2024 TravelBooking. All rights reserved.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
  },
  ar: {
    home: 'الرئيسية',
    destinations: 'الوجهات',
    packages: 'الحزم',
    contact: 'اتصل بنا',
    heroTitle: 'اكتشف العالم بكل سهولة',
    heroSubtitle: 'احجز الطيران والفنادق والرحلات في مكان واحد',
    startJourney: 'ابدأ رحلتك',
    topDestinations: 'أفضل الوجهات',
    travelPackages: 'حزم السفر',
    bookNow: 'احجز الآن',
    perPerson: 'للشخص الواحد',
    whyChooseUs: 'لماذا تختارنا',
    bestPriceGuarantee: 'ضمان أفضل الأسعار',
    support24_7: 'دعم 24/7',
    securePayments: 'مدفوعات آمنة',
    trustedTravelers: 'موثوق من قبل أكثر من 10 آلاف مسافر',
    bestPriceDesc: 'نضمن أفضل الأسعار على جميع حزم السفر الخاصة بنا',
    supportDesc: 'دعم العملاء على مدار الساعة لجميع احتياجات السفر',
    secureDesc: 'مدفوعاتك محمية بأحدث تقنيات الأمان',
    trustedDesc: 'انضم إلى آلاف المسافرين الراضين الذين يثقون بنا',
    testimonials: 'ماذا يقول عملاؤنا',
    customerReviews: 'آراء العملاء',
    getInTouch: 'تواصل معنا',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    aboutUs: 'من نحن',
    termsConditions: 'الشروط والأحكام',
    privacyPolicy: 'سياسة الخصوصية',
    copyright: '© 2024 حجز السفر. جميع الحقوق محفوظة.',
    quickLinks: 'روابط سريعة',
    followUs: 'تابعنا',
  },
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translation;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setIsRTL(language === 'ar');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};