import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import Services from '../components/sections/Services';
import CaseStudies from '../components/sections/CaseStudies';
import Founders from '../components/sections/Founders';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/Footer';
import StorytellingScroll from '../components/StorytellingScroll';
import VideoShowcase from '../components/sections/VideoShowcase';

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

      {/* Hero Section */}
      <Hero />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Services Section - One by One Scroll */}
      <Services />

      {/* Video Showcase Section */}
      <VideoShowcase />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Founders Section */}
      <Founders />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />

    </motion.div>
  );
};

export default Home;
