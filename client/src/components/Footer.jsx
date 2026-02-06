import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Brand Strategy', href: '#services' },
      { name: 'Creative Campaigns', href: '#services' },
      { name: 'Digital Presence', href: '#services' },
      { name: 'Storytelling', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#philosophy' },
      { name: 'Our Work', href: '#case-studies' },
      { name: 'Team', href: '#founders' },
      { name: 'Careers', href: '#' }
    ],
    connect: [
      { name: 'Contact', href: '#contact' },
      { name: 'Instagram', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Twitter', href: '#' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <motion.div
              className="footer-logo"
              style={{
                fontFamily: 'var(--font-adore)',
                fontSize: '1.8rem',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span style={{ fontFamily: 'var(--font-kokila)', opacity: 0.8 }}>प्र-4</span> PRACHARR
            </motion.div>
            <p className="footer-description">
              We craft legacies through stories that refuse to be forgotten.
              India's premier creative publicity agency.
            </p>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Get in Touch</h4>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5 }}>
                <a href="mailto:hello@pracharr.com" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span>📧</span> hello@pracharr.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="tel:+919876543210" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span>📱</span> +91 98765 43210
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.7 }}>
                  <span>📍</span> Mumbai, India
                </div>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Pracharr. All rights reserved. | <Link to="/admin">Admin</Link></p>
          <div className="footer-socials">
            <motion.a
              href="#"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              in
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ig
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              𝕏
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
