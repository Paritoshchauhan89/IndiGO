import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightStatus = () => {
  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await axios.get('/api/flights/status'); // Adjust the endpoint as needed
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

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Flight Status</h2>
      {flightData && (
        <div className="space-y-4">
          {flightData.map((flight, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm transition-transform transform hover:scale-105"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">Flight Number:</span>
                <span className="text-gray-600">{flight.flightNumber}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">Departure:</span>
                <span className="text-gray-600">{flight.departure}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">Arrival:</span>
                <span className="text-gray-600">{flight.arrival}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">Status:</span>
                <span
                  className={`font-bold ${
                    flight.status === 'On Time'
                      ? 'text-green-600'
                      : flight.status === 'Delayed'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}
                >
                  {flight.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">Gate:</span>
                <span className="text-gray-600">{flight.gate}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightStatus;
