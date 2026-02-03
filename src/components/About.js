import React from 'react';
import SEO from './SEO';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us - Zynco Systems Ltd"
        description="Learn about Zynco Systems Ltd - Founded in 2026, we provide integrated business communication, authentication, and advisory services across Africa."
        keywords="about zynco, company mission, business values, technology advisory, Africa business solutions"
        url="https://zynco.africa/about"
      />
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <h1>About Zynco Systems</h1>
              <p>Building the future of business technology in Africa</p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="company-story">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>Our Story</h2>
                <p>Founded with a vision to transform how African businesses operate, Zynco Systems Ltd combines cutting-edge technology with deep business expertise to deliver solutions that drive real growth.</p>
                <p>We understand the unique challenges facing businesses across Africa and have built our services to address these specific needs with innovative, reliable, and scalable solutions.</p>
              </div>
              <div className="story-stats">
                <div className="stat-item">
                  <span className="stat-number">2026</span>
                  <span className="stat-label">Founded</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Core Services</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="container">
            <div className="mv-grid">
              <div className="mv-card">
                <h3>Our Mission</h3>
                <p>To empower African businesses with integrated technology solutions that enhance communication, security, and strategic decision-making.</p>
              </div>
              <div className="mv-card">
                <h3>Our Vision</h3>
                <p>To be Africa's leading provider of comprehensive business technology solutions, driving digital transformation across the continent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values">
          <div className="container">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon" role="img" aria-label="Excellence">🎯</div>
                <h4>Excellence</h4>
                <p>We deliver solutions that exceed expectations and drive measurable results.</p>
              </div>
              <div className="value-item">
                <div className="value-icon" role="img" aria-label="Security">🔒</div>
                <h4>Security</h4>
                <p>Enterprise-grade security is built into everything we do.</p>
              </div>
              <div className="value-item">
                <div className="value-icon" role="img" aria-label="Partnership">🤝</div>
                <h4>Partnership</h4>
                <p>We work as an extension of your team, committed to your success.</p>
              </div>
              <div className="value-item">
                <div className="value-icon" role="img" aria-label="Innovation">⚡</div>
                <h4>Innovation</h4>
                <p>We leverage the latest technology to solve complex business challenges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose">
          <div className="container">
            <h2>Why Choose Zynco Systems</h2>
            <div className="choose-grid">
              <div className="choose-item">
                <h4>Complete Integration</h4>
                <p>Our solutions work together seamlessly, providing a unified technology ecosystem for your business.</p>
              </div>
              <div className="choose-item">
                <h4>Local Expertise</h4>
                <p>Deep understanding of African business environments and regulatory requirements.</p>
              </div>
              <div className="choose-item">
                <h4>24/7 Support</h4>
                <p>Round-the-clock technical support to ensure your systems run smoothly.</p>
              </div>
              <div className="choose-item">
                <h4>Scalable Solutions</h4>
                <p>Technology that grows with your business, from startup to enterprise.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;