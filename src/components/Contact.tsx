import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how ZYNCO can help transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="messaging">Business Communication & Messaging</option>
                  <option value="authentication">Anti-Counterfeit & Authentication</option>
                  <option value="advisory">Business Advisory & Development</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 bg-white/20 rounded-lg mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-blue-100">info@zynco.africa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-white/20 rounded-lg mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-blue-100">+254 796 387 176</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-white/20 rounded-lg mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-blue-100">GTC, Westlands – Nairobi, Kenya</p>
                    <p className="text-blue-100 text-sm mt-1">P.O. Box 17894-00100, Nairobi</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <p className="text-blue-100 mb-2">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-blue-100">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
