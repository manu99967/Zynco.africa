import { memo, useCallback } from 'react';
import { OptimizedImage } from './OptimizedImage';
import { HERO_CONTENT } from '../config/content';

export const Hero = memo(function Hero() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" aria-label="Hero section">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" aria-hidden="true"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {HERO_CONTENT.title}{' '}
              <span className="text-blue-600">{HERO_CONTENT.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {HERO_CONTENT.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Explore our solutions"
              >
                {HERO_CONTENT.cta.primary}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Contact us"
              >
                {HERO_CONTENT.cta.secondary}
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="/src/assets/images/hero-background.png"
                alt="Modern business technology workspace"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10 blur-2xl" aria-hidden="true"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-2xl" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
});
