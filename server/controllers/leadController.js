const Lead = require('../models/Lead');

exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({ success: true, message: 'Thank you! We\'ll be in touch soon.', data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const { status, tag, page = 1, limit = 20 } = req.query;
    const query = {};
    if (status) query.status = status;
    if (tag) query.tag = tag;

    const leads = await Lead.find(query)
      .populate('assignedTo', 'name email')
      .populate('notes.addedBy', 'name')
      .sort('-createdAt')
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Lead.countDocuments(query);
    res.status(200).json({ success: true, data: leads, total, page: parseInt(page), pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('notes.addedBy', 'name');
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }
    res.status(200).json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.addNote = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }
    lead.notes.push({ content: req.body.content, addedBy: req.user._id });
    await lead.save();
    res.status(200).json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getLeadStats = async (req, res) => {
  try {
    const stats = await Lead.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);
    const tagStats = await Lead.aggregate([
      { $group: { _id: '$tag', count: { $sum: 1 } } }
    ]);
    const total = await Lead.countDocuments();
    const thisMonth = await Lead.countDocuments({
      createdAt: { $gte: new Date(new Date().setDate(1)) }
    });
    res.status(200).json({ success: true, data: { stats, tagStats, total, thisMonth } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
