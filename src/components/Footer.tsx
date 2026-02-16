import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/zynco-logo.png"
                alt="ZYNCO Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold">ZYNCO</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Technology and business solutions for enterprises, institutions, and growing businesses in East Africa.
            </p>
            <p className="text-gray-400 text-sm">
              GTC, Westlands – Nairobi, Kenya<br />
              P.O. Box 17894-00100, Nairobi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Messaging Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Authentication</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Business Advisory</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} ZYNCO Systems Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
