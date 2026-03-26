const express = require('express');
const router = express.Router();

const {
  createContact,
  getContacts
} = require('../controllers/contactController');

// POST /api/contact
router.post('/', createContact);

// GET /api/contact
router.get('/', getContacts);

module.exports = router;