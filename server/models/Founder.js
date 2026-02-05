const mongoose = require('mongoose');

const FounderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: String,
  shortBio: String,
  avatar: String,
  email: String,
  linkedin: String,
  twitter: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Founder', FounderSchema);
