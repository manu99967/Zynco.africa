import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 Launching Soon</span>
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
              <span className="stat-number">3</span>
              <span className="stat-label">Core Services</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Ready</span>
            </div>
          </div>
          
          <div className="trust-badges">
            <div className="badge">🔒 Secure Systems</div>
            <div className="badge">🛡️ Professional Grade</div>
            <div className="badge">⚡ 24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;