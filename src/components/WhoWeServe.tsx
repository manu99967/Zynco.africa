import { Building2, GraduationCap, ShoppingBag, Sprout, Users, Landmark } from 'lucide-react';

export function WhoWeServe() {
  const sectors = [
    { icon: Building2, name: 'Corporates & Enterprises' },
    { icon: Landmark, name: 'Banks, MFIs & SACCOs' },
    { icon: GraduationCap, name: 'Educational Institutions' },
    { icon: ShoppingBag, name: 'Retailers & Distributors' },
    { icon: Sprout, name: 'Agribusinesses & Cooperatives' },
    { icon: Users, name: 'NGOs & Government' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by organizations across multiple sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all group"
            >
              <div className="p-4 bg-white rounded-full shadow-sm group-hover:bg-blue-100 transition-colors mb-4">
                <sector.icon className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-sm text-center text-gray-700 font-medium">{sector.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
