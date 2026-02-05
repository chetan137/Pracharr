import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Arjun Mehta',
      role: 'Founder & CEO',
      company: 'TechVentures India',
      initials: 'AM',
      content: "Pracharr didn't just rebrand us — they redefined how we see ourselves. Our brand now commands the respect it deserves. The transformation was beyond our expectations.",
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director',
      company: 'Luxe Lifestyle',
      initials: 'PS',
      content: "Working with Pracharr was transformative. They understood our vision before we could articulate it ourselves. Their creative instinct is unparalleled in the industry.",
      rating: 5
    },
    {
      name: 'Vikram Desai',
      role: 'Co-Founder',
      company: 'GreenEarth Solutions',
      initials: 'VD',
      content: "The campaign Pracharr created for us wasn't just successful — it became a cultural moment. That's the Pracharr difference. They don't just market, they create movements.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section testimonials" ref={ref}>
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

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.8 }}
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
