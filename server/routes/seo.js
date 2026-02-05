const express = require('express');
const { getSEO, updateSEO, getAllSEO } = require('../controllers/seoController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, getAllSEO);
router.get('/:page', getSEO);
router.put('/:page', protect, authorize('admin', 'editor'), updateSEO);

module.exports = router;
