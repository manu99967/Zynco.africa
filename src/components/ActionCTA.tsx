'use client';

import { MessageSquare, Calendar, DollarSign } from 'lucide-react';

export function ActionCTA() {
  const ctas = [
    {
      label: 'Get Started with Bulk SMS',
      icon: MessageSquare,
      href: '#contact',
      primary: true,
    },
    {
      label: 'Book a Demo',
      icon: Calendar,
      href: '#contact',
      primary: false,
    },
    {
      label: 'Request Pricing',
      icon: DollarSign,
      href: '#contact',
      primary: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-zynco-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join hundreds of businesses across Kenya who trust ZYNCO for their communication needs.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {ctas.map((cta) => {
            const Icon = cta.icon;
            return (
              <button
                key={cta.label}
                onClick={scrollToContact}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base
                  transition-all duration-300 transform hover:scale-105
                  ${cta.primary
                    ? 'bg-zynco-gold text-zynco-dark hover:bg-yellow-500 shadow-lg shadow-zynco-gold/20'
                    : 'bg-transparent border-2 border-zynco-gold text-zynco-gold hover:bg-zynco-gold hover:text-zynco-dark'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                {cta.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
