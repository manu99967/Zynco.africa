export function TrustedBy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted By
          </h2>
          <p className="text-gray-600">
            Organizations that trust ZYNCO for their business solutions
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <img 
            src="/images/partner.png" 
            alt="Partner" 
            className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all"
          />
          <img 
            src="/images/partner2.png" 
            alt="Partner" 
            className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </section>
  );
}
