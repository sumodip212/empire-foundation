const WasteReport = require('../models/WasteReport');

// @desc   Create Waste Report
// @route  POST /api/waste
const createWasteReport = async (req, res) => {
  try {
    const {
      address,
      latitude,
      longitude,
      issueType,
      description
    } = req.body;

    if (!address) {
      return res.status(400).json({
        success: false,
        message: 'Address is required'
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Waste image is required'
      });
    }

    const newWasteReport = await WasteReport.create({
      image: req.file.filename,
      address,
      latitude,
      longitude,
      issueType,
      description
    });

    res.status(201).json({
      success: true,
      message: 'Waste report submitted successfully!',
      data: newWasteReport
    });

  } catch (error) {
    console.error('Waste Report Error:', error);

    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc   Get All Waste Reports
// @route  GET /api/waste
const getWasteReports = async (req, res) => {
  try {
    const reports = await WasteReport.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: reports.length,
      data: reports
    });

  } catch (error) {
    console.error('Fetch Waste Reports Error:', error);

    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

module.exports = {
  createWasteReport,
  getWasteReports
};