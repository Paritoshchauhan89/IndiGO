import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  flightNumber: { type: String, required: true },
  notificationType: { type: String, required: true, enum: ['email', 'sms', 'both'] },
}, {
  timestamps: true
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
