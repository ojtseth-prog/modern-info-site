import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition, staggerContainer, fadeInUp } from './Home';
import whoWeAreImg from '../assets/who_we_are.png';
import AnimatedBgWave from '../components/AnimatedBgWave';

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Cinematic Header with 3D Wave */}
      <div style={{ position: 'relative', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '80px', overflow: 'hidden' }}>
        <AnimatedBgWave />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h1 className="hero-title" style={{ fontSize: '4rem' }}>
            Elevate Your <span className="text-gradient">Strategy</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '20px auto' }}>
            Discover how Sip & Strategy redefines the marketing landscape through premium design, deep analytics, and tailored brand elevation.
          </p>
        </div>
      </div>

      {/* Content Below */}
      <motion.div className="container" style={{ marginTop: '5vh' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeInUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
          <div className="glass" style={{ padding: '60px', borderRadius: '24px' }}>
            <h2 style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>Our Story</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Founded on the principles of aesthetic perfection and analytical rigor, Sip & Strategy is more than just an agency. We are your partners in scaling. From crafting the perfect logo to architecting comprehensive digital experiences, we ensure every touchpoint resonates with luxury and purpose.
            </p>
          </div>
          
          <div className="picture-box" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(212,175,55,0.2)', minHeight: '400px' }}>
            <img src={whoWeAreImg} alt="Our Story" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </motion.div>

        {/* New Core Philosophy Section */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">Our Core <span className="text-gradient">Philosophy</span></h2>
        </motion.div>
        
        <motion.div variants={fadeInUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          <div className="glass" style={{ padding: '40px', borderRadius: '24px', borderLeft: '4px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-primary)' }}>Aesthetic Supremacy</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We believe that design is not just how it looks, but how it feels. Every pixel is meticulously placed to evoke emotion and convey luxury.</p>
          </div>
          <div className="glass" style={{ padding: '40px', borderRadius: '24px', borderLeft: '4px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-primary)' }}>Data-Driven Precision</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Gut feelings are great, but data is absolute. Our creative strategies are heavily backed by deep analytics to ensure maximum ROI.</p>
          </div>
          <div className="glass" style={{ padding: '40px', borderRadius: '24px', borderLeft: '4px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-primary)' }}>Relentless Innovation</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>The digital landscape moves fast, and we move faster. We utilize bleeding-edge frameworks and AI to keep your brand ahead of the curve.</p>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default About;
