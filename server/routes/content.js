const express = require('express');
const { getContent, getContentBySection, updateContent } = require('../controllers/contentController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', getContent);
router.get('/:section', getContentBySection);
router.put('/:section', protect, authorize('admin', 'editor'), updateContent);

module.exports = router;
