const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor.model");

// Route: GET /api/doctors/:id/availability
// Description: Get availability of a specific doctor by ID
router.get("/:id/availability", async (req, res) => {
  try {
    // Get the doctor by ID
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Your logic to calculate doctor's availability goes here
    // For example, you may have a separate method to fetch availability data

    // Dummy response for demonstration
    const availability = [
      { date: "2024-04-22", slots: ["10:00 AM", "11:00 AM"] },
      { date: "2024-04-23", slots: ["09:00 AM", "10:00 AM"] },
    ];

    res.json({ doctor, availability });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch availability", error: err.message });
  }
});

module.exports = router;
