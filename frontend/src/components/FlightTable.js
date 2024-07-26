import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightTable = () => {
    
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await axios.get('https://api.aviationstack.com/v1/flights', {
          params: {
            access_key: 'YOUR_API_KEY', // Replace with your actual API key
            // Add any other required parameters here
          }
        });
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
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Flight Status</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {flightData.map((flight, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{flight.flightNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.departure}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.arrival}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${flight.status === 'On Time' ? 'text-green-600' : flight.status === 'Delayed' ? 'text-yellow-600' : 'text-red-600'}`}>
                  {flight.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.gate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightTable;
