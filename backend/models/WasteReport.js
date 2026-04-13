const mongoose = require('mongoose');

const wasteReportSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true,
      trim: true
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    },
    issueType: {
      type: String,
      enum: [
        'Garbage Dump',
        'Drainage Issue',
        'Broken Road',
        'Street Light',
        'Other',
        ''
      ],
      default: ''
    },
    description: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      enum: ['pending', 'resolved'],
      default: 'pending'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('WasteReport', wasteReportSchema);