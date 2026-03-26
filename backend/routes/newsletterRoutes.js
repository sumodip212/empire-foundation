const express = require('express');
const router = express.Router();

const {
  subscribe,
  getSubscribers
} = require('../controllers/newsletterController');

// POST /api/newsletter
router.post('/', subscribe);

// GET /api/newsletter
router.get('/', getSubscribers);

module.exports = router;