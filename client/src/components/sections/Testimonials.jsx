import { motion } from 'framer-motion';

const Testimonials = () => {
  const isInView = true; // Handled by parent scroll component

  // YouTube video testimonials
  const videoTestimonials = [
    {
      id: 1,
      youtubeId: "LXb3EKWsInQ", // Placeholder: Creative Director interview
      name: "Arjun Mehta",
      role: "Founder & CEO",
      company: "TechVentures India"
    },
    {
      id: 2,
      youtubeId: "5qap5aO4i9A", // Placeholder: Lofi Girl (as a calm branding example) or similar safe placeholder
      name: "Priya Sharma",
      role: "Marketing Director",
      company: "Luxe Lifestyle"
    },
    {
      id: 3,
      youtubeId: "p7Qp3a5_D6g", // Placeholder: Another creative video
      name: "Vikram Desai",
      role: "Co-Founder",
      company: "GreenEarth Solutions"
    }
  ];

  const textTestimonials = [
    {
      name: 'Arjun Mehta',
      role: 'Founder & CEO',
      company: 'TechVentures India',
      initials: 'AM',
      content: "Pracharr didn't just rebrand us — they redefined how we see ourselves. Our brand now commands the respect it deserves.",
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director',
      company: 'Luxe Lifestyle',
      initials: 'PS',
      content: "Working with Pracharr was transformative. They understood our vision before we could articulate it ourselves.",
      rating: 5
    },
    {
      name: 'Vikram Desai',
      role: 'Co-Founder',
      company: 'GreenEarth Solutions',
      initials: 'VD',
      content: "The campaign Pracharr created for us wasn't just successful — it became a cultural moment.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="testimonials-wrapper">
          <motion.div
            className="testimonial-pr4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            प्र-4
          </motion.div>

          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="tagline">Testimonials</span>
            <h2>Words That <span style={{ fontStyle: 'italic' }}>Matter</span></h2>
            <p>What our partners say about working with Pracharr.</p>
          </motion.div>

          {/* Video Testimonials Section */}
          <div className="video-testimonials-section">
            <motion.h3
              className="sub-heading"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Watch Their Stories
            </motion.h3>
            <div className="video-testimonials-grid">
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="video-testimonial-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="youtube-embed-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                      title={`Testimonial from ${video.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="video-testimonial-info">
                    <h4>{video.name}</h4>
                    <p>{video.role}, {video.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text Testimonials */}
          <div className="testimonials-grid">
            {textTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.8 }}
                whileHover={{ y: -10 }}
              >
                <p className="testimonial-content">"{testimonial.content}"</p>

                <div className="testimonial-author">
                  <motion.div
                    className="testimonial-avatar"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonial.initials}
                  </motion.div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
