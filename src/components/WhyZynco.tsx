export function WhyZynco() {
  const reasons = [
    {
      title: 'Local Expertise',
      description: 'Deep understanding of East African markets and business dynamics.',
      icon: '🌍',
    },
    {
      title: 'Technology + Advisory',
      description: 'Unique combination of technical solutions and business guidance.',
      icon: '💡',
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully served organizations across various sectors.',
      icon: '✅',
    },
    {
      title: 'Reliable Support',
      description: 'Dedicated support team ensuring smooth operations.',
      icon: '🤝',
    },
  ];

  return (
    <section id="why-zynco" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wide">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mt-2 mb-4">
            Why Choose ZYNCO for Your SMS & Business Needs?
          </h2>
          <p className="text-xl text-dark-500 max-w-3xl mx-auto">
            We combine technology expertise with practical business understanding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-silver-50 to-white p-6 rounded-xl border border-silver-200 hover:border-gold-400 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-dark-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors">
                <span className="text-2xl">{reason.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-800 mb-2">{reason.title}</h3>
              <p className="text-dark-500">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
