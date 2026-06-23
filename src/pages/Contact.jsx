import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './Home';

const Contact = () => {
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Let's <span className="text-gradient">Connect</span></h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
              Ready to elevate your brand? Drop us a line and let's start crafting your success story.
            </p>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: 'var(--accent-gold)' }}>Email</h4>
              <p>hello@sipandstrategy.com</p>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: 'var(--accent-gold)' }}>Office</h4>
              <p>123 Strategy Blvd, Suite 400<br />New York, NY 10001</p>
            </div>
          </div>

          <div style={{ flex: '1 1 400px' }}>
            <form className="glass" style={{ padding: '40px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} placeholder="John Doe" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} placeholder="john@example.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Message</label>
                <textarea rows="5" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', resize: 'vertical' }} placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ marginTop: '10px' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
