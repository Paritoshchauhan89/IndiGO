import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import cors from 'cors';
import morgan from 'morgan';
import Notificationform from './routes/notificationRoute.js';
import Auth from './routes/authRoute.js';
import Flights from './routes/flightRoute.js';

// Configure environment variables
dotenv.config();

// Database connection
Connection();

// Initialize Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', Auth);
app.use('/api/v1/notification', Notificationform);
app.use('/api/v1/flight', Flights);

// Root route
app.get('/', (req, res) => {
  res.send('<h1>Indigo is Live</h1>');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => 
  console.log(`Server is running at http://localhost:${PORT}`.bgCyan.white)
);
