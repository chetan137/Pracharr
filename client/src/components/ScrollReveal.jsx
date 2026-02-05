import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 60,
  once = false,
  className = '',
  style = {}
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: once,
    margin: "-100px 0px -100px 0px"
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, x: 0 };
      case 'down': return { y: -distance, x: 0 };
      case 'left': return { x: distance, y: 0 };
      case 'right': return { x: -distance, y: 0 };
      case 'scale': return { scale: 0.9, y: 30 };
      default: return { y: distance, x: 0 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'scale': return { scale: 1, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition()
    },
    visible: {
      opacity: 1,
      ...getFinalPosition(),
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animation wrapper
export const ScrollRevealContainer = ({
  children,
  staggerDelay = 0.1,
  className = '',
  style = {}
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px 0px -100px 0px"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

// Item for staggered animations
export const ScrollRevealItem = ({
  children,
  direction = 'up',
  distance = 40,
  className = '',
  style = {}
}) => {
  const getPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return { y: distance };
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getPosition()
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
