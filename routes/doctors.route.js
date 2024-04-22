const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor.model");

// Route: GET /api/doctors
// Description: Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const doctor = new Doctor({
    name: req.body.name,
    specialty: req.body.specialty,
    schedule: req.body.schedule,
  });

  try {
    const newDoctor = await doctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route: GET /api/doctors/:id
// Description: Get a specific doctor by ID
router.get("/:id", getDoctor, (req, res) => {
  res.json(res.doctor);
});

// Middleware function to get a doctor by ID
async function getDoctor(req, res, next) {
  let doctor;
  try {
    doctor = await Doctor.findById(req.params.id);
    if (doctor == null) {
      return res.status(404).json({ message: "Doctor not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.doctor = doctor;
  next();
}

module.exports = router;
