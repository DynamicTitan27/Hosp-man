# Hospital Appointment Booking System

A full-stack web application designed for booking outpatient hospital appointments built with Node.js, Express, MongoDB, HTML, CSS, and Vanilla JavaScript.

## Prerequisites
- **Node.js**: [Download and install](https://nodejs.org/en/)
- **MongoDB**: The application uses a local MongoDB database implicitly. Make sure [MongoDB Community Server](https://www.mongodb.com/try/download/community) is installed and running on your machine on the default port `27017`.

## How to Run the Project

1. **Install dependencies:**
   Open a terminal in the project directory and run:
   ```bash
   npm install
   ```

2. **Start the application:**
   In the same terminal window, start the server:
   ```bash
   npm start
   ```

3. **Access the application:**
   Open any web browser and go to:
   ```text
   http://localhost:3000
   ```

## Checking the Database

The application connects to a MongoDB database named `HospitalDB` and a collection named `appointments`. 

Here are three common ways to view your database data:

### Method 1: Using MongoDB Compass (GUI)
1. Download and open **MongoDB Compass**.
2. Click **Connect** using the default URI (`mongodb://localhost:27017/`).
3. In the left sidebar, look for the **HospitalDB** database.
4. Click on **appointments** to view all the records that have been submitted via the form.

### Method 2: Accessing from Frontend Table
The easiest way to check if your database is receiving records is simply to look at the **Today's Appointments** table at the bottom of the UI at `http://localhost:3000`. By default, this fetches all saved appointments securely from your DB.

### Method 3: Direct API Request
Alternatively, you can get raw JSON data directly from the server:
- Open a web browser and go to `http://localhost:3000/appointments`
- This endpoint queries the `HospitalDB` and prints out the results directly.
