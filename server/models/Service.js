const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  shortDescription: String,
  fullDescription: String,
  icon: String,
  image: String,
  features: [String],
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

ServiceSchema.pre('save', function(next) {
  this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  next();
});

module.exports = mongoose.model('Service', ServiceSchema);
