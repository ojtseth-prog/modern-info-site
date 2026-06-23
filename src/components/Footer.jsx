import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        
        {/* Left: Brand */}
        <div className="footer-brand" style={{ flex: '1.5', minWidth: '250px' }}>
          <Link to="/" className="navbar-logo text-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", letterSpacing: "1px" }}>Sip & Strategy</Link>
          <p style={{ margin: '8px 0', fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px' }}>
            Award-winning digital marketing and brand elevation.
          </p>
          <p style={{ margin: '0', fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.7 }}>© 2026 Sip & Strategy. All rights reserved.</p>
        </div>

        {/* Center: Links */}
        <div className="footer-links" style={{ flex: '1', display: 'flex', gap: '24px', justifyContent: 'center', minWidth: '200px' }}>
          <Link to="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Terms of Service</Link>
        </div>

        {/* Right: CTA Button */}
        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', minWidth: '200px' }}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--accent-gold)', color: '#000', border: 'none' }}>
            <span className="btn-text" style={{ fontSize: '1rem', fontWeight: '600' }}>Start Your Project</span>
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}><path d="M5 12h14M12 5l7 7-7 7" stroke="#000" fill="none" strokeWidth="2"/></svg>
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
