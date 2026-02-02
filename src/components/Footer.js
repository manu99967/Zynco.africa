import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="footer-logo">
              <h3>Zynco Systems Ltd</h3>
              <p>Smart Solutions. Trusted Systems. Better Business.</p>
            </div>
            <p className="company-description">
              Leading business solutions provider helping organizations operate more efficiently 
              through smart technology and practical advisory support.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#messaging">Business Communication</a></li>
              <li><a href="#authentication">Authentication Solutions</a></li>
              <li><a href="#advisory">Business Advisory</a></li>
              <li><a href="#api">API Integration</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#why-zynco">Why Zynco</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </div>
          
          <div className="footer-section contact-info">
            <h4>Contact</h4>
            <div className="contact-details">
              <p>📍 GTC, Westlands – Nairobi, Kenya</p>
              <p>📧 info@zynco.africa</p>
              <p>🌐 www.zynco.africa</p>
              <p>📞 +254 700 000 000</p>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Facebook">📘</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Zynco Systems Ltd. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;