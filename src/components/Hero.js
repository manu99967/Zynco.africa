import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 Trusted by 500+ Businesses</span>
          </div>
          <h1 className="hero-title">
            Zynco Systems Ltd
          </h1>
          <p className="hero-subtitle">
            Smart Solutions. Trusted Systems. Better Business.
          </p>
          <p className="hero-description">
            We partner with organizations to solve real operational challenges using 
            smart technology, secure systems, and practical advisory support.
          </p>
          <div className="hero-actions">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Clients Served</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;