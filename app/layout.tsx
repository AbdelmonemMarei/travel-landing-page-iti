import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TravelBooking - Explore the World with Ease',
  description: 'Book flights, hotels, and tours in one place. Your trusted travel partner for unforgettable journeys.',
  keywords: 'travel, booking, flights, hotels, tours, vacation, travel packages',
  authors: [{ name: 'TravelBooking' }],
  openGraph: {
    title: 'TravelBooking - Explore the World with Ease',
    description: 'Book flights, hotels, and tours in one place. Your trusted travel partner for unforgettable journeys.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}