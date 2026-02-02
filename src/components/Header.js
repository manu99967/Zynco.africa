import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <div className="logo">Zynco</div>
            <div className="brand-tagline">Smart Solutions. Trusted Systems.</div>
          </div>
          <div className="nav-links" style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
            <a href="#home" className="nav-link" style={{color: '#2c3e50', textDecoration: 'none', fontWeight: '600'}}>Home</a>
            <a href="#about" className="nav-link" style={{color: '#2c3e50', textDecoration: 'none', fontWeight: '600'}}>About</a>
            <a href="#services" className="nav-link" style={{color: '#2c3e50', textDecoration: 'none', fontWeight: '600'}}>Services</a>
            <a href="#why-zynco" className="nav-link" style={{color: '#2c3e50', textDecoration: 'none', fontWeight: '600'}}>Why Zynco</a>
            <a href="#contact" className="nav-link contact-link" style={{background: '#3498db', color: 'white', padding: '8px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600'}}>Contact</a>
          </div>
          <div className="mobile-menu-toggle">
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