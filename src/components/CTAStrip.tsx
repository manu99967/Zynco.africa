'use client';

import { useCallback } from 'react';
import { MessageSquare, Smartphone, Shield } from 'lucide-react';

export function CTAStrip() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const ctas = [
    {
      question: 'Need to Reach Customers Instantly?',
      action: 'Use Bulk SMS',
      icon: MessageSquare,
      targetId: 'service-bulk-sms',
      highlightColor: 'text-gold-500',
    },
    {
      question: 'Want Customers to Interact With Your Business?',
      action: 'Use Short Code / USSD',
      icon: Smartphone,
      targetId: 'service-bulk-sms',
      highlightColor: 'text-gold-500',
    },
    {
      question: 'Want to Protect Your Brand from Fakes?',
      action: 'Use QR Code Authentication',
      icon: Shield,
      targetId: 'service-authentication',
      highlightColor: 'text-gold-500',
    },
  ];

  return (
    <section className="py-12 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {ctas.map((cta, index) => {
            const Icon = cta.icon;
            return (
              <div 
                key={index}
                className="bg-dark-700 rounded-xl p-6 border border-dark-600 hover:border-gold-500 transition-all group cursor-pointer"
                onClick={() => scrollToSection(cta.targetId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    scrollToSection(cta.targetId);
                  }
                }}
                aria-label={`${cta.question} ${cta.action}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <p className="text-white text-sm md:text-base mb-2">
                      {cta.question}
                    </p>
                    <p className={`font-semibold ${cta.highlightColor} hover:underline`}>
                      {cta.action} →
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
