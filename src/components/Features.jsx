import React from 'react';
import './Features.css';

const featuresData = [
  {
    title: 'Brand Elevation',
    description: 'We position your brand to stand out in a crowded market with tailored strategies and modern aesthetics.',
    details: ['Premium Visual Identity', 'Luxury Brand Positioning', 'Cohesive Design Systems'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '45px', height: '45px' }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    title: 'Data-Driven Insights',
    description: 'Our marketing decisions are backed by deep analytics, ensuring maximum ROI and targeted engagement.',
    details: ['Predictive Analytics Modeling', 'Real-time Campaign Tracking', 'A/B Testing & Optimization'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '45px', height: '45px' }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  },
  {
    title: 'Dynamic Campaigns',
    description: 'Engaging, cross-channel campaigns that tell your story and captivate your audience.',
    details: ['Omnichannel Ad Strategies', 'Viral Social Content', 'High-Converting Copywriting'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '45px', height: '45px' }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  }
];

const Features = () => {
  return (
    <section id="features" className="section features">
      <div className="container">
        <h2 className="section-title animate-fade-in-up" style={{ textAlign: 'center' }}>
          Why Choose <span className="text-gradient">Sip & Strategy</span>
        </h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card glass animate-fade-in-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div className="feature-icon" style={{ marginBottom: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {feature.icon}
              </div>
              <h3 className="feature-title" style={{ fontSize: '1.6rem', marginBottom: '15px' }}>{feature.title}</h3>
              <p className="feature-description" style={{ color: 'var(--text-secondary)', marginBottom: '25px', textAlign: 'center', flexGrow: 1 }}>{feature.description}</p>
              
              <div style={{ width: '100%', height: '1px', background: 'rgba(212,175,55,0.2)', marginBottom: '20px' }}></div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%', textAlign: 'left' }}>
                {feature.details.map((detail, idx) => (
                  <li key={idx} style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
