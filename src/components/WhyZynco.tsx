export function WhyZynco() {
  const reasons = [
    {
      title: 'Local Expertise',
      description: 'Deep understanding of East African markets and business dynamics.',
    },
    {
      title: 'Technology + Advisory',
      description: 'Unique combination of technical solutions and business guidance.',
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully served organizations across various sectors.',
    },
    {
      title: 'Reliable Support',
      description: 'Dedicated support team ensuring smooth operations.',
    },
  ];

  return (
    <section id="why-zynco" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ZYNCO?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technology expertise with practical business understanding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
