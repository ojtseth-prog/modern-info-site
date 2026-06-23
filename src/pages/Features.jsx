import React from 'react';
import { motion } from 'framer-motion';
import Features from '../components/Features';
import { pageVariants, pageTransition } from './Home';
import ctaBgImg from '../assets/cta_bg.png';
import AnimatedBgOrbs from '../components/AnimatedBgOrbs';

const FeaturesPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="section" style={{ paddingTop: '0' }}>
        {/* Cinematic Header with 3D Orbs */}
        <div style={{ position: 'relative', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '120px', paddingBottom: '60px', overflow: 'hidden' }}>
          <AnimatedBgOrbs />
          <div className="hero-overlay"></div>
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <h1 className="hero-title" style={{ fontSize: '3rem' }}>
              Unrivaled <span className="text-gradient">Capabilities</span>
            </h1>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              We provide an end-to-end suite of marketing tools and brand strategies designed for the modern era.
            </p>
          </div>
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

        {/* How We Deliver Results */}
        <div className="container" style={{ marginTop: '120px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            How We Deliver <span className="text-gradient">Results</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
            {[
              { step: '01', title: 'Research & Audit', desc: 'We start by conducting a comprehensive audit of your current digital presence, identifying gaps and untapped opportunities across all channels.' },
              { step: '02', title: 'Strategic Blueprint', desc: 'Our strategists develop a custom roadmap built around your KPIs, competitive landscape, and target demographics.' },
              { step: '03', title: 'Creative Execution', desc: 'Our design and engineering team brings the strategy to life with stunning visuals, optimized funnels, and precision-targeted ad creatives.' },
              { step: '04', title: 'Measure & Scale', desc: 'We continuously monitor performance metrics, A/B test every variable, and aggressively scale what works to compound your growth.' }
            ].map((item, idx) => (
              <div key={idx} className="glass" style={{ padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', color: 'var(--accent-gold)', opacity: 0.4, marginBottom: '15px' }}>{item.step}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="container" style={{ marginTop: '120px', marginBottom: '80px' }}>
          <div className="glass" style={{ padding: '60px', borderRadius: '24px', textAlign: 'center', borderTop: '4px solid var(--accent-gold)' }}>
            <svg viewBox="0 0 24 24" fill="var(--accent-gold)" style={{ width: '40px', height: '40px', marginBottom: '20px', opacity: 0.5 }}>
              <path d="M11 7.5a4.5 4.5 0 1 0-9 0c0 2 1 3.5 2 4.5L2 17h7l-1-3c1.5-1 3-3 3-6.5zM22 7.5a4.5 4.5 0 1 0-9 0c0 2 1 3.5 2 4.5l-2 5h7l-1-3c1.5-1 3-3 3-6.5z"/>
            </svg>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-primary)', maxWidth: '800px', margin: '0 auto 25px', lineHeight: '1.8', fontStyle: 'italic' }}>
              "Sip & Strategy completely transformed our digital presence. Within 90 days, our organic traffic increased by 340% and our cost-per-acquisition dropped by half. They don't just deliver campaigns—they deliver growth."
            </p>
            <p style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', fontWeight: '600' }}>— Alexandra Chen</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>CEO, Lumière Cosmetics</p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default FeaturesPage;
