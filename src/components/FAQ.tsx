'use client';

import { useState } from 'react';
import { MessageSquare, Shield, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqSections = [
    {
      id: 'faq-bulk-sms',
      title: 'Bulk SMS Solutions FAQs',
      icon: MessageSquare,
      color: 'gold',
      faqs: [
        {
          question: 'What is Bulk SMS?',
          answer: 'Bulk SMS allows you to send one message to thousands of customers instantly; used for promotions, reminders, alerts, OTPs, and updates.'
        },
        {
          question: 'How can Bulk SMS help my business/organization?',
          answer: 'You can promote offers, send payment reminders, notify customers instantly, confirm orders, and run marketing campaigns. It\'s fast, direct, and has over 95% open rate.'
        },
        {
          question: 'How much does Bulk SMS cost?',
          answer: 'Rates depend on volume; costs start from as low as 50 cents per SMS. Higher volume = lower cost per SMS.'
        },
        {
          question: 'What is a Sender ID?',
          answer: 'A Sender ID is the name that appears on your customer\'s phone instead of a number (e.g., ZYNCO). It builds trust and brand visibility.'
        },
        {
          question: 'How much does Sender ID registration cost?',
          answer: 'Per network (Safaricom, Airtel, Telkom): Ksh 7,000 one-time fee per network. Setup takes 2–10 working days depending on network.'
        },
        {
          question: 'What documents are needed for Sender ID registration?',
          answer: 'Filled alphanumeric form, Company registration certificate, A domain/website. We guide you through the process.'
        },
        {
          question: 'What is a Short Code?',
          answer: 'A short code is a 4-digit number (e.g., 52505) customers can text to interact with your business for voting, offers, subscriptions, or inquiries. It enables two-way SMS communication.'
        },
        {
          question: 'What types of Short Codes are available?',
          answer: 'Dedicated Short Code (owned fully by your business), Shared Short Code (more affordable, shared service), Premium Short Code (customers are charged per SMS). We help you choose based on your use case.'
        },
        {
          question: 'How do I get started?',
          answer: 'Simple: 1) Choose service (Bulk SMS / Short Code), 2) Register Sender ID, 3) Fund SMS wallet, 4) Start sending immediately.'
        }
      ]
    },
    {
      id: 'faq-authentication',
      title: 'QR Code / VeriDoc Authentication FAQs',
      icon: Shield,
      color: 'gold',
      faqs: [
        {
          question: 'What is the QR Code Authentication Solution?',
          answer: 'It is a secure verification system that allows customers to scan a QR code and confirm if a product or document is genuine.'
        },
        {
          question: 'Who can use QR authentication?',
          answer: 'Manufacturers, Schools & Universities, Event organizers, Government agencies, Corporates issuing financial documents (invoices, tenders, licenses), FMCG brands, Pharmaceutical companies, Lawyers issuing legal documents, Exporters. It prevents fraud and counterfeits protecting your brand and builds customer confidence.'
        },
        {
          question: 'How does it work?',
          answer: '1) Unique QR code is generated, 2) Code is printed on product or document, 3) Customer/user scans the code, 4) System verifies authenticity instantly.'
        },
        {
          question: 'What problems does it solve?',
          answer: 'Fake certificates, Counterfeit products, Brand damage, Fraud losses. It protects your brand reputation.'
        },
        {
          question: 'Is the data and the system secure?',
          answer: 'Yes. Each QR code is unique, encrypted, and traceable. ZYNCO does not hold raw customer data but in encrypted format. You also receive scan reports and verification data.'
        }
      ]
    },
    {
      id: 'faq-advisory',
      title: 'Business Development & Marketing FAQs',
      icon: TrendingUp,
      color: 'gold',
      faqs: [
        {
          question: 'What does ZYNCO Business Development & Marketing actually do?',
          answer: 'We help businesses grow profitably and sustainably. Our core services include: Sales management & sales team structuring, Market research & opportunity analysis, Product development & market entry strategy, Customer satisfaction surveys & mystery shopping, Access to business financing, Agribusiness management & farm setup, Performance management systems, Strategic planning & business planning, Ongoing business advisory. We don\'t just advise—we help you implement.'
        },
        {
          question: 'Who should work with ZYNCO Business Development & Marketing?',
          answer: 'We work with: SMEs looking to scale, Corporates seeking structured growth, Agribusiness investors, SACCOs & financial institutions, Startups needing strategy & funding access. If you want structured growth, better sales performance, or investment readiness—we are your growth partner.'
        },
        {
          question: 'What results can I expect?',
          answer: 'Depending on your need, we help you: Increase sales performance, Identify profitable markets, Develop market-ready products, Improve customer satisfaction & retention, Access funding opportunities, Build structured, investor-ready business plans, Improve operational efficiency. Our focus is measurable growth, not theory.'
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gradient-to-b from-silver-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wide">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-dark-500 max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-12">
          {faqSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} id={section.id} className="bg-white rounded-2xl shadow-lg border border-silver-200 overflow-hidden">
                {/* Section Header */}
                <div className="bg-dark-800 px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-dark-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>

                {/* FAQ Items */}
                <div className="divide-y divide-silver-200">
                  {section.faqs.map((faq, index) => {
                    const itemId = `${section.id}-${index}`;
                    const isOpen = openItems[itemId];
                    
                    return (
                      <div key={index} className="border-b border-silver-100 last:border-b-0">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-silver-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <span className="font-medium text-dark-800 pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gold-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-dark-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-dark-500 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
