import { Heart, Zap, Shield, Users } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We build trust through transparency and accountability'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We apply technology creatively to solve real problems'
    },
    {
      icon: Heart,
      title: 'Reliability',
      description: 'Our systems and partnerships are built to last'
    },
    {
      icon: Users,
      title: 'Customer-Centricity',
      description: 'Every solution starts with the client\'s need'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
