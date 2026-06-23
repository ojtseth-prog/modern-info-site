import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './Home';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero_bg.png';
import AnimatedBackground from '../components/AnimatedBackground';

// Scroll animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ServiceDigitalMarketing = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div style={{ position: 'relative', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '80px', overflow: 'hidden' }}>
        <AnimatedBackground />
        <div className="hero-overlay"></div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="container" style={{ position: 'relative', zIndex: 10 }}
        >
          <div className="hero-badge-wrap" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            <div className="hero-badge">Our Services</div>
          </div>
          <h1 className="hero-title" style={{ fontSize: '5rem', marginBottom: '20px' }}>
            Digital <span className="text-gradient">Marketing</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 20px' }}>
            Data-driven campaigns that convert. We leverage advanced analytics, SEO, and paid social to maximize your return on investment and build a loyal customer base.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            Our hyper-targeted strategies treat marketing as high-impact infrastructure. We constantly monitor, A/B test, and optimize your ad spend, ensuring that every single dollar works tirelessly to acquire high-value customers and dominate your market sector.
          </p>
        </motion.div>
      </div>
      
      <div className="container section" style={{ marginTop: '0' }}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px 40px', borderRadius: '16px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.5rem' }}>SEO Optimization</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Dominate search rankings and capture organic traffic with our deep technical SEO strategies.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px 40px', borderRadius: '16px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.5rem' }}>Paid Social</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Hyper-targeted ad campaigns on Meta, LinkedIn, and TikTok that deliver immediate ROI.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px 40px', borderRadius: '16px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.5rem' }}>Email Marketing</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Automated, high-converting email sequences that turn leads into loyal customers.</p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="picture-box" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(212,175,55,0.2)', height: '100%', minHeight: '500px' }}>
            <img src={heroBg} alt="Digital Marketing" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </motion.div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};

export default ServiceDigitalMarketing;
