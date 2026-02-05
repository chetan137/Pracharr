const CaseStudy = require('../models/CaseStudy');

exports.getCaseStudies = async (req, res) => {
  try {
    const query = { isActive: true };
    if (req.query.featured === 'true') query.isFeatured = true;
    const caseStudies = await CaseStudy.find(query).sort('-createdAt');
    res.status(200).json({ success: true, data: caseStudies });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findOne({ slug: req.params.slug, isActive: true });
    if (!caseStudy) {
      return res.status(404).json({ success: false, message: 'Case study not found' });
    }
    res.status(200).json({ success: true, data: caseStudy });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.create(req.body);
    res.status(201).json({ success: true, data: caseStudy });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, data: caseStudy });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteCaseStudy = async (req, res) => {
  try {
    await CaseStudy.findByIdAndUpdate(req.params.id, { isActive: false });
    res.status(200).json({ success: true, message: 'Case study deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
