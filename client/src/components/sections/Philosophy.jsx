import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardData = [
    { icon: '🎯', title: 'Strategy First', desc: 'Every stroke of creativity begins with strategy' },
    { icon: '✨', title: 'Bold Thinking', desc: 'Safe ideas never made history' },
    { icon: '🚀', title: 'Results Driven', desc: 'Art that moves needles, not just hearts' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="philosophy" className="section philosophy" ref={ref}>
      <div className="container">
        <div className="philosophy-content">
          <motion.div
            className="philosophy-text"
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="tagline"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.7 } : {}}
              transition={{ delay: 0.2 }}
              style={{ display: 'block', marginBottom: '20px', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem' }}
            >
              — Our Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Creativity That<br/>
              <span style={{ fontStyle: 'italic' }}>Commands Attention</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.85 } : {}}
              transition={{ delay: 0.5 }}
              style={{ fontSize: '1.15rem', marginTop: '25px' }}
            >
              In a world drowning in content, we create moments that make people pause.
              We don't chase trends — we set them. Every campaign we craft is a statement,
              every brand we build is a movement.
            </motion.p>

            <motion.blockquote
              className="philosophy-quote"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 0.9, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              "Think Different. Be Remembered."
            </motion.blockquote>
          </motion.div>

          <motion.div
            className="philosophy-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              className="philosophy-pr4"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            >
              प्र-4
            </motion.div>

            <motion.div
              className="philosophy-cards"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  className="philosophy-card"
                  variants={itemVariants}
                  whileHover={{ x: 15, backgroundColor: 'rgba(255, 240, 216, 0.1)' }}
                >
                  <span className="philosophy-card-icon">{card.icon}</span>
                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
