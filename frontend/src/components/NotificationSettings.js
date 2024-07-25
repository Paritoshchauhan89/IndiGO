// src/NotificationSettings.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { requestForToken } from './firebase.js';

const NotificationSettings = ({ flightId }) => {
  const [method, setMethod] = useState('FCM');
  const [contact, setContact] = useState('');

  // Request FCM token and set contact state
  useEffect(() => {
    requestForToken((token) => {
      setContact(token);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/notifications/subscribe', {
      flightId,
      method,
      contact,
    })
    .then(response => {
      alert('Subscribed successfully!');
    })
    .catch(error => {
      console.error('Error subscribing to notifications:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Subscribe to Notifications</h3>
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="FCM">FCM</option>
        </select>
      </label>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NotificationSettings;
