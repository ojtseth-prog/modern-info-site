import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import AnimatedBgHero from './AnimatedBgHero';

const Hero = () => {
  return (
    <section className="hero-section">
      <AnimatedBgHero />
      <div className="hero-overlay"></div>
      
      <div className="hero-content container">
        <div className="hero-badge-wrap animate-fade-in-up">
          <svg className="hero-badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="hero-badge">Next-Generation Marketing</div>
        </div>
        
        <h1 className="hero-headline animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Raise the Experience, <br /> <span className="text-gradient">Elevate the Brand</span>
        </h1>
        
        <div className="hero-sub animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Experience an elite agency built for absolute accountability, premium aesthetic, and explosive brand scaling.
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', marginTop: '40px' }}>
          <Link to="/contact" className="btn btn-primary btn-hero">
            <span className="btn-text">Get in touch</span>
            <div className="hero-btn-circle">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
