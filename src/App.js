import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Zynco Systems Ltd</h1>
          <p>Business solutions and technology company helping organizations operate more efficiently</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">Login</Link>
            <Link to="/register" className="btn-secondary">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Who We Are</h2>
          <p>Zynco Systems Ltd is a business solutions and technology company that helps organizations operate more efficiently, reduce costs, enhance service delivery, and communicate better with their customers. We are not just software sellers. We partner with businesses to solve real operational challenges using smart technology, secure systems, and practical advisory support.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What We Do</h2>
          <div className="services">
            <div className="service-card">
              <h3>Business Communication & Messaging Solutions</h3>
              <p>We help organizations communicate faster, smarter, and more effectively with customers, staff, and stakeholders.</p>
              <ul>
                <li>Bulk SMS (Promotional & Transactional)</li>
                <li>Branded Sender IDs</li>
                <li>Short Codes & USSD Applications</li>
                <li>Two-Way SMS & OTP Verification</li>
                <li>API Integration for Systems & Apps</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Anti-Counterfeit & Authentication Solutions</h3>
              <p>Tamper-proof QR Code Authentication Solution that protects documents and products while enabling instant verification.</p>
              <ul>
                <li>Academic certificates & transcripts</li>
                <li>Financial & legal documents</li>
                <li>Product authentication & brand protection</li>
                <li>Centralized authentication dashboard</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Business Advisory & Development Services</h3>
              <p>Practical business advisory and development support to help organizations grow sustainably.</p>
              <ul>
                <li>Business strategy & growth planning</li>
                <li>Process optimization & operational efficiency</li>
                <li>Digital transformation advisory</li>
                <li>Customer experience improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why Zynco</h2>
          <div className="services">
            <div className="service-card">
              <h3>Solutions-first approach</h3>
              <p>We focus on outcomes, not tools</p>
            </div>
            <div className="service-card">
              <h3>Secure & reliable systems</h3>
              <p>Built for real-world business use</p>
            </div>
            <div className="service-card">
              <h3>Technology + advisory</h3>
              <p>Under one roof</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div>
              <h3>Zynco Systems Ltd</h3>
              <p>GTC, Westlands – Nairobi, Kenya</p>
            </div>
            <div>
              <h3>Get in Touch</h3>
              <p>📧 info@zynco.africa</p>
              <p>🌐 www.zynco.africa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="container">
            <nav className="nav">
              <Link to="/" className="nav-brand">
                <div className="logo">Zynco</div>
                <div className="tagline">Smart Solutions. Trusted Systems. Better Business.</div>
              </Link>
              <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;