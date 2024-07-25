// src/FlightStatus.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightStatus = ({ flightId }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchFlightStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/flights/${flightId}/status`);
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching flight status:', error);
      }
    };

    fetchFlightStatus();
  }, [flightId]);

  return (
    <div>
      <h3>Flight Status</h3>
      <p>Status: {status}</p>
    </div>
  );
};

export default FlightStatus;
