import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`relative bg-gray-800 text-white p-4 transition-transform duration-300 ${
          isSidebarOpen ? 'w-64 translate-x-0' : 'w-16 -translate-x-64'
        }`}
      >
        {/* Sidebar Content */}
        {isSidebarOpen && (
          <>
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-[-1.5rem] bg-gray-700 text-white p-2 rounded-full focus:outline-none transition-transform hover:bg-gray-600"
            >
              &gt;
            </button>
            <h1 className="text-xl font-bold mb-6">Dashboard</h1>
            <nav className="space-y-4">
              <Link
                to="#"
                onClick={() => handleTabClick('home')}
                className={`block text-gray-300 hover:text-white ${activeTab === 'home' ? 'text-yellow-500' : ''}`}
              >
                Home
              </Link>
              <Link
                to="#"
                onClick={() => handleTabClick('about')}
                className={`block text-gray-300 hover:text-white ${activeTab === 'about' ? 'text-yellow-500' : ''}`}
              >
                All Users
              </Link>
              <Link
                to="#"
                onClick={() => handleTabClick('services')}
                className={`block text-gray-300 hover:text-white ${activeTab === 'services' ? 'text-yellow-500' : ''}`}
              >
                All Flights
              </Link>
              <Link
                to="#"
                onClick={() => handleTabClick('contact')}
                className={`block text-gray-300 hover:text-white ${activeTab === 'contact' ? 'text-yellow-500' : ''}`}
              >
                Preference Flights
              </Link>
            </nav>
            <footer className="absolute bottom-4 left-4 text-gray-400">
              <p>&copy; Paritosh</p>
            </footer>
          </>
        )}
      </div>

      {/* Show Sidebar Button */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 bg-gray-700 text-white p-2 rounded-full focus:outline-none transition-transform hover:bg-gray-600"
        >
          &lt;
        </button>
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all ${isSidebarOpen ? 'ml-6' : 'ml-11'}`}>
        {/* Header */}
        <header className="bg-white shadow-md border-b border-gray-300">
          <Header />
        </header>

        {/* Content */}
        <div className="flex-1 p-4 bg-white">
          {activeTab === 'home' && (
            <div>
              <h2 className="text-2xl font-bold">Home</h2>
              <p>Welcome to the home page!</p>
            </div>
          )}
          {activeTab === 'about' && (
            <div>
              <h2 className="text-2xl font-bold">All Users</h2>
              <p>Learn more about us on this page.</p>
            </div>
          )}
          {activeTab === 'services' && (
            <div>
              <h2 className="text-2xl font-bold">All Flights</h2>
              <p>Discover the services we offer.</p>
            </div>
          )}
          {activeTab === 'contact' && (
            <div>
              <h2 className="text-2xl font-bold">Preference Flights</h2>
              <p>Get in touch with us here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
