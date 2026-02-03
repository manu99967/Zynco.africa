import React from 'react';
import SEO from './SEO';

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services - Zynco Systems Ltd"
        description="Comprehensive business technology services: Communication solutions, Authentication & Security, and Business Advisory services across Africa."
        keywords="business communication, USSD, SMS, authentication solutions, QR codes, business advisory, technology consulting, Africa"
        url="https://zynco.africa/services"
      />
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-content">
              <h1>Our Services</h1>
              <p>Comprehensive technology solutions designed for African businesses</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-detailed">
          <div className="container">
            <div className="services-grid">
              
              {/* Business Communication */}
              <div className="service-detail-card">
                <div className="service-header">
                  <div className="service-icon" role="img" aria-label="Communication">📞</div>
                  <h3>Business Communication Solutions</h3>
                  <div className="competitive-advantage">
                    <strong>Advantage:</strong> Complete Integration Support
                  </div>
                </div>
                <p>Transform your business communications with our integrated voice, messaging, and collaboration platforms.</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Cloud-based phone systems</li>
                    <li>Video conferencing solutions</li>
                    <li>Team collaboration tools</li>
                    <li>Mobile integration</li>
                    <li>Call analytics and reporting</li>
                  </ul>
                </div>

                <div className="service-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    <li>Reduce communication costs by up to 60%</li>
                    <li>Improve team productivity</li>
                    <li>Scale easily as you grow</li>
                    <li>Work from anywhere</li>
                  </ul>
                </div>

                <button className="service-cta" aria-label="Learn more about Business Communication Solutions">Learn More</button>
              </div>

              {/* Authentication Solutions */}
              <div className="service-detail-card featured">
                <div className="service-header">
                  <div className="service-icon" role="img" aria-label="Security">🔐</div>
                  <h3>Authentication & Security Solutions</h3>
                  <div className="competitive-advantage">
                    <strong>Advantage:</strong> Enterprise-Grade Security
                  </div>
                </div>
                <p>Protect your business with advanced authentication systems and comprehensive security frameworks.</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Multi-factor authentication</li>
                    <li>Single sign-on (SSO)</li>
                    <li>Identity management</li>
                    <li>Access control systems</li>
                    <li>Security monitoring</li>
                  </ul>
                </div>

                <div className="service-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    <li>Prevent unauthorized access</li>
                    <li>Comply with regulations</li>
                    <li>Reduce security incidents</li>
                    <li>Streamline user management</li>
                  </ul>
                </div>

                <button className="service-cta" aria-label="Learn more about Authentication & Security Solutions">Learn More</button>
              </div>

              {/* Business Advisory */}
              <div className="service-detail-card">
                <div className="service-header">
                  <div className="service-icon" role="img" aria-label="Advisory">💼</div>
                  <h3>Business Advisory Services</h3>
                  <div className="competitive-advantage">
                    <strong>Advantage:</strong> Technology + Advisory Combined
                  </div>
                </div>
                <p>Strategic guidance to help you leverage technology for maximum business impact and growth.</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Technology strategy consulting</li>
                    <li>Digital transformation planning</li>
                    <li>Process optimization</li>
                    <li>ROI analysis and reporting</li>
                    <li>Implementation roadmaps</li>
                  </ul>
                </div>

                <div className="service-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    <li>Make informed technology decisions</li>
                    <li>Maximize return on investment</li>
                    <li>Accelerate digital transformation</li>
                    <li>Stay ahead of competition</li>
                  </ul>
                </div>

                <button className="service-cta" aria-label="Learn more about Business Advisory Services">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="our-process">
          <div className="container">
            <h2>Our Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number" aria-label="Step 1">1</div>
                <h4>Discovery</h4>
                <p>We analyze your business needs and current technology landscape.</p>
              </div>
              <div className="process-step">
                <div className="step-number" aria-label="Step 2">2</div>
                <h4>Strategy</h4>
                <p>We develop a customized solution strategy aligned with your goals.</p>
              </div>
              <div className="process-step">
                <div className="step-number" aria-label="Step 3">3</div>
                <h4>Implementation</h4>
                <p>We deploy and integrate solutions with minimal business disruption.</p>
              </div>
              <div className="process-step">
                <div className="step-number" aria-label="Step 4">4</div>
                <h4>Support</h4>
                <p>We provide ongoing support and optimization to ensure success.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;