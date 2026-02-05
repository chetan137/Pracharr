const express = require('express');
const { createLead, getLeads, getLead, updateLead, addNote, getLeadStats } = require('../controllers/leadController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', createLead);
router.get('/', protect, getLeads);
router.get('/stats', protect, getLeadStats);
router.get('/:id', protect, getLead);
router.put('/:id', protect, updateLead);
router.post('/:id/notes', protect, addNote);

module.exports = router;
