const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  company: String,
  businessType: {
    type: String,
    enum: ['startup', 'small-business', 'enterprise', 'agency', 'personal', 'other']
  },
  goals: String,
  budgetRange: {
    type: String,
    enum: ['under-50k', '50k-1l', '1l-3l', '3l-5l', '5l-10l', 'above-10l']
  },
  timeline: {
    type: String,
    enum: ['immediate', '1-month', '1-3-months', '3-6-months', 'flexible']
  },
  message: String,
  source: { type: String, default: 'website' },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost'],
    default: 'new'
  },
  tag: {
    type: String,
    enum: ['hot', 'warm', 'cold'],
    default: 'warm'
  },
  notes: [{
    content: String,
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    addedAt: { type: Date, default: Date.now }
  }],
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  convertedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', LeadSchema);
