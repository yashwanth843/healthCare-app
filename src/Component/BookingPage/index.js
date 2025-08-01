import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

const BookingPage = () => {
  const { state: doctor } = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', date: '', time: '' });
  const [errors, setErrors] = useState({});

  const timeSlots = ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeClick = (time) => {
    setFormData(prev => ({ ...prev, time }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time slot';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('appointment', JSON.stringify({ ...formData, doctor: doctor.name }));
      navigate('/confirmation');
    }
  };

  return (
    <div className="booking-container">
      <div className="doctor-card-header">
        <img src={doctor.profileImage} alt={doctor.name} className="doctor-img" />
        <div>
          <h2>{doctor.name}</h2>
          <p className="specialization">{doctor.specialization}</p>
          <p>Heart Care Center</p>
        </div>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label className="section-title">🕒 Select Time Slot</label>
        <div className="timeslot-container">
          {timeSlots.map((slot) => (
            <button
              type="button"
              key={slot}
              className={`time-btn ${formData.time === slot ? 'selected' : ''}`}
              onClick={() => handleTimeClick(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
        {errors.time && <p className="error">{errors.time}</p>}

        <label className="section-title">🧑 Patient Information</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <p className="error">{errors.date}</p>}

        <button type="submit" className="confirm-btn">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingPage;

