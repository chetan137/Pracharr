require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/content', require('./routes/content'));
app.use('/api/services', require('./routes/services'));
app.use('/api/case-studies', require('./routes/caseStudies'));
app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/founders', require('./routes/founders'));
app.use('/api/leads', require('./routes/leads'));
app.use('/api/seo', require('./routes/seo'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Pracharr API is running' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Pracharr Server running on port ${PORT}`);
});
