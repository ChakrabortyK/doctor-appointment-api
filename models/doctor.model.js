const mongoose = require("mongoose");

// Define Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
});

// Create Doctor Model
const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
