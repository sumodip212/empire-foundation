const Contact = require('../models/Contact');

// @desc   Create new contact message
// @route  POST /api/contact
// @access Public
const createContact = async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message are required'
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      phone,
      interest,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
      data: newContact
    });
  } catch (error) {
    console.error('Contact Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc   Get all contacts (for admin later)
// @route  GET /api/contact
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Fetch Contacts Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  createContact,
  getContacts
};