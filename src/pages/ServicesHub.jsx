import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageVariants, pageTransition } from './Home';
import AnimatedBackground from '../components/AnimatedBackground';

import heroBg from '../assets/hero_bg.png';
import ctaBgImg from '../assets/cta_bg.png';
import whoWeAreImg from '../assets/who_we_are.png';

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

const ServicesHub = () => {
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
            <div className="hero-badge">Our Expertise</div>
          </div>
          <h1 className="hero-title" style={{ fontSize: '5rem', marginBottom: '20px' }}>
            Our <span className="text-gradient">Services</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            We provide a comprehensive suite of digital solutions engineered to scale your business and dominate your industry.
          </p>
        </motion.div>
      </div>

      <div className="container section" style={{ marginTop: '0' }}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '80px' }}
        >
          {/* Brand Identity Card */}
          <motion.div variants={fadeInUp} className="glass" style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '250px', backgroundImage: `url(${ctaBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '15px' }}>Brand Identity</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', flexGrow: 1, lineHeight: '1.6' }}>
                We engineer legacies. Craft visually stunning and deeply resonant brand identities that command authority and foster unbreakable consumer loyalty.
              </p>
              <Link to="/services/brand-identity" className="btn btn-secondary" style={{ textAlign: 'center', borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>Explore Service</Link>
            </div>
          </motion.div>

          {/* Digital Marketing Card */}
          <motion.div variants={fadeInUp} className="glass" style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '250px', backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '15px' }}>Digital Marketing</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', flexGrow: 1, lineHeight: '1.6' }}>
                Data-driven campaigns that convert. Leverage advanced analytics, SEO, and paid social to maximize your ROI and aggressively scale your traffic.
              </p>
              <Link to="/services/digital-marketing" className="btn btn-secondary" style={{ textAlign: 'center', borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>Explore Service</Link>
            </div>
          </motion.div>

          {/* Web Design Card */}
          <motion.div variants={fadeInUp} className="glass" style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '250px', backgroundImage: `url(${whoWeAreImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '15px' }}>Web Design</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', flexGrow: 1, lineHeight: '1.6' }}>
                Lightning-fast, high-converting digital properties. We architect highly optimized digital assets engineered for unparalleled speed and SEO dominance.
              </p>
              <Link to="/services/web-design" className="btn btn-secondary" style={{ textAlign: 'center', borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>Explore Service</Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesHub;
