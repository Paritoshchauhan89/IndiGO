import Flight from '../models/Flight.js';
import sendFlightUpdateNotification from '../utils/notify.js';

// Get all flights
const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get flight by ID
const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (flight) {
      res.json(flight);
    } else {
      res.status(404).json({ message: 'Flight not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new flight
const addFlight = async (req, res) => {
  const newFlight = new Flight(req.body);
  
  try {
    const flight = await newFlight.save();

    // Notify users about the new flight
    const notification = {
      message: `New flight added: ${flight.flightNumber} from ${flight.departure} to ${flight.arrival} on ${flight.date}`,
      date: new Date().toISOString()
    };
    Notify.addNotification(notification);

    res.status(201).json(flight);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update flight details
const updateFlight = async (req, res) => {
  try {
    const { flightId } = req.params;
    const flightData = req.body;

    // Update the flight entry
    const updatedFlight = await Flight.findByIdAndUpdate(flightId, flightData, { new: true }).exec();

    if (!updatedFlight) return res.status(404).json({ message: 'Flight not found' });

    // Send notification
    await sendFlightUpdateNotification(flightId);

    res.status(200).json({ message: 'Flight updated successfully', updatedFlight });
  } catch (error) {
    console.error('Error updating flight:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Export named functions
export { getAllFlights, getFlightById, addFlight, updateFlight };
