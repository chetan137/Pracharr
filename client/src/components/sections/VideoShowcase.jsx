import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const videos = [
  {
    id: 1,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Cinematic Narratives",
    description: "We bring stories to life with cinematic excellence, ensuring every frame captures the essence of your brand's message. Our approach combines visual artistry with strategic storytelling to create memorable experiences."
  },
  {
    id: 2,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    title: "Digital Innovation",
    description: "Pushing the boundaries of digital content, we integrate cutting-edge visual effects and dynamic editing styles. We don't just follow trends; we set them, creating visual languages that speak directly to the modern audience."
  },
  {
    id: 3,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    title: "Impactful Production",
    description: "From concept to final cut, our production process is designed for impact. We focus on high-quality output that drives engagement and elevates your brand presence in a crowded digital landscape."
  }
];

const VideoCard = ({ video, index, total, scrollYProgress }) => {
  const step = 1 / total;
  const startRange = index * step;
  const endRange = (index + 1) * step;

  // Entrance: Card slides in and becomes fully opaque
  // Exit: Card fades and slides up slightly
  const y = useTransform(
    scrollYProgress,
    [startRange - step * 0.5, startRange, endRange, endRange + step * 0.5],
    ['100%', '0%', '0%', '-20%']
  );

  const opacity = useTransform(
    scrollYProgress,
    [startRange - step * 0.2, startRange, endRange - step * 0.1, endRange],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [startRange, endRange],
    [1, 0.9]
  );

  const zIndex = index + 1;

  // Only the current active card should have pointer events
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      setIsActive(v >= startRange && v < endRange);
    });
  }, [scrollYProgress, startRange, endRange]);

  return (
    <motion.div
      className="video-showcase-card"
      style={{
        y,
        scale,
        opacity,
        zIndex,
        pointerEvents: isActive ? 'auto' : 'none'
      }}
    >
      <div className="video-content-grid">
        <div className="video-column">
          <div className="video-wrapper">
             <video
               src={video.src}
               autoPlay
               loop
               muted
               playsInline
               className="showcase-video"
             />
             <div className="video-overlay"></div>
          </div>
        </div>
        <div className="description-column">
          <div className="description-content">
             <span className="case-number">0{video.id}</span>
             <h3 className="video-title">{video.title}</h3>
             <p className="video-desc">{video.description}</p>
             <button className="btn btn-outline btn-sm">Watch Full Film</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoShowcase = () => {
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
    <section ref={containerRef} className="video-showcase-section">
      <div className="video-sticky-container">
        <h2 className="showcase-header" style={{ position: 'relative', top: '1rem',  left: '1rem', zIndex: 10 }}>Featured Stories</h2>
        <div className="cards-stack">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              total={videos.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
