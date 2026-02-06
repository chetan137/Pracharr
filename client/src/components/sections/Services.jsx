import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const services = [
  {
    icon: '🎬',
    title: 'Video Production',
    description: 'From concept to final cut, we create cinematic videos that tell your brand story. Our production team handles everything from scripting to post-production.',
    features: ['Brand Films', 'Commercial Ads', 'Social Media Content', 'Event Coverage']
  },
  {
    icon: '📱',
    title: 'Digital Marketing',
    description: 'Strategic digital campaigns that drive real results. We combine creativity with data to reach your audience where they are most engaged.',
    features: ['Social Media Strategy', 'Paid Advertising', 'Content Marketing', 'Analytics & Insights']
  },
  {
    icon: '🎨',
    title: 'Brand Design',
    description: 'Building memorable brand identities that stand out. We craft visual systems that communicate your unique value and connect with your audience.',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Packaging Design']
  }
];

const ServiceCard = ({ service, index, total, scrollYProgress }) => {
  const step = 1 / total;
  const startRange = index * step;
  const endRange = (index + 1) * step;

  const y = useTransform(
    scrollYProgress,
    [startRange - step * 0.5, startRange, endRange, endRange + step * 0.5],
    ['100%', '0%', '0%', '-30%']
  );

  const opacity = useTransform(
    scrollYProgress,
    [startRange - step * 0.3, startRange, endRange - step * 0.2, endRange],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [startRange, endRange],
    [1, 0.95]
  );

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        y,
        opacity,
        scale,
        zIndex: index + 1
      }}
    >
      <div className="service-card-content">
        <span className="service-number">0{index + 1}</span>
        <span className="service-icon">{service.icon}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-features">
          {service.features.map((feature, i) => (
            <span key={i} className="service-feature">{feature}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);

  const { scrollYProgress: rawScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scrollYProgress = useSpring(rawScrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      id="services"
      className="services-scroll-section"
      style={{
        height: `${services.length * 100}vh`,
        position: 'relative',
        background: 'var(--accent-dark)'
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          height: '100%',
          padding: '0 5%'
        }}>

          {/* LEFT - Service Cards */}
          <div style={{
            position: 'relative',
            height: '60vh'
          }}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                total={services.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* RIGHT - Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'left',
              paddingLeft: '40px'
            }}
          >
            <span className="tagline" style={{ color: 'var(--primary)', opacity: 0.7 }}>What We Do</span>
            <h2 style={{
              color: 'var(--primary)',
              marginTop: '15px',
              fontSize: '3rem',
              lineHeight: 1.2
            }}>
              Services That <br/><span style={{ fontStyle: 'italic' }}>Transform</span>
            </h2>
            <p style={{
              color: 'var(--primary)',
              opacity: 0.8,
              marginTop: '25px',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '450px'
            }}>
              We offer comprehensive creative solutions designed to elevate your brand from ordinary to extraordinary. Our team combines strategy, creativity, and execution to deliver results that matter.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
