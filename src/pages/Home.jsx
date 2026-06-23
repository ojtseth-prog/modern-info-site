import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

// Page transition animations
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

import whoWeAreImg from '../assets/who_we_are.png';
import ctaBgImg from '../assets/cta_bg.png';

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

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      
      {/* Stats Section */}
      <section className="section stats-section container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'center' }}
        >
          <motion.div variants={fadeInUp} className="stat-card">
            <div style={{ color: 'var(--accent-gold)', fontSize: '3.5rem', fontFamily: 'var(--font-display)', fontWeight: '700', marginBottom: '10px' }}>$15M+</div>
            <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Ad Spend Managed</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="stat-card">
            <div style={{ color: 'var(--accent-gold)', fontSize: '3.5rem', fontFamily: 'var(--font-display)', fontWeight: '700', marginBottom: '10px' }}>400%</div>
            <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Average Client ROI</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="stat-card">
            <div style={{ color: 'var(--accent-gold)', fontSize: '3.5rem', fontFamily: 'var(--font-display)', fontWeight: '700', marginBottom: '10px' }}>Top 1%</div>
            <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Award-Winning Design</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="section">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}
        >
          <div style={{ textAlign: 'left' }}>
            <h2 className="section-title">Who <span className="text-gradient">We Are</span></h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
              Sip & Strategy is a premier digital marketing and brand elevation agency. We combine award-winning aesthetics with rigorous, data-driven methodologies. Our mission is to transform ambitious companies into market leaders through curated experiences and high-impact campaigns.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ padding: '12px 30px' }}>
              <span className="btn-text">Read Our Story</span>
            </Link>
          </div>
          
          <div className="picture-box" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(212,175,55,0.2)' }}>
            <img src={whoWeAreImg} alt="Who We Are" style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.05)' }} />
          </div>
        </motion.div>
      </section>

      {/* Our Approach Section */}
      <section className="section" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="container">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            Our <span className="text-gradient">Approach</span>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}
          >
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px', borderRadius: '16px', textAlign: 'center' }}>
              <h1 style={{ color: 'var(--accent-gold)', fontSize: '3rem', opacity: 0.5, marginBottom: '10px' }}>01</h1>
              <h3>Discovery</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Deep-dive into your brand's DNA, target audience, and market opportunities.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px', borderRadius: '16px', textAlign: 'center' }}>
              <h1 style={{ color: 'var(--accent-gold)', fontSize: '3rem', opacity: 0.5, marginBottom: '10px' }}>02</h1>
              <h3>Strategy</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Crafting a bespoke roadmap tailored for maximum growth and ROI.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px', borderRadius: '16px', textAlign: 'center' }}>
              <h1 style={{ color: 'var(--accent-gold)', fontSize: '3rem', opacity: 0.5, marginBottom: '10px' }}>03</h1>
              <h3>Execution</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Deploying breathtaking creative assets and precise ad campaigns.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px', borderRadius: '16px', textAlign: 'center' }}>
              <h1 style={{ color: 'var(--accent-gold)', fontSize: '3rem', opacity: 0.5, marginBottom: '10px' }}>04</h1>
              <h3>Growth</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Iterative optimization, deep analytics, and scaling your success.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="section-title"
          >
            By the <span className="text-gradient">Numbers</span>
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '20px auto 0' }}
          >
            We don't just chase vanity metrics; we engineer sustainable growth. Our track record speaks for itself, delivering compounding returns and industry-leading performance across every sector we touch.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', marginTop: '40px' }}
          >
            <motion.div variants={fadeInUp}>
              <h1 style={{ fontSize: '4rem', color: 'var(--accent-silver)', marginBottom: '10px' }}>300%</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }}>Average ROI</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h1 style={{ fontSize: '4rem', color: 'var(--accent-silver)', marginBottom: '10px' }}>50+</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }}>Awards Won</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h1 style={{ fontSize: '4rem', color: 'var(--accent-silver)', marginBottom: '10px' }}>24/7</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }}>Analytics Monitoring</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;
