import React from 'react';
import Signup from './Signup'; // Import Signup component
import Login from './Login'; // Import Login component
import './Modal.css'; // Import the modal CSS for styling

const Modal = ({ formType, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={closeModal}>X</button>

        {/* Show either Signup or Login form based on formType */}
        {formType === 'signup' ? <Signup /> : <Login />}
      </div>
    </div>
  );
};

export default Modal;
