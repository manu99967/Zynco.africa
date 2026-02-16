export function WhoWeServe() {
  const sectors = [
    {
      title: 'Financial Services',
      description: 'Banks, MFIs, SACCOs, and insurance companies.',
    },
    {
      title: 'Education',
      description: 'Schools, colleges, universities, and training institutions.',
    },
    {
      title: 'Healthcare',
      description: 'Hospitals, clinics, and healthcare organizations.',
    },
    {
      title: 'Retail & Commerce',
      description: 'Retailers, e-commerce, and trading companies.',
    },
    {
      title: 'Government & NGOs',
      description: 'Government agencies and non-profit organizations.',
    },
    {
      title: 'Professional Services',
      description: 'Law firms, consultancies, and service providers.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with organizations across various sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{sector.title}</h3>
              <p className="text-gray-600">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
