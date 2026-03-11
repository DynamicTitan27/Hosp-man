const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/HospitalDB').then(()=>console.log('DB ok'));

const appointmentSchema = new mongoose.Schema({
  patientId: String,
  patientName: String,
  patientAge: Number,
  department: String,
  appointmentDate: Date
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.post('/book-appointment', async (req, res) => {
  try {
    const a = new Appointment(req.body);
    await a.save();
    res.status(201).json({ message: 'Success' });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get('/appointments', async (req, res) => {
  const data = await Appointment.find().sort({ appointmentDate: 1 });
  res.json(data);
});

app.listen(3000, () => console.log('Port 3000'));
