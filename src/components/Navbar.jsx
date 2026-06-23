import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--accent-gold)' }}>Sip & Strategy</span>
        </Link>

        <div className="navbar-right">
          <div className="nav-links-wrap">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            
            {/* Services Dropdown */}
            <div className="nav-item dropdown">
              <Link to="/services" className={`nav-link ${location.pathname.includes('/services') ? 'active' : ''}`}>Services</Link>
              <div className="dropdown-menu glass">
                <Link to="/services/brand-identity" className="dropdown-item">Brand Identity</Link>
                <Link to="/services/digital-marketing" className="dropdown-item">Digital Marketing</Link>
                <Link to="/services/web-design" className="dropdown-item">Web Design</Link>
              </div>
            </div>

            <Link to="/features" className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>Features</Link>
          </div>

          <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px' }}>
            <div className="dot"></div>
            <span className="btn-text">Get in touch</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
