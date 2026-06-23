import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import FeaturesPage from './pages/Features';
import Contact from './pages/Contact';

// New Service Sub-pages
import ServicesHub from './pages/ServicesHub';
import ServiceBrandIdentity from './pages/ServiceBrandIdentity';
import ServiceDigitalMarketing from './pages/ServiceDigitalMarketing';
import ServiceWebDesign from './pages/ServiceWebDesign';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/services/brand-identity" element={<ServiceBrandIdentity />} />
        <Route path="/services/digital-marketing" element={<ServiceDigitalMarketing />} />
        <Route path="/services/web-design" element={<ServiceWebDesign />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        {/* ThreeWineGlass removed as requested */}
        <div className="content">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
