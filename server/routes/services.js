const express = require('express');
const { getServices, getService, createService, updateService, deleteService } = require('../controllers/serviceController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', getServices);
router.get('/:slug', getService);
router.post('/', protect, authorize('admin', 'editor'), createService);
router.put('/:id', protect, authorize('admin', 'editor'), updateService);
router.delete('/:id', protect, authorize('admin'), deleteService);

module.exports = router;
