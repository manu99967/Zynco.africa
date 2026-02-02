import React from 'react';

function ServiceCards() {
  return (
    <section className="services-preview">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Services</h2>
          <p>Comprehensive business solutions designed to drive growth and efficiency</p>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">
              <span>📱</span>
            </div>
            <h3>Business Communication</h3>
            <p>Advanced messaging solutions including SMS, USSD, and API integrations for seamless customer engagement.</p>
            <div className="competitive-advantage">
              <strong>✓ Complete Integration Support</strong>
            </div>
            <div className="service-features">
              <span className="feature-tag">Bulk SMS</span>
              <span className="feature-tag">USSD</span>
              <span className="feature-tag">APIs</span>
            </div>
            <button className="service-cta">Learn More →</button>
          </div>
          
          <div className="service-card featured">
            <div className="service-icon">
              <span>🔐</span>
            </div>
            <h3>Authentication Solutions</h3>
            <p>Tamper-proof QR-based verification systems protecting documents and products with instant authentication.</p>
            <div className="competitive-advantage">
              <strong>✓ Enterprise-Grade Security</strong>
            </div>
            <div className="service-features">
              <span className="feature-tag">QR Codes</span>
              <span className="feature-tag">Verification</span>
              <span className="feature-tag">Security</span>
            </div>
            <button className="service-cta">Learn More →</button>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <span>📊</span>
            </div>
            <h3>Business Advisory</h3>
            <p>Strategic consulting and development services to optimize operations and accelerate sustainable growth.</p>
            <div className="competitive-advantage">
              <strong>✓ Technology + Advisory Combined</strong>
            </div>
            <div className="service-features">
              <span className="feature-tag">Strategy</span>
              <span className="feature-tag">Growth</span>
              <span className="feature-tag">Consulting</span>
            </div>
            <button className="service-cta">Learn More →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;