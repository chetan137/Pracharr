const express = require('express');
const { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', getTestimonials);
router.post('/', protect, authorize('admin', 'editor'), createTestimonial);
router.put('/:id', protect, authorize('admin', 'editor'), updateTestimonial);
router.delete('/:id', protect, authorize('admin'), deleteTestimonial);

module.exports = router;
