import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    goals: '',
    budgetRange: '',
    timeline: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      await axios.post('http://localhost:5000/api/leads', formData);
      setStatus({ loading: false, success: true, error: '' });
      setFormData({
        name: '', email: '', phone: '', company: '', businessType: '',
        goals: '', budgetRange: '', timeline: '', message: ''
      });
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2>Let's Create<br/><span style={{ fontStyle: 'italic' }}>Something Bold</span></h2>
            <p>Ready to transform your brand into a legacy? We're here to craft your story.</p>

            <div className="contact-details">
              <motion.div
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <span className="contact-item-icon">📧</span>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@pracharr.com</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <span className="contact-item-icon">📱</span>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <span className="contact-item-icon">📍</span>
                <div>
                  <h4>Visit Us</h4>
                  <p>Mumbai, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
