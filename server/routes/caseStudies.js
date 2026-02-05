const express = require('express');
const { getCaseStudies, getCaseStudy, createCaseStudy, updateCaseStudy, deleteCaseStudy } = require('../controllers/caseStudyController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', getCaseStudies);
router.get('/:slug', getCaseStudy);
router.post('/', protect, authorize('admin', 'editor'), createCaseStudy);
router.put('/:id', protect, authorize('admin', 'editor'), updateCaseStudy);
router.delete('/:id', protect, authorize('admin'), deleteCaseStudy);

module.exports = router;
