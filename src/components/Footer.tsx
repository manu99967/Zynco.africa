import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-12 border-t border-silver-700">
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
              <span className="text-xl font-bold text-gold-400">ZYNCO</span>
            </div>
            <p className="text-silver-400 mb-4 max-w-md">
              Technology and business solutions for enterprises, institutions, and growing businesses in East Africa.
            </p>
            <p className="text-silver-500 text-sm">
              GTC, Westlands – Nairobi, Kenya<br />
              P.O. Box 17894-00100, Nairobi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-silver-400 hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-silver-400 hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-silver-400 hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-silver-400 hover:text-gold-400 transition-colors">Bulk SMS</a></li>
              <li><a href="#services" className="text-silver-400 hover:text-gold-400 transition-colors">Authentication</a></li>
              <li><a href="#services" className="text-silver-400 hover:text-gold-400 transition-colors">Business Advisory</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-silver-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver-500 text-sm">
            © {currentYear} ZYNCO Africa. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="mailto:info@zynco.africa" className="text-silver-400 hover:text-gold-400 transition-colors text-sm">
              info@zynco.africa
            </a>
            <a href="tel:+254796387176" className="text-silver-400 hover:text-gold-400 transition-colors text-sm">
              +254 796 387 176
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
