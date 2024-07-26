import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests

const NotificationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [notificationType, setNotificationType] = useState('email');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/notifications', {
        fullName,
        email,
        contactNumber,
        flightNumber,
        notificationType
      });
      alert('Notification preference saved successfully!');
      // Clear form fields after submission
      setFullName('');
      setEmail('');
      setContactNumber('');
      setFlightNumber('');
      setNotificationType('email');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to save notification preference.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register for Flight Notifications</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label
            htmlFor="fullName"
            className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          <label
            htmlFor="email"
            className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          <label
            htmlFor="contactNumber"
            className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75"
          >
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          <label
            htmlFor="flightNumber"
            className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75"
          >
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
          <label className="text-gray-600">Notification Type</label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="email"
                name="notificationType"
                value="email"
                checked={notificationType === 'email'}
                onChange={(e) => setNotificationType(e.target.value)}
              />
              <label htmlFor="email" className="ml-2">Email</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="sms"
                name="notificationType"
                value="sms"
                checked={notificationType === 'sms'}
                onChange={(e) => setNotificationType(e.target.value)}
              />
              <label htmlFor="sms" className="ml-2">SMS</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="both"
                name="notificationType"
                value="both"
                checked={notificationType === 'both'}
                onChange={(e) => setNotificationType(e.target.value)}
              />
              <label htmlFor="both" className="ml-2">Both</label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default NotificationForm;
