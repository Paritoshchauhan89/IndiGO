import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const baseURL = process.env.REACT_APP_API_BASE_URL;


const NotificationsTable = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await Axios.get(`${baseURL}/api/v1/notification/notifications`); // Adjust the URL based on your API endpoint
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Contact Number</th>
            <th className="py-2 px-4 border-b">Flight Number</th>
            <th className="py-2 px-4 border-b">Notification Type</th>
            <th className="py-2 px-4 border-b">Created At</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification._id} className='text-center'>
              <td className="py-2 px-4 border-b">{notification.fullName}</td>
              <td className="py-2 px-4 border-b">{notification.email}</td>
              <td className="py-2 px-4 border-b">{notification.contactNumber}</td>
              <td className="py-2 px-4 border-b">{notification.flightNumber}</td>
              <td className="py-2 px-4 border-b">{notification.notificationType}</td>
              <td className="py-2 px-4 border-b">{new Date(notification.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationsTable;
