const mongoose = require('mongoose');

const CaseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  client: String,
  industry: String,
  challenge: String,
  solution: String,
  results: String,
  testimonial: String,
  thumbnail: String,
  images: [String],
  tags: [String],
  metrics: [{
    label: String,
    value: String
  }],
  isFeatured: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

CaseStudySchema.pre('save', function(next) {
  this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  next();
});

module.exports = mongoose.model('CaseStudy', CaseStudySchema);
