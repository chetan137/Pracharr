const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    enum: ['hero', 'philosophy', 'about', 'cta', 'footer'],
    unique: true
  },
  title: String,
  subtitle: String,
  content: String,
  tagline: String,
  ctaText: String,
  ctaLink: String,
  backgroundImage: String,
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Content', ContentSchema);
