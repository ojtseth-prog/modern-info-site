import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './Home';
import { Link } from 'react-router-dom';
import ctaBgImg from '../assets/cta_bg.png';
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

const ServiceBrandIdentity = () => {
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
            Brand <span className="text-gradient">Identity</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 20px' }}>
            Your brand is more than a logo; it's the feeling you evoke. We craft visually stunning and deeply resonant brand identities that separate you from the competition.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            By blending aesthetic mastery with psychological insight, we ensure that every color, typeface, and visual element works in harmony to tell your unique story. We don't just build brands—we engineer legacies that command authority and foster unbreakable consumer loyalty.
          </p>
        </motion.div>
      </div>
      
      <div className="container section" style={{ marginTop: '0' }}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}
        >
          <motion.div variants={fadeInUp} className="picture-box" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(212,175,55,0.2)', height: '100%', minHeight: '500px' }}>
            <img src={ctaBgImg} alt="Brand Identity" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px 40px', borderRadius: '16px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.5rem' }}>1. Discovery</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Understanding your core values and target audience through deep market research.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px 40px', borderRadius: '16px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.5rem' }}>2. Conceptualization</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Designing mood boards, premium color palettes, and elegant typography choices.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px 40px', borderRadius: '16px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.5rem' }}>3. Creation</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Crafting the final logo, comprehensive brand guidelines, and stunning marketing assets.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* What You'll Receive */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">What You'll <span className="text-gradient">Receive</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Every brand identity package is tailored to your unique vision. Here's what a typical engagement includes.
          </p>
        </div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '100px' }}
        >
          {[
            { title: 'Custom Logo Suite', desc: 'Primary, secondary, and icon variations optimized for print, digital, and social media.' },
            { title: 'Brand Guidelines', desc: 'A comprehensive style manual covering typography, color systems, imagery direction, and voice.' },
            { title: 'Stationery Design', desc: 'Business cards, letterheads, and envelope designs that exude sophistication.' },
            { title: 'Social Media Kit', desc: 'Branded templates for Instagram, LinkedIn, and Facebook to ensure visual consistency.' }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="glass" style={{ padding: '35px', borderRadius: '16px', borderTop: '3px solid var(--accent-gold)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-primary)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Stats */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', textAlign: 'center', marginBottom: '60px' }}
        >
          {[
            { value: '95%', label: 'Client Retention Rate' },
            { value: '2x', label: 'Brand Recognition Lift' },
            { value: '60+', label: 'Brands Launched' }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-display)' }}>{stat.value}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </motion.div>
  );
};

export default ServiceBrandIdentity;
