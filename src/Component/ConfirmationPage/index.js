import React from 'react';
import './index.css';

const ConfirmationPage = () => {
  const appointment = JSON.parse(localStorage.getItem('appointment')) || {};

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h2 className="confirmation-title">✅ Appointment Confirmed!</h2>
        <p className="confirmation-text">Thank you, <strong>{appointment.name}</strong>.</p>
        <p className="confirmation-text">
          Your appointment with <strong>{appointment.doctor}</strong> is scheduled on <strong>{appointment.date}</strong> at <strong>{appointment.time}</strong>.
        </p>
        <p className="confirmation-text">We’ve sent confirmation details to your email.</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
