const express = require('express');
const router = express.Router();

const {
  createWasteReport,
  getWasteReports
} = require('../controllers/wasteController');

const uploadWaste = require('../middleware/uploadWaste');

// POST /api/waste
router.post('/', uploadWaste.single('image'), createWasteReport);

// GET /api/waste
router.get('/', getWasteReports);

module.exports = router;