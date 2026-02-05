import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Founders = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const founders = [
    {
      name: 'Rahul Verma',
      role: 'Founder & Creative Director',
      initials: 'RV',
      bio: 'A storyteller at heart, Rahul has spent 15 years turning brands into cultural phenomena. With a background in advertising and a passion for bold creativity, he founded Pracharr to challenge the mundane.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Ananya Kapoor',
      role: 'Co-Founder & Strategy Head',
      initials: 'AK',
      bio: 'Ananya brings strategic brilliance that transforms creative ideas into business results. An MBA from IIM with experience at global agencies, she ensures every creative leap is grounded in solid strategy.',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section id="founders" className="section founders" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="tagline">The Team</span>
          <h2>The Minds <span style={{ fontStyle: 'italic' }}>Behind</span></h2>
          <p>Creative visionaries who believe in the power of bold ideas and relentless execution.</p>
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
