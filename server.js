const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://0.0.0.0:27017/hospital")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the application if unable to connect to the database
  });

// Middleware
app.use(express.json());

// Routes
app.use("/api/doctors", require("./routes/doctors.route"));
app.use("/api/appointments", require("./routes/appointment.route"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/test", (req, res) => {
  res.status(200).send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
