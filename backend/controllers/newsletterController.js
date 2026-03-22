const Subscriber = require('../models/Subscriber');

// POST /api/newsletter
const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // check duplicate
    const exists = await Subscriber.findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: 'Already subscribed'
      });
    }

    const newSubscriber = await Subscriber.create({ email });

    res.status(201).json({
      success: true,
      message: 'Subscribed successfully!',
      data: newSubscriber
    });
  } catch (error) {
    console.error('Newsletter Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// GET /api/newsletter
const getSubscribers = async (req, res) => {
  try {
    const subs = await Subscriber.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: subs.length,
      data: subs
    });
  } catch (error) {
    console.error('Fetch Subscribers Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  subscribe,
  getSubscribers
};