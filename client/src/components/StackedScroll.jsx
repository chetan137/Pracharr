import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StackedSection = ({
  children,
  index,
  totalSections,
  bgColor = 'var(--primary)',
  className = ''
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform values for the stacked effect
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.8]);

  // Calculate z-index based on scroll position
  const zIndex = totalSections - index;

  return (
    <motion.div
      ref={sectionRef}
      className={`stacked-section ${className}`}
      style={{
        y,
        scale,
        opacity,
        zIndex,
        backgroundColor: bgColor,
        position: 'relative',
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
};

// Full-page stacked scroll container
export const StackedScrollContainer = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const totalSections = Array.isArray(children) ? children.length : 1;

  return (
    <div ref={containerRef} className="stacked-scroll-container">
      {Array.isArray(children) ? children.map((child, index) => (
        <StackedSection
          key={index}
          index={index}
          totalSections={totalSections}
        >
          {child}
        </StackedSection>
      )) : children}
    </div>
  );
};

// Individual panel with layered effect
export const LayeredPanel = ({
  children,
  bgColor,
  className = '',
  style = {}
}) => {
  const panelRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"]
  });

  // Layered animation transforms
  const y = useTransform(scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [150, 50, 0, -30, -80]
  );
  const scale = useTransform(scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.92, 0.96, 1, 0.98, 0.95]
  );
  const rotateX = useTransform(scrollYProgress,
    [0, 0.5, 1],
    [4, 0, -2]
  );
  const opacity = useTransform(scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.5, 0.9, 1, 0.95, 0.7]
  );

  return (
    <motion.div
      ref={panelRef}
      className={`layered-panel ${className}`}
      style={{
        y,
        scale,
        rotateX,
        opacity,
        ...(bgColor && { backgroundColor: bgColor }),
        transformPerspective: 1200,
        transformOrigin: 'center top',
        willChange: 'transform',
        ...style
      }}
    >
      <div className="layered-panel-content">
        {children}
      </div>
    </motion.div>
  );
};

export default StackedSection;
