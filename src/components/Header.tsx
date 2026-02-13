import { useState, useEffect, useCallback, memo } from 'react';
import { SITE_CONFIG } from '../config/content';

export const Header = memo(function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/95 backdrop-blur-sm'
    } border-b border-gray-200`} role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-6" aria-label="ZYNCO Home">
            <img src="/images/zynco-logo.png" alt="ZYNCO Logo" width="50" height="50" className="object-contain" />
            <div className="flex flex-col gap-0.5">
              <div className="text-lg font-bold text-gray-900 leading-tight tracking-wide">{SITE_CONFIG.name}</div>
              <div className="text-xs text-gray-600 hidden sm:block tracking-wide">{SITE_CONFIG.tagline}</div>
            </div>
          </a>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

    </header>
  );
});