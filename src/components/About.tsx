import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-team.png"
                alt="ZYNCO team collaboration"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About ZYNCO
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ZYNCO Systems Ltd is a Kenya-based technology and business solutions company. 
              We partner with enterprises, institutions, and growing businesses to solve real 
              operational challenges using secure technology, reliable systems, and practical 
              business advisory support.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach combines technical expertise with deep understanding of local market 
              dynamics, ensuring solutions that are not just innovative but practical and sustainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
