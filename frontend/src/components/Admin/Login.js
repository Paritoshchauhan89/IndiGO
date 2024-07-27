import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import Axios

const baseURL = process.env.REACT_APP_API_BASE_URL;

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error message

    try {
      const response = await axios.post(`${baseURL}/api/v1/auth/login`, {
        email,
        password,
      });

      const { data } = response;

      if (response.status === 200) {
        // Assuming the response contains a user object and token
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user info in localStorage
        localStorage.setItem('token', data.token); // Store token if needed

        // Redirect to dashboard
        navigate('/admin-dashboard'); // Redirect to dashboard
      }
    } catch (error) {
      console.error('Login error:', error); // Log the error to the console for debugging

      // Handle errors
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Display server-provided error message
      } else {
        setErrorMessage('An error occurred. Please try again.'); // Display generic error message
      }
    }
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
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
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
              htmlFor="password"
              className="text-gray-600 absolute -top-3.5 left-3 transition-all transform origin-left scale-75"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'} // Toggle input type based on state
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Login;
