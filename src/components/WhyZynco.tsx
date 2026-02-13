import { Target, Lightbulb, Shield as ShieldIcon, Users, Award } from 'lucide-react';

export function WhyZynco() {
  const reasons = [
    {
      icon: Target,
      title: 'Solutions-First Approach',
      description: 'We focus on outcomes, not tools. Every solution is designed to deliver measurable impact and operational efficiency.'
    },
    {
      icon: ShieldIcon,
      title: 'Secure & Reliable Systems',
      description: 'Built for real-world business use with enterprise-grade security and reliability you can depend on.'
    },
    {
      icon: Lightbulb,
      title: 'Technology & Advisory Combined',
      description: 'Get technology and business advisory under one roof, ensuring strategy aligns with implementation.'
    },
    {
      icon: Users,
      title: 'Scalable for All Organizations',
      description: 'From SMEs to large institutions, our solutions scale with your growth and evolving needs.'
    },
    {
      icon: Award,
      title: 'Professional Support',
      description: 'Responsive, reliable support you can count on. We partner with you for long-term success.'
    }
  ];

  return (
    <section id="why-zynco" className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose ZYNCO
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We deliver solutions that work in the real world, backed by expertise and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all"
            >
              <div className="p-3 bg-white/20 rounded-lg w-fit mb-4">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-blue-100 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
