import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './Home';
import whoWeAreImg from '../assets/who_we_are.png';

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section"
    >
      {/* Centered Glass Header Area */}
      <div className="container" style={{ textAlign: 'center', paddingTop: '15vh', minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: '4rem', zIndex: 10 }}>
          Elevate Your <span className="text-gradient">Strategy</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '20px auto', zIndex: 10 }}>
          Discover how Sip & Strategy redefines the marketing landscape through premium design, deep analytics, and tailored brand elevation.
        </p>
      </div>

      {/* Content Below */}
      <div className="container" style={{ marginTop: '5vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div className="glass" style={{ padding: '60px', borderRadius: '24px' }}>
            <h2 style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>Our Story</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Founded on the principles of aesthetic perfection and analytical rigor, Sip & Strategy is more than just an agency. We are your partners in scaling. From crafting the perfect logo to architecting comprehensive digital experiences, we ensure every touchpoint resonates with luxury and purpose.
            </p>
          </div>
          
          <div className="picture-box" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(212,175,55,0.2)' }}>
            <img src={whoWeAreImg} alt="Our Story" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
