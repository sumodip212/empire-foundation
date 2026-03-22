const mongoose = require('mongoose');

const sosSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['ambulance', 'police', 'fire', 'blood'],
      required: true
    },
    name: {
      type: String,
      default: 'Anonymous'
    },
    phone: {
      type: String
    },
    location: {
      type: String
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

module.exports = mongoose.model('SOS', sosSchema);