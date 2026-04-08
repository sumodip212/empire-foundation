const Volunteer = require("../models/Volunteer");

// Apply Volunteer
exports.applyVolunteer = async (req, res) => {
  try {
    const { name, email, phone, city, whyJoin } = req.body;

    // check existing volunteer
    const existing = await Volunteer.findOne({ email });

    if (existing) {
      if (existing.status === "rejected") {
        // allow reapply → update data
        existing.name = name;
        existing.phone = phone;
        existing.city = city;
        existing.whyJoin = whyJoin;
        existing.status = "pending";

        await existing.save();

        return res.status(200).json({
          success: true,
          message: "Reapplied successfully",
        });
      }

      // if pending or approved → block
      return res.status(400).json({
        success: false,
        message: "You have already applied",
      });
    }

    // create new volunteer
    await Volunteer.create({
      name,
      email,
      phone,
      city,
      whyJoin,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: volunteers.length,
      volunteers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//APPROVE

exports.approveVolunteer = async (req, res) => {
  try {
    const { id } = req.params;

    const volunteer = await Volunteer.findById(id);

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    volunteer.status = "approved";
    await volunteer.save();

    res.status(200).json({
      success: true,
      message: "Volunteer approved",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// REJECT

exports.rejectVolunteer = async (req, res) => {
  try {
    const { id } = req.params;

    const volunteer = await Volunteer.findById(id);

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    volunteer.status = "rejected";
    await volunteer.save();

    res.status(200).json({
      success: true,
      message: "Volunteer rejected",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};