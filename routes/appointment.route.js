const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment.model");

// Route: GET /api/appointments
// Description: Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch appointments", error: err.message });
  }
});

// Route: POST /api/appointments/book
// Description: Book a new appointment
router.post("/book", async (req, res) => {
  try {
    const appointment = new Appointment({
      doctor: req.body.doctor_id,
      patientName: req.body.patientName,
      date: req.body.date,
      time: req.body.time,
    });

    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to book appointment", error: err.message });
  }
});

module.exports = router;
