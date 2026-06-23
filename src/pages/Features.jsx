import React from 'react';
import { motion } from 'framer-motion';
import Features from '../components/Features';
import { pageVariants, pageTransition } from './Home';
import ctaBgImg from '../assets/cta_bg.png';

const FeaturesPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="section" style={{ paddingTop: '150px' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>
            Unrivaled <span className="text-gradient">Capabilities</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            We provide an end-to-end suite of marketing tools and brand strategies designed for the modern era.
          </p>
        </div>
        
        {/* Reusing the Features component */}
        <Features />
        
        {/* Extended details for Features Page */}
        <div className="container" style={{ marginTop: '120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="picture-box" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(212,175,55,0.2)' }}>
              <img src={ctaBgImg} alt="Deep Analytics" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            <div className="glass" style={{ padding: '60px', borderRadius: '24px' }}>
              <h2 style={{ marginBottom: '24px', fontSize: '2.5rem', color: 'var(--accent-gold)' }}>Deep Analytics</h2>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                At Sip & Strategy, we don't just guess. We use data to drive every decision, ensuring your campaigns are hyper-targeted and effective. 
                Our proprietary tracking methodologies allow us to view customer journeys in real-time, optimizing ad spend to the penny.
              </p>
              <a href="/contact" className="btn btn-primary" style={{ padding: '12px 30px' }}>Request a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesPage;
