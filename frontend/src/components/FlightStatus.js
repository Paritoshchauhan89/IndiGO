import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import Modal from './Modal.js'; // Import the Modal component
import UpdateFlightForm from './Flights/UpdateFlight'; // Import the UpdateFlightForm component

const baseURL = process.env.REACT_APP_API_BASE_URL;

const FlightStatus = () => {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [departureFilter, setDepartureFilter] = useState('');
  const [arrivalFilter, setArrivalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [gateChangeFilter, setGateChangeFilter] = useState('');
  const [gateNumberFilter, setGateNumberFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');

  const [selectedFlightId, setSelectedFlightId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/v1/flight/flights`);
        setFlightData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch flight status.');
        setLoading(false);
      }
    };

    fetchFlightData();
  }, []);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  const filteredData = flightData.filter(flight => {
    const flightTime = new Date(flight.date).getHours();
    const isMorning = flightTime >= 5 && flightTime < 12;
    const isEvening = flightTime >= 12 && flightTime < 17;
    const isNight = flightTime >= 17 || flightTime < 5;

    return (
      (flight.flightNumber.toLowerCase().includes(search.toLowerCase()) ||
       flight.departure.toLowerCase().includes(search.toLowerCase()) ||
       flight.arrival.toLowerCase().includes(search.toLowerCase())) &&
      (!departureFilter || flight.departure.toLowerCase() === departureFilter.toLowerCase()) &&
      (!arrivalFilter || flight.arrival.toLowerCase() === arrivalFilter.toLowerCase()) &&
      (!statusFilter || flight.status.toLowerCase() === statusFilter.toLowerCase()) &&
      (!gateChangeFilter || flight.currentStatus.gateChange.toLowerCase() === gateChangeFilter.toLowerCase()) &&
      (!gateNumberFilter || flight.currentStatus.gateNumber.includes(gateNumberFilter)) &&
      (!timeFilter ||
        (timeFilter === 'morning' && isMorning) ||
        (timeFilter === 'evening' && isEvening) ||
        (timeFilter === 'night' && isNight)
      )
    );
  });

  const handleOpenModal = (flightId) => {
    setSelectedFlightId(flightId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFlightId(null);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
      <span>Total Flights: {filteredData.length}</span>
      <h2 className="text-2xl font-bold mb-6 text-center">Flight Status</h2>

      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search flights..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 md:mb-0 md:mr-4 p-2 border border-gray-300 rounded w-[180px]"
        />
        <div className="flex flex-col md:flex-row md:space-x-4">
          <select
            value={departureFilter}
            onChange={(e) => setDepartureFilter(e.target.value)}
            className="mb-4 md:mb-0 p-2 border border-gray-300 rounded"
          >
            <option value="">All Departures</option>
            {/* Add more options here */}
          </select>
          <select
            value={arrivalFilter}
            onChange={(e) => setArrivalFilter(e.target.value)}
            className="mb-4 md:mb-0 p-2 border border-gray-300 rounded"
          >
            <option value="">All Arrivals</option>
            {/* Add more options here */}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="mb-4 md:mb-0 p-2 border border-gray-300 rounded"
          >
            <option value="" >All Statuses</option>
            <option value="on time">On Time</option>
            <option value="delayed">Delayed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select
            value={gateChangeFilter}
            onChange={(e) => setGateChangeFilter(e.target.value)}
            className="mb-4 md:mb-0 p-2 border border-gray-300 rounded"
          >
            <option value="">All Gate Changes</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <input
            type="text"
            placeholder="Gate Number"
            value={gateNumberFilter}
            onChange={(e) => setGateNumberFilter(e.target.value)}
            className="mb-4 md:mb-0 p-2 border border-gray-300 rounded"
          />
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="mb-4 md:mb-0 p-2 border border-gray-300 rounded"
          >
            <option value="">All Times</option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
            <option value="night">Night</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gate Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map(flight => (
              <tr key={flight._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{flight.flightNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.departure}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.arrival}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.currentStatus.gateNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.currentStatus.gateChange}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.currentStatus.landingTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {flight.currentStatus.delay === 'Yes' && <FaSun className="text-yellow-500" />}
                  {flight.currentStatus.cancellation === 'Yes' && <FaMoon className="text-gray-700" />}
                  {flight.currentStatus.gateChange === 'Yes' && <FaMoon className="text-gray-700" />}
                  <button
                    onClick={() => handleOpenModal(flight._id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedFlightId && <UpdateFlightForm flightId={selectedFlightId} />}
      </Modal>
    </div>
  );
};

export default FlightStatus;
