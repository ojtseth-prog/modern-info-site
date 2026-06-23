import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './Home';
import { Link } from 'react-router-dom';
import whoWeAreImg from '../assets/who_we_are.png';
import AnimatedBgWeb from '../components/AnimatedBgWeb';

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

const ServiceWebDesign = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div style={{ position: 'relative', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '80px', overflow: 'hidden' }}>
        <AnimatedBgWeb />
        <div className="hero-overlay"></div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="container" style={{ position: 'relative', zIndex: 10 }}
        >
          <div className="hero-badge-wrap" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            <div className="hero-badge">Our Services</div>
          </div>
          <h1 className="hero-title" style={{ fontSize: '5rem', marginBottom: '20px' }}>
            Web <span className="text-gradient">Design</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 20px' }}>
            Websites that don't just look stunning, but perform flawlessly. We build lightning-fast, high-converting digital properties using modern architectures.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            A website is the digital storefront of your business. Our engineering team utilizes React, Three.js, and server-side rendering to create immersive experiences that load in sub-seconds. We don't just write code; we architect highly optimized digital assets engineered for unparalleled speed and SEO dominance.
          </p>
        </motion.div>
      </div>
      
      <div className="container section" style={{ marginTop: '0' }}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}
        >
          <motion.div variants={fadeInUp} className="picture-box" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(212,175,55,0.2)', height: '100%', minHeight: '500px' }}>
            <img src={whoWeAreImg} alt="Web Design" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px 40px', borderRadius: '16px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.5rem' }}>UI/UX Excellence</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Frictionless user journeys designed to maximize engagement and conversion rates.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px 40px', borderRadius: '16px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.5rem' }}>Modern Architecture</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Built on React and bleeding-edge frameworks for sub-second load times.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass" style={{ padding: '30px 40px', borderRadius: '16px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.5rem' }}>Responsive By Default</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Flawless experiences across every device, from massive desktop monitors to mobile phones.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Built With the Best */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">Built With the <span className="text-gradient">Best</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            We use only production-grade technologies trusted by the world's most innovative companies to build your digital presence.
          </p>
        </div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '100px' }}
        >
          {[
            { title: 'React & Next.js', desc: 'Component-driven architecture with server-side rendering for blazing-fast page loads and perfect SEO scores.' },
            { title: 'Three.js & WebGL', desc: 'Immersive 3D experiences and cinematic animations that captivate users and set your brand apart.' },
            { title: 'Headless CMS', desc: 'Flexible content management with Sanity or Contentful, giving you full editorial control without sacrificing speed.' },
            { title: 'Cloud Infrastructure', desc: 'Deployed on Vercel and AWS with global CDN distribution for 99.99% uptime and sub-100ms response times.' }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="glass" style={{ padding: '35px', borderRadius: '16px', borderTop: '3px solid var(--accent-gold)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-primary)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Stats */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', textAlign: 'center', marginBottom: '60px' }}
        >
          {[
            { value: '100', label: 'Lighthouse Score' },
            { value: '<1s', label: 'Load Time' },
            { value: '99.9%', label: 'Uptime Guaranteed' }
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

export default ServiceWebDesign;
