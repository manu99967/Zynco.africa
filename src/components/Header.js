import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <div className="logo">Zynco</div>
            <div className="brand-tagline">Smart Solutions. Trusted Systems.</div>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'nav-links-mobile' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/why-zynco" className="nav-link" onClick={() => setIsMenuOpen(false)}>Why Zynco</Link>
            <Link to="/contact" className="nav-link contact-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
          <div className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;