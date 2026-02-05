import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: '🎯',
      title: 'Brand Strategy & Identity',
      description: 'Crafting distinctive brand identities that resonate and endure. We dive deep into your vision to create strategies that stand for something.',
      features: ['Brand Positioning', 'Visual Identity', 'Brand Guidelines', 'Messaging Framework']
    },
    {
      icon: '🚀',
      title: 'Creative Campaigns',
      description: 'Campaigns that spark conversations and drive action. From concept to execution, we create work that captures hearts and converts minds.',
      features: ['Campaign Strategy', 'Creative Direction', 'Content Production', 'Multi-Platform']
    },
    {
      icon: '💫',
      title: 'Digital Presence',
      description: 'Building commanding digital footprints across platforms. We architect experiences that engage, convert, and leave lasting impressions.',
      features: ['Web Design', 'Social Strategy', 'SEO & Content', 'Performance Marketing']
    },
    {
      icon: '✨',
      title: 'Storytelling & Content',
      description: 'Stories that stick, content that converts. We craft narratives that transform brands into movements and customers into advocates.',
      features: ['Brand Storytelling', 'Video Production', 'Copywriting', 'Content Strategy']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="tagline">What We Do</span>
          <h2>Services That <span style={{ fontStyle: 'italic' }}>Transform</span></h2>
          <p>We offer comprehensive creative solutions designed to elevate your brand from ordinary to extraordinary.</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -15 }}
            >
              <span className="service-number">0{index + 1}</span>

              <motion.span
                className="service-icon"
                whileHover={{ scale: 1.3, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.span>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, i) => (
                  <motion.span
                    key={i}
                    className="service-feature"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 240, 216, 0.15)' }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
