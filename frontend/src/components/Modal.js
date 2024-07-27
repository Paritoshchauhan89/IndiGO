import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg z-10 p-6 relative w-full max-w-lg mx-4 sm:mx-auto">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-all duration-300"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
