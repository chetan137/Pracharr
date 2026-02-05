const SEO = require('../models/SEO');

exports.getSEO = async (req, res) => {
  try {
    const seo = await SEO.findOne({ page: req.params.page });
    res.status(200).json({ success: true, data: seo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateSEO = async (req, res) => {
  try {
    req.body.updatedAt = Date.now();
    const seo = await SEO.findOneAndUpdate(
      { page: req.params.page },
      req.body,
      { new: true, upsert: true, runValidators: true }
    );
    res.status(200).json({ success: true, data: seo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllSEO = async (req, res) => {
  try {
    const seo = await SEO.find();
    res.status(200).json({ success: true, data: seo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
