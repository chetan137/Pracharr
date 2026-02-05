const Founder = require('../models/Founder');

exports.getFounders = async (req, res) => {
  try {
    const founders = await Founder.find({ isActive: true }).sort('order');
    res.status(200).json({ success: true, data: founders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createFounder = async (req, res) => {
  try {
    const founder = await Founder.create(req.body);
    res.status(201).json({ success: true, data: founder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateFounder = async (req, res) => {
  try {
    const founder = await Founder.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, data: founder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteFounder = async (req, res) => {
  try {
    await Founder.findByIdAndUpdate(req.params.id, { isActive: false });
    res.status(200).json({ success: true, message: 'Founder deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
