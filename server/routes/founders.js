const express = require('express');
const { getFounders, createFounder, updateFounder, deleteFounder } = require('../controllers/founderController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', getFounders);
router.post('/', protect, authorize('admin', 'editor'), createFounder);
router.put('/:id', protect, authorize('admin', 'editor'), updateFounder);
router.delete('/:id', protect, authorize('admin'), deleteFounder);

module.exports = router;
