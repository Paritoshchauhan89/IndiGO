import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
  status: String,
});

const Flight = mongoose.model('Flight', FlightSchema);

export default Flight;
