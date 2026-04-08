const express = require("express");
const router = express.Router();

const { applyVolunteer,
        getAllVolunteers,
        approveVolunteer,
        rejectVolunteer, } = require('../controllers/volunteerController');

// Apply volunteer
router.post("/apply", applyVolunteer);

// Get volunteer
router.get("/", getAllVolunteers);

router.patch("/:id/approve", approveVolunteer);
router.patch("/:id/reject", rejectVolunteer);

module.exports = router;

