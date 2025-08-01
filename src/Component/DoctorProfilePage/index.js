import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

const DoctorProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state;

  if (!doctor) {
    return <p className="error-text">Doctor not found. Please go back and try again.</p>;
  }

  return (
    <div className="profile-container">
      <img src={doctor.profileImage} alt={doctor.name} className="profile-image" />
      <h2 className="doctor-name">{doctor.name}</h2>
      <p className="doctor-specialization">{doctor.specialization}</p>
      <p className="doctor-bio">
        Dr. {doctor.name} is a renowned {doctor.specialization} with 10+ years of experience.
        Trusted by thousands of patients.
      </p>
      <button
        className="book-button"
        onClick={() => navigate(`/book/${doctor.id}`, { state: doctor })}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorProfilePage;
