export function Values() {
  const values = [
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our dealings.',
    },
    {
      title: 'Innovation',
      description: 'We continuously seek better ways to serve our clients.',
    },
    {
      title: 'Excellence',
      description: 'We deliver quality in every project we undertake.',
    },
    {
      title: 'Partnership',
      description: 'We build lasting relationships with our clients.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-silver-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wide">Our Values</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mt-2 mb-4">
            The Principles That Guide Us
          </h2>
          <p className="text-xl text-dark-500 max-w-3xl mx-auto">
            Everything we do is built on these core values
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center p-6 group"
            >
              <div className="w-20 h-20 bg-dark-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-gold-500 transition-colors">
                <svg className="w-10 h-10 text-gold-400 group-hover:text-dark-800 transition-colors" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-800 mb-2">{value.title}</h3>
              <p className="text-dark-500">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
