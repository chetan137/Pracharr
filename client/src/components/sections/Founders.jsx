import { motion } from 'framer-motion';

const Founders = () => {
  const isInView = true; // Handled by parent scroll component

  const founders = [
    {
      name: 'Ruhani Mehra',
      role: 'Founder & Creative Director',
      initials: 'RM',
      bio: 'Leads creative direction, brand voice, and storytelling. Every campaign carries intentionality, personality, and punch.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Namit Gupta',
      role: 'Co-Founder & Analytics Lead',
      initials: 'NG',
      bio: 'Leads sales strategy, analytics, and growth systems. Ensures creative work turns into measurable results.',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section id="founders" className="section founders">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="tagline">WHO RUNS PRACHARR</span>
          <h2>Founder-Led. Taste-Driven.<br/><span style={{ fontStyle: 'italic' }}>Results-Oriented.</span></h2>
          <p>Different roles. Same obsession: building brands that stick.</p>
        </motion.div>

        <div className="founders-grid">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="founder-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="founder-avatar"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {founder.initials}
              </motion.div>

              <div className="founder-info">
                <h3>{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p className="founder-bio">{founder.bio}</p>

                <div className="founder-socials">
                  <motion.a
                    href={founder.linkedin}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    in
                  </motion.a>
                  <motion.a
                    href={founder.twitter}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    𝕏
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
