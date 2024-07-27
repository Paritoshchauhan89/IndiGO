import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, required: true },
  currentStatus: {
    delay: { type: String, default: 'No' },
    cancellation: { type: String, default: 'No' },
    gateChange: { type: String, default: 'No' },
    gateNumber: { type: String, default: '' },
    landingTime: { type: String, default: '' }
  }
});

const Flight = mongoose.model('Flight', FlightSchema);

export default Flight;
