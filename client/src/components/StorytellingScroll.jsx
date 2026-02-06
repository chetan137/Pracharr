import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FullPageSection = ({ children, index, total, scrollYProgress, direction = 'bottom' }) => {
  const step = 1 / total;
  const startRange = index * step;
  const endRange = (index + 1) * step;

  // Animation values based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { x: '-120%', y: '0%', rotate: -5 };
      case 'right': return { x: '120%', y: '0%', rotate: 5 };
      case 'top': return { x: '0%', y: '-120%', rotate: 0 };
      case 'bottom':
      default: return { x: '0%', y: '120%', rotate: 0 };
    }
  };

  const initial = getInitialPosition();

  // Y transform
  const y = useTransform(
    scrollYProgress,
    [startRange - step * 0.8, startRange, endRange, endRange + step * 0.8],
    [initial.y, '0%', '0%', '-40%']
  );

  // X transform
  const x = useTransform(
    scrollYProgress,
    [startRange - step * 0.8, startRange, endRange, endRange + step * 0.8],
    [initial.x, '0%', '0%', '0%']
  );

  // Subtle rotation for a more playful feel as it enters
  const rotate = useTransform(
    scrollYProgress,
    [startRange - step * 0.8, startRange, endRange],
    [initial.rotate || 0, 0, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [startRange - step * 0.4, startRange, endRange - step * 0.2, endRange],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [startRange - step * 0.5, startRange, endRange, endRange + step * 0.5],
    [0.8, 1, 1, 0.9]
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
        x,
        y,
        rotate,
        opacity,
        scale,
        zIndex: index + 1,
        pointerEvents: 'auto'
      }}
    >
      {children}
    </motion.div>
  );
};

const StorytellingScroll = ({ sections, id }) => {
  const containerRef = useRef(null);
  const { scrollYProgress: rawScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll value
  const scrollYProgress = useSpring(rawScrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      id={id}
      style={{
        height: `${sections.length * 100}vh`,
        position: 'relative',
        backgroundColor: 'var(--primary)'
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}>
        {sections.map((section, index) => (
          <FullPageSection
            key={index}
            index={index}
            total={sections.length}
            scrollYProgress={scrollYProgress}
            direction={section.direction}
          >
            {section.content}
          </FullPageSection>
        ))}
      </div>
    </section>
  );
};

export default StorytellingScroll;
