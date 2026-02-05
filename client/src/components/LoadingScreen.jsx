import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <motion.div
          className="loading-logo"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          प्र-4
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #fff0d8, transparent)',
            margin: '30px auto 0'
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '20px',
            fontSize: '0.9rem',
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }}
        >
          Crafting Legacies
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
