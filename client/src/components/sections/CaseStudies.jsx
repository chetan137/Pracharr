import { motion } from 'framer-motion';

const CaseStudies = () => {
  const isInView = true;

  const caseStudies = [
    {
      title: 'TechVentures Rebrand',
      industry: 'Technology',
      description: 'Complete brand transformation that increased market perception by 340%',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual video ID
      metrics: [
        { value: '340%', label: 'Brand Lift' },
        { value: '2.5M', label: 'Impressions' }
      ]
    },
    {
      title: 'Luxe Lifestyle Launch',
      industry: 'Luxury Retail',
      description: 'Premium lifestyle brand launch that captured the luxury market instantly',
      youtubeId: 'jNQXAC9IVRw', // Replace with actual video ID
      metrics: [
        { value: '₹50L', label: 'Revenue' },
        { value: '180%', label: 'ROI' }
      ]
    },
    {
      title: 'GreenEarth Campaign',
      industry: 'Sustainability',
      description: 'Viral sustainability campaign that became a cultural movement',
      youtubeId: '9bZkp7q19f0', // Replace with actual video ID
      metrics: [
        { value: '10M+', label: 'Views' },
        { value: '89%', label: 'Engagement' }
      ]
    },
    {
      title: 'FinTech Revolution',
      industry: 'Finance',
      description: 'Humanizing finance through storytelling that built unprecedented trust',
      youtubeId: 'ScMzIvxBSi4', // Replace with actual video ID
      metrics: [
        { value: '500K', label: 'Users' },
        { value: '4.8★', label: 'Rating' }
      ]
    }
  ];

  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="tagline">Our Work</span>
          <h2>Stories We've <span style={{ fontStyle: 'italic' }}>Crafted</span></h2>
          <p>Every project is a testament to the power of creative storytelling and strategic thinking.</p>
        </motion.div>

        <motion.div
          className="case-studies-slider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="case-study-card"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* YouTube Video Thumbnail */}
              <div className="case-study-video">
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--accent-dark)'
                }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${study.youtubeId}?rel=0&modestbranding=1`}
                    title={study.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                  />
                </div>
              </div>

              <div className="case-study-content">
                <span className="case-study-tag">{study.industry}</span>
                <h3>{study.title}</h3>
                <p>{study.description}</p>

                <div className="case-study-metrics">
                  {study.metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      className="metric"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
