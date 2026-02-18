import { MessageSquare, Shield, TrendingUp } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      id: 'service-bulk-sms',
      icon: MessageSquare,
      title: 'Bulk SMS & Business Messaging Solutions',
      description: 'Kenya\'s reliable enterprise SMS platform. Reach thousands of customers instantly with promotional messages, transactional alerts, OTP verification, and automated notifications via simple API integration.',
      features: [
        'Bulk SMS (Promotional & Transactional)',
        'Branded Sender IDs & Short Codes',
        'USSD Applications & Two-Way SMS',
        'OTP & Verification Messaging',
        'SMS API Integration for Business Systems'
      ],
      benefits: [
        'Instant customer reach',
        '95%+ delivery rate',
        'Real-time delivery reports',
        'Pay only for delivered messages'
      ],
      idealFor: 'Banks, MFIs, SACCOs, schools, hospitals, retailers, NGOs, and corporates in Kenya',
      imageUrl: '/images/service-communication.png'
    },
    {
      id: 'service-authentication',
      icon: Shield,
      title: 'Anti-Counterfeit & Authentication Solutions',
      description: 'Secure QR-code based authentication to protect documents, products, and brands while enabling instant verification.',
      features: [
        'Academic certificates and transcripts',
        'Letters and official correspondence',
        'Financial and legal documents',
        'Product authentication and brand protection',
        'Tamper-proof, secure QR codes'
      ],
      benefits: [
        'Eliminates document forgery',
        'Protects institutional credibility',
        'Enhances stakeholder trust',
        'Reduces verification costs'
      ],
      idealFor: 'Educational institutions, government agencies, banks, and enterprises',
      imageUrl: '/images/service-authentication.png'
    },
    {
      id: 'service-advisory',
      icon: TrendingUp,
      title: 'Business Advisory, Development & Market Support',
      description: 'Practical business advisory and market support services for entrepreneurs, SMEs, and growing enterprises.',
      features: [
        'Business strategy and growth planning',
        'Business setup and structuring support',
        'Market research and opportunity analysis',
        'Go-to-market and business development',
        'Process optimization and operational efficiency'
      ],
      benefits: [
        'Strategic clarity and direction',
        'Better decision-making',
        'Faster market entry',
        'Improved operational efficiency'
      ],
      idealFor: 'SMEs, startups, retail, education, agribusiness, and professional services',
      imageUrl: '/images/service-advisory.png'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-white to-silver-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mt-2 mb-4">
            Bulk SMS & Business Solutions in Kenya
          </h2>
          <p className="text-xl text-dark-500 max-w-3xl mx-auto">
            Enterprise-grade communication, document security, and business advisory services designed for Kenyan businesses
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
