# Hospital Appointment Booking System

A basic web application to book outpatient hospital appointments using Node.js, Express, and MongoDB.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server (make sure MongoDB compass is running locally on port `27017`):
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your web browser.

## Check Database
- **Method 1:** Open MongoDB Compass, connect to `localhost:27017`, and look inside `HospitalDB` -> `appointments` collection.
- **Method 2:** After starting the app, visit `http://localhost:3000` and scroll down to the "Today's Appointments" table to see booked patients.
- **Method 3:** Visit `http://localhost:3000/appointments` to see raw JSON database data.
