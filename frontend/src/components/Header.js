import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login'; // Adjust the path as needed
import Register from './Admin/Register'; // Adjust the path as needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-gray-800">
          <img
            src="https://www.goindigo.in/content/dam/s6web/in/en/assets/logo/IndiGo_logo_2x.png"
            width="100px"
            alt="IndiGo"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLink
            exact
            to="/"
            className="text-gray-600 hover:text-gray-800 px-3 py-2"
            activeClassName="border-b-2 border-red-500 text-gray-800"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-project"
            className="text-gray-600 hover:text-gray-800 px-3 py-2"
            activeClassName="border-b-2 border-red-500 text-gray-800"
          >
            About Project
          </NavLink>
          <NavLink
            to="/case-study"
            className="text-gray-600 hover:text-gray-800 px-3 py-2"
            activeClassName="border-b-2 border-red-500 text-gray-800"
          >
            Case Study
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-600 hover:text-gray-800 px-3 py-2"
            activeClassName="border-b-2 border-red-500 text-gray-800"
          >
            Contact
          </NavLink>
          <button
            className="px-4 py-2 bg-custom-blue text-white rounded hover:bg-blue-600"
            onClick={openLoginModal}
          >
            Admin Login
          </button>
          <button
            className="px-4 py-2 bg-custom-blue text-white rounded hover:bg-blue-600"
            onClick={openRegisterModal}
          >
            Register
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <NavLink
            exact
            to="/"
            className="block text-gray-600 hover:text-gray-800 p-2"
            activeClassName="border-b-2 border-red-500 text-gray-800"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-project"
            className="block text-gray-600 hover:text-gray-800 p-2"
            activeClassName="border-b-2 border-red-500 text-gray-800"
            onClick={toggleMenu}
          >
            About Project
          </NavLink>
          <NavLink
            to="/case-study"
            className="block text-gray-600 hover:text-gray-800 p-2"
            activeClassName="border-b-2 border-red-500 text-gray-800"
            onClick={toggleMenu}
          >
            Case Study
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-600 hover:text-gray-800 p-2"
            activeClassName="border-b-2 border-red-500 text-gray-800"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <button
            className="w-full px-4 py-2 mt-2 bg-custom-blue text-white rounded"
            onClick={openLoginModal}
          >
            Admin Login
          </button>
          <button
            className="w-full px-4 py-2 mt-2 bg-custom-blue text-white rounded"
            onClick={openRegisterModal}
          >
            Register
          </button>
        </div>
      )}

      {/* Modals */}
      <Login isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      <Register isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
    </header>
  );
};

export default Header;
