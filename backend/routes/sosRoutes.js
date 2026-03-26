const express = require('express');
const router = express.Router();

const {
  createSOS,
  getSOS,
  updateSOSStatus 
} = require('../controllers/sosController');

// POST /api/sos
router.post('/', createSOS);


// GET /api/sos
router.get('/', getSOS);

router.put('/:id', updateSOSStatus);

module.exports = router;