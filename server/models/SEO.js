const mongoose = require('mongoose');

const SEOSchema = new mongoose.Schema({
  page: { type: String, required: true, unique: true },
  title: String,
  description: String,
  keywords: [String],
  ogTitle: String,
  ogDescription: String,
  ogImage: String,
  twitterCard: { type: String, default: 'summary_large_image' },
  canonicalUrl: String,
  noIndex: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SEO', SEOSchema);
