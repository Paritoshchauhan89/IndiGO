import express from 'express';
import { getAllFlights, getFlightById, addFlight, updateFlight } from '../controller/FlightController.js';

const router = express.Router();

router.get('/flights', getAllFlights);
router.get('/flights/:id', getFlightById);
router.post('/flights', addFlight);
router.put('/flights/:id', updateFlight); // Add this line for updating a flight

export default router;
