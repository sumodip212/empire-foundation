const SOS = require('../models/SOS');

// POST /api/sos
const createSOS = async (req, res) => {
  try {
    const { type, name, phone, location } = req.body;

    if (!type) {
      return res.status(400).json({
        success: false,
        message: 'SOS type is required'
      });
    }

    const newSOS = await SOS.create({
      type,
      name,
      phone,
      location
    });

    res.status(201).json({
      success: true,
      message: 'SOS alert sent successfully!',
      data: newSOS
    });
  } catch (error) {
    console.error('SOS Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// GET /api/sos (for admin later)
const getSOS = async (req, res) => {
  try {
    const alerts = await SOS.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: alerts.length,
      data: alerts
    });
  } catch (error) {
    console.error('Fetch SOS Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

const updateSOSStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await SOS.findByIdAndUpdate(
      id,
      { status: 'resolved' },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'SOS not found'
      });
    }

    res.json({
      success: true,
      message: 'SOS marked as resolved',
      data: updated
    });
  } catch (error) {
    console.error('Update SOS Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  createSOS,
  getSOS,
  updateSOSStatus
};

