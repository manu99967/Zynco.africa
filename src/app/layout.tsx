import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics, GoogleTagManager } from '../components/Analytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://zynco.africa'),
  title: 'Bulk SMS Kenya | Business SMS Solutions | ZYNCO Africa',
  description: 'Leading Bulk SMS provider in Kenya. Enterprise SMS solutions for businesses, banks, schools, hospitals & NGOs. Branded Sender IDs, OTP verification, USSD & API integration. Trusted by businesses across Kenya.',
  keywords: [
    // Primary keywords
    'bulk SMS Kenya',
    'bulk SMS Nairobi',
    'SMS marketing Kenya',
    'business SMS solutions',
    'enterprise SMS',
    // Service-specific
    'branded sender ID Kenya',
    'OTP verification SMS',
    'SMS API integration',
    'USSD applications Kenya',
    'transactional SMS',
    'promotional SMS Kenya',
    // Industry-specific
    'SMS for banks Kenya',
    'SMS for schools Kenya',
    'SMS for hospitals Kenya',
    'SMS for NGOs Kenya',
    'corporate SMS solutions',
    // Location
    'SMS provider Nairobi',
    'SMS services East Africa',
    'Kenya business communication',
    // Related
    'document authentication Kenya',
    'business advisory Kenya',
    'ZYNCO Africa'
  ],
  authors: [{ name: 'ZYNCO Systems Ltd' }],
  creator: 'ZYNCO Systems Ltd',
  publisher: 'ZYNCO Systems Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Bulk SMS Kenya | Enterprise SMS Solutions | ZYNCO Africa',
    description: 'Kenya\'s trusted Bulk SMS provider. Branded Sender IDs, OTP verification, USSD & API integration for businesses, banks, schools & hospitals.',
    url: 'https://zynco.africa',
    siteName: 'ZYNCO Africa',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/images/zynco-logo.png',
        width: 1200,
        height: 630,
        alt: 'ZYNCO Africa - Bulk SMS & Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulk SMS Kenya | Enterprise SMS Solutions | ZYNCO Africa',
    description: 'Kenya\'s trusted Bulk SMS provider. Branded Sender IDs, OTP verification, USSD & API integration.',
    images: ['/images/zynco-logo.png'],
  },
  alternates: {
    canonical: 'https://zynco.africa',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/zynco-logo.png" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleAnalytics />
        <GoogleTagManager />
        <div className="min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
