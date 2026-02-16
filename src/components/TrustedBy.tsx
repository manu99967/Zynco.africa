import Image from 'next/image';

export function TrustedBy() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium tracking-wider uppercase mb-8">
          Trusted By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <Image
            src="/images/partner.png"
            alt="Partner logo"
            width={150}
            height={50}
            className="h-10 w-auto object-contain"
          />
          <Image
            src="/images/partner2.png"
            alt="Partner logo"
            width={150}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
