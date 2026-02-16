import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-silver-700">
              <Image
                src="/images/about-team.png"
                alt="ZYNCO team collaboration"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-500 rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wide">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Your Trusted Partner for Business Solutions in Kenya
            </h2>
            <p className="text-lg text-silver-300 mb-6 leading-relaxed">
              ZYNCO AFRICA is a Kenya-based technology and business solutions company. 
              We partner with enterprises, institutions, and growing businesses to solve real 
              operational challenges using secure technology, reliable systems, and practical 
              business advisory support.
            </p>
            <p className="text-lg text-silver-300 leading-relaxed mb-8">
              Our approach combines technical expertise with deep understanding of local market 
              dynamics, ensuring solutions that are not just innovative but practical and sustainable.
            </p>
            
            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-700 border border-silver-600 rounded-lg p-4">
                <div className="text-gold-400 font-bold text-2xl">Bulk SMS</div>
                <div className="text-silver-400 text-sm">Enterprise Messaging</div>
              </div>
              <div className="bg-dark-700 border border-silver-600 rounded-lg p-4">
                <div className="text-gold-400 font-bold text-2xl">Security</div>
                <div className="text-silver-400 text-sm">Document Authentication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
