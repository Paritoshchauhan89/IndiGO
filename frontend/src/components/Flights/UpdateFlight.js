import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const UpdateFlightForm = ({ flightId, onClose, onSuccess }) => {
  const [flightNumber, setFlightNumber] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [currentStatus, setCurrentStatus] = useState({
    delay: 'No',
    cancellation: 'No',
    gateChange: 'No',
    gateNumber: '',
    landingTime: ''
  });

  useEffect(() => {
    if (flightId) {
      const fetchFlightData = async () => {
        try {
          const response = await axios.get(`${baseURL}/api/v1/flight/flights/${flightId}`);
          const flight = response.data;
          setFlightNumber(flight.flightNumber);
          setDeparture(flight.departure);
          setArrival(flight.arrival);
          setDate(flight.date);
          setStatus(flight.status);
          setCurrentStatus(flight.currentStatus);
        } catch (error) {
          console.error('Error fetching flight data:', error);
        }
      };

      fetchFlightData();
    }
  }, [flightId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (flightId) {
        await axios.put(`${baseURL}/api/v1/flight/flights/${flightId}`, {
          flightNumber,
          departure,
          arrival,
          date,
          status,
          currentStatus
        });
        alert('Flight updated successfully!');
        // Notify the parent component
        if (onSuccess) onSuccess();
      }
      if (onClose) onClose(); // Close the modal
    } catch (error) {
      console.error('Error submitting flight:', error);
      alert('Failed to update flight.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Flight</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="flightNumber" className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75">
              Flight Number
            </label>
            <input
              type="text"
              id="flightNumber"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="departure" className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75">
              Departure
            </label>
            <input
              type="text"
              id="departure"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="arrival" className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75">
              Arrival
            </label>
            <input
              type="text"
              id="arrival"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="date" className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="status" className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75">
              Status
            </label>
            <input
              type="text"
              id="status"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="delay" className="text-gray-600">Delay</label>
            <select
              id="delay"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={currentStatus.delay}
              onChange={(e) => setCurrentStatus({ ...currentStatus, delay: e.target.value })}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="relative">
            <label htmlFor="cancellation" className="text-gray-600">Cancellation</label>
            <select
              id="cancellation"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={currentStatus.cancellation}
              onChange={(e) => setCurrentStatus({ ...currentStatus, cancellation: e.target.value })}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="relative">
            <label htmlFor="gateChange" className="text-gray-600">Gate Change</label>
            <select
              id="gateChange"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={currentStatus.gateChange}
              onChange={(e) => setCurrentStatus({ ...currentStatus, gateChange: e.target.value })}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="gateNumber" className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75">
              Gate Number
            </label>
            <input
              type="text"
              id="gateNumber"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={currentStatus.gateNumber}
              onChange={(e) => setCurrentStatus({ ...currentStatus, gateNumber: e.target.value })}
            />
          </div>
          <div className="relative">
            <label htmlFor="landingTime" className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75">
              Landing Time
            </label>
            <input
              type="text"
              id="landingTime"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={currentStatus.landingTime}
              onChange={(e) => setCurrentStatus({ ...currentStatus, landingTime: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
        >
          Update Flight
        </button>
      </form>
    </div>
  );
};

export default UpdateFlightForm;
