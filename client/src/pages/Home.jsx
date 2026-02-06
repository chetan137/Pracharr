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
import StorytellingScroll from '../components/StorytellingScroll';
import VideoShowcase from '../components/sections/VideoShowcase';

const sectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: '100px 0',
  position: 'relative',
  zIndex: 2
};

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

      {/* Storytelling Content Group 1 */}
      <StorytellingScroll
        id="story-group-1"
        sections={[
          { content: <div style={sectionStyle}><Philosophy /></div>, direction: 'left' },
          { content: <div style={sectionStyle}><Services /></div>, direction: 'right' }
        ]}
      />

      {/* Video Showcase Section (Keep as is) */}
      <VideoShowcase />

      {/* Storytelling Content Group 2 */}
      <StorytellingScroll
        id="story-group-2"
        sections={[
          { content: <div style={sectionStyle}><CaseStudies /></div>, direction: 'bottom' },
          { content: <div style={sectionStyle}><Founders /></div>, direction: 'left' },
          { content: <div style={sectionStyle}><Testimonials /></div>, direction: 'right' }
        ]}
      />

      {/* Contact Section */}
      {/* <Contact /> */}

      {/* Footer */}
      <Footer />

    </motion.div>
  );
};

export default Home;
