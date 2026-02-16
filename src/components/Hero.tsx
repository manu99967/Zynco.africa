'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { HERO_CONTENT } from '../config/content';

export function Hero() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden" aria-label="Hero section">
      {/* Background with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-silver-50 via-white to-silver-100" aria-hidden="true"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-800 mb-6">
              {HERO_CONTENT.title}{' '}
              <span className="text-gold-500">{HERO_CONTENT.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-400 mb-8 leading-relaxed">
              {HERO_CONTENT.description}
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-dark-500">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted by businesses across Kenya
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                API Integration
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Branded Sender ID
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-gold-500 text-dark-900 px-6 py-3 rounded-lg hover:bg-gold-400 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 w-full sm:w-auto font-semibold"
                aria-label="Explore our SMS solutions"
              >
                {HERO_CONTENT.cta.primary}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-dark-800 text-dark-800 px-6 py-3 rounded-lg hover:bg-dark-800 hover:text-white transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-dark-800 focus:ring-offset-2 w-full sm:w-auto font-medium"
                aria-label="Contact us"
              >
                {HERO_CONTENT.cta.secondary}
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-silver-200">
              <Image
                src="/images/hero-background.png"
                alt="ZYNCO Bulk SMS and Business Solutions - Enterprise messaging platform for Kenya businesses"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Decorative elements with brand colors */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-400 rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-dark-600 rounded-full opacity-10 blur-2xl" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
