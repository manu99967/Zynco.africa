'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Contact() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Vercel API Route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
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
            {mounted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    name="email"
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
                    name="organization"
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
                    name="service"
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
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    ✗ Failed to send. Please try again or email us directly at info@zynco.africa
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 text-dark-900 px-8 py-3 rounded-lg hover:bg-gold-400 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
            {!mounted && (
              <div className="space-y-6 animate-pulse">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-14 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-dark-700 to-dark-900 rounded-2xl p-8 text-white h-full border border-silver-600">
              <h3 className="text-2xl font-bold mb-6 text-gold-400">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 bg-gold-500/20 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:info@zynco.africa" className="text-silver-300 hover:text-gold-400 transition-colors">
                      info@zynco.africa
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-gold-500/20 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+254796387176" className="text-silver-300 hover:text-gold-400 transition-colors">
                      +254 796 387 176
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-gold-500/20 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=GTC+Westlands+Nairobi+Kenya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-silver-300 hover:text-gold-400 transition-colors"
                    >
                      GTC, Westlands – Nairobi, Kenya
                    </a>
                    <p className="text-silver-400 text-sm mt-1">P.O. Box 17894-00100, Nairobi</p>
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
