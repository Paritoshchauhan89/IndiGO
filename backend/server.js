import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import admin from './config/firebase.js'; // Import Firebase Admin
import Flight from './models/Flight.js';
import Subscription from './models/Subscription.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Connect to MongoDB using environment variables
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error('MongoDB connection error:', error));

app.use(express.json());

app.get('/api/flights/:id/status', async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    res.json({ status: flight.status });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.put('/api/flights/:id/status', async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    flight.status = req.body.status;
    await flight.save();
    io.emit(`flight-status-${req.params.id}`, { status: flight.status });

    // Send FCM notifications
    const subscriptions = await Subscription.find({ flightId: req.params.id });

    const notificationPromises = subscriptions.map(subscription => {
      const message = {
        notification: {
          title: 'Flight Status Update',
          body: `Flight ${req.params.id} status: ${flight.status}`
        },
        token: subscription.contact // Assumes contact is the FCM token
      };
      return admin.messaging().send(message);
    });

    Promise.all(notificationPromises)
      .then(responses => {
        responses.forEach(response => console.log('Successfully sent message:', response));
      })
      .catch(error => {
        console.error('Error sending messages:', error);
      });

    res.json({ status: flight.status });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/notifications/subscribe', async (req, res) => {
  try {
    const { flightId, method, contact } = req.body; // Assumes method is 'FCM' and contact is FCM token
    const subscription = new Subscription({ flightId, method, contact });
    await subscription.save();
    res.json({ message: 'Subscribed successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Use environment variable for port number
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
