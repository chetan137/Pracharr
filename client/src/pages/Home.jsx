import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import Services from '../components/sections/Services';
import CaseStudies from '../components/sections/CaseStudies';
import Founders from '../components/sections/Founders';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';
import { LayeredPanel } from '../components/StackedScroll';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Pattern */}
      <div className="pr4-bg-pattern" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="stacked-scroll-container">
        {/* Hero Section - No layered effect, stays fixed feel */}
        <Hero />

        {/* Divider */}
        <LayeredPanel className="layered-panel--primary">
          <div className="divider" style={{ margin: '0 auto', width: '80%' }} />
        </LayeredPanel>

        {/* Philosophy Section */}
        <LayeredPanel
          className="layered-panel--primary"
          style={{ overflow: 'hidden' }}
        >
          <Philosophy />
        </LayeredPanel>

        {/* Services Section */}
        <LayeredPanel
          className="layered-panel--dark"
          style={{ overflow: 'hidden' }}
        >
          <Services />
        </LayeredPanel>

        {/* Case Studies Section */}
        <LayeredPanel
          className="layered-panel--gradient"
          style={{ overflow: 'hidden' }}
        >
          <CaseStudies />
        </LayeredPanel>

        {/* Founders Section */}
        <LayeredPanel
          className="layered-panel--primary"
          style={{ overflow: 'hidden' }}
        >
          <Founders />
        </LayeredPanel>

        {/* Testimonials Section */}
        <LayeredPanel
          className="layered-panel--dark"
          style={{ overflow: 'hidden' }}
        >
          <Testimonials />
        </LayeredPanel>

        {/* Contact Section */}

      </main>

      {/* Footer */}
      <LayeredPanel className="layered-panel--dark">
        <Footer />
      </LayeredPanel>
    </motion.div>
  );
};

export default Home;
