import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.REACT_APP_API_BASE_URL;


const Register = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-white p-8 rounded shadow-md relative"
        style={{ width: '600px', maxWidth: '90%', height: 'auto', maxHeight: '90%' }}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              htmlFor="password"
              className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Register;
