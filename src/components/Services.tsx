import { MessageSquare, Shield, TrendingUp } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      icon: MessageSquare,
      title: 'Business Communication & Messaging Solutions',
      description: 'Enterprise-grade messaging solutions built on reliable infrastructure for security, performance, and seamless system integration.',
      features: [
        'Bulk SMS (Promotional & Transactional)',
        'Branded Sender IDs & Short Codes',
        'USSD Applications & Two-Way SMS',
        'OTP & Verification Messaging',
        'API Integration for Business Systems'
      ],
      benefits: [
        'Faster customer engagement',
        'Reduced communication costs',
        'Improved customer experience',
        'Higher conversion rates'
      ],
      idealFor: 'Banks, MFIs, SACCOs, schools, hospitals, retailers, NGOs, and corporates',
      imageUrl: '/images/service-communication.png'
    },
    {
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
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions designed for real-world impact, from communication and security to business growth
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
