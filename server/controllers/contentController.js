const Content = require('../models/Content');

exports.getContent = async (req, res) => {
  try {
    const content = await Content.find({ isActive: true }).sort('order');
    res.status(200).json({ success: true, data: content });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getContentBySection = async (req, res) => {
  try {
    const content = await Content.findOne({ section: req.params.section });
    res.status(200).json({ success: true, data: content });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateContent = async (req, res) => {
  try {
    req.body.updatedAt = Date.now();
    req.body.updatedBy = req.user._id;
    const content = await Content.findOneAndUpdate(
      { section: req.params.section },
      req.body,
      { new: true, upsert: true, runValidators: true }
    );
    res.status(200).json({ success: true, data: content });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
