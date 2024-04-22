const mongoose = require("mongoose");

// Define Appointment Schema
const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

// Create Appointment Model
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
