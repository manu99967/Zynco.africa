import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '../components/Analytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZYNCO - Smart Business Solutions',
  description: 'We partner with enterprises, institutions, and growing businesses to solve real operational challenges using secure technology, reliable systems, and practical business advisory support.',
  keywords: ['business solutions', 'SMS solutions', 'authentication', 'business advisory', 'Kenya'],
  authors: [{ name: 'ZYNCO AFRICA' }],
  openGraph: {
    title: 'ZYNCO - Smart Business Solutions',
    description: 'We partner with enterprises, institutions, and growing businesses to solve real operational challenges.',
    url: 'https://zynco.africa',
    siteName: 'ZYNCO',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZYNCO - Smart Business Solutions',
    description: 'We partner with enterprises, institutions, and growing businesses to solve real operational challenges.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleAnalytics />
        <GoogleTagManager />
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
