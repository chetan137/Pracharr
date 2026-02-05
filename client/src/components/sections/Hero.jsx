import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  const titleVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = (e) => {
    e.preventDefault();
    document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Background Elements */}
      <div className="hero-bg">
        <motion.div className="hero-pr4" style={{ y }}>
          प्र-4
        </motion.div>
        <motion.div
          className="hero-gradient-orb orb-1"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="hero-gradient-orb orb-2"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Content */}
      <motion.div className="hero-content" style={{ opacity, scale }}>
        <motion.div
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="pr4-mini">प्र-4</span>
          <span>Creative Publicity Agency</span>
        </motion.div>

        <h1 className="hero-title">
          <span className="line">
            <motion.span
              className="word"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              We Don't Do
            </motion.span>
          </span>
          <span className="line">
            <motion.span
              className="word accent"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              Marketing.
            </motion.span>
          </span>
          <span className="line">
            <motion.span
              className="word"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              We Craft{' '}
              <motion.span
                className="accent"
                whileHover={{ scale: 1.05 }}
              >
                Legacies.
              </motion.span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          At Pracharr, we believe brands are not built through ads —
          they are built through stories that refuse to be forgotten.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary"
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Story
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#case-studies"
            className="btn btn-outline"
            onClick={scrollToWork}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>Scroll</span>
        <motion.div
          className="scroll-line"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
