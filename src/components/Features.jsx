import React from 'react';
import './Features.css';

const featuresData = [
  {
    title: 'Brand Elevation',
    description: 'We position your brand to stand out in a crowded market with tailored strategies and modern aesthetics.',
    icon: '✨'
  },
  {
    title: 'Data-Driven Insights',
    description: 'Our marketing decisions are backed by deep analytics, ensuring maximum ROI and targeted engagement.',
    icon: '📈'
  },
  {
    title: 'Dynamic Campaigns',
    description: 'Engaging, cross-channel campaigns that tell your story and captivate your audience.',
    icon: '🎯'
  }
];

const Features = () => {
  return (
    <section id="features" className="section features">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          Why Choose <span className="text-gradient">Sip & Strategy</span>
        </h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card glass animate-fade-in-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
