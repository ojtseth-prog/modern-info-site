import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './Home';

const servicesData = [
  {
    title: 'Brand Identity',
    description: 'Logos, color palettes, and typography systems that command respect and establish market dominance.'
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, SEM, and highly targeted social media campaigns that maximize ROI.'
  },
  {
    title: 'Web & App Design',
    description: 'Award-winning digital experiences that convert visitors into loyal customers.'
  },
  {
    title: 'Content Strategy',
    description: 'Compelling copy, videography, and photography that tells your unique story.'
  }
];

const Services = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section"
      style={{ paddingTop: '150px' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="hero-title">Premium <span className="text-gradient">Services</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            Elevate your business with our comprehensive suite of tailored marketing solutions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {servicesData.map((service, index) => (
            <div key={index} className="glass" style={{ padding: '40px', borderRadius: '20px', transition: 'transform 0.4s ease', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--accent-gold)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
