# Outpatient Appointment System

## Overview

This is a simple outpatient appointment system API built with Node.js, Express, and MongoDB. The system allows users to manage doctors and appointments for outpatient consultations.

### Features

- Doctors Listing: Get a list of all doctors practicing at the location.
- Doctor Detail: View detailed information about a specific doctor.
- Availability: Check the availability of a doctor for appointments.
- Appointment Booking: Book appointments with available doctors.

### Installation

Clone the repository:

```bash
git clone <repository_url>
```

Install dependencies:

```bash
cd outpatient-appointment-system
npm install
```

Set up environment variables:

- Create a .env file in the root directory.
- Add the following environment variables:

```
PORT=3000
MONGODB_URI=<your_mongodb_connection_uri>
```

Run the application:

```bash
npm start
```

The server will start running at http://localhost:3000.

### API Endpoints

#### Doctors:

- GET /api/doctors: Get all doctors.
- GET /api/doctors/:id: Get a specific doctor by ID.
- POST /api/doctors: Create a new doctor.

```json
{
  "name": "Test2",
  "specialty": "spc2",
  "schedule": "Monday"
}
```

#### Availability:

- GET /api/availability/:doctorId: Get the availability of a specific doctor.

#### Appointments:

- GET /api/appointments: Get all appointments.
- POST /api/appointments/book: Book a new appointment.

```json
{
  "doctor_id": "66266cf40664be8e73dc46cc",
  "patientName": "Patient3",
  "date": "2024-04-22T10:00:00.000Z",
  "time": "12PM"
}
```

### Dependencies

Express: Web framework for Node.js.
Mongoose: MongoDB object modeling tool.
dotenv: Load environment variables from a .env file.

### Contributing

Contributions are welcome! Feel free to open issues and pull requests.
