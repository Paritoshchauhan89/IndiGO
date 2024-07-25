import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
  flightId: String,
  method: String,
  contact: String,
});

const Subscription = mongoose.model('Subscription', SubscriptionSchema);

export default Subscription;
