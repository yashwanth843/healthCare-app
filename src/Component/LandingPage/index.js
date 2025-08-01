import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiFilter } from 'react-icons/ci';
import './index.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');

  const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    available: true
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    specialization: 'Neurologist',
    profileImage: 'https://randomuser.me/api/portraits/men/52.jpg',
    available: false
  },
  {
    id: 3,
    name: 'Dr. Priya Mehta',
    specialization: 'Dermatologist',
    profileImage: 'https://randomuser.me/api/portraits/women/47.jpg',
    available: true
  },
  {
    id: 4,
    name: 'Dr. Ravi Kumar',
    specialization: 'Orthopedic',
    profileImage: 'https://randomuser.me/api/portraits/men/48.jpg',
    available: true
  },
  {
    id: 5,
    name: 'Dr. Neha Sharma',
    specialization: 'Gynecologist',
    profileImage: 'https://randomuser.me/api/portraits/women/55.jpg',
    available: false
  },
  {
    id: 6,
    name: 'Dr. Aman Verma',
    specialization: 'Pediatrician',
    profileImage: 'https://randomuser.me/api/portraits/men/49.jpg',
    available: true
  },
  {
    id: 7,
    name: 'Dr. Meenakshi Reddy',
    specialization: 'ENT Specialist',
    profileImage: 'https://randomuser.me/api/portraits/women/63.jpg',
    available: true
  },
  {
    id: 8,
    name: 'Dr. Abhay Patel',
    specialization: 'Urologist',
    profileImage: 'https://randomuser.me/api/portraits/men/61.jpg',
    available: false
  },
  {
    id: 9,
    name: 'Dr. Sneha Nair',
    specialization: 'Psychiatrist',
    profileImage: 'https://randomuser.me/api/portraits/women/51.jpg',
    available: true
  },
  {
    id: 10,
    name: 'Dr. Rajeev Menon',
    specialization: 'Endocrinologist',
    profileImage: 'https://randomuser.me/api/portraits/men/50.jpg',
    available: true
  },
  {
    id: 11,
    name: 'Dr. Kavitha Sundar',
    specialization: 'Oncologist',
    profileImage: 'https://randomuser.me/api/portraits/women/59.jpg',
    available: true
  },
  {
    id: 12,
    name: 'Dr. Manish Aggarwal',
    specialization: 'Dentist',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg',
    available: false
  },
  {
    id: 13,
    name: 'Dr. Pooja Sinha',
    specialization: 'General Physician',
    profileImage: 'https://randomuser.me/api/portraits/women/49.jpg',
    available: true
  },
  {
    id: 14,
    name: 'Dr. Karan Kapoor',
    specialization: 'Dermatologist',
    profileImage: 'https://randomuser.me/api/portraits/men/55.jpg',
    available: true
  },
  {
    id: 15,
    name: 'Dr. Anjali Rao',
    specialization: 'Cardiologist',
    profileImage: 'https://randomuser.me/api/portraits/women/53.jpg',
    available: true
  }
];

  const specializations = ['All', ...new Set(doctors.map(doc => doc.specialization))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      selectedSpecialization === 'All' || doctor.specialization === selectedSpecialization;

    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="landing-container">
      <header className="header">
        <div className="header-left">
          <img
            src="https://res.cloudinary.com/dlaypemls/image/upload/v1754041154/df05ee73-92ef-44f0-9d3b-1730e6645990-removebg-preview_mcklkf.png"
            alt="MediBook Logo"
            className="logoImage"
          />
          <div className="logo-text">
            <h1>MediBook</h1>
            <p>Book Your Doctor</p>
          </div>
        </div>
      </header>

      <section className="search-section">
        <h2 className="main-title">Book Your Doctor Appointment</h2>
        <p className="sub-title">
          Find and book appointments with trusted healthcare professionals.
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search doctors or specializations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-bar">
          <label htmlFor="specialization">
            <CiFilter className="icon" /> Filter by Specialization:
          </label>
          <select
            id="specialization"
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            {specializations.map((specialty, index) => (
              <option key={index} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="doctors-section">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.profileImage} alt={doctor.name} className="doctor-image" />
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialization">{doctor.specialization}</p>
              <p className={`doctor-status ${doctor.available ? 'available' : 'not-available'}`}>
                {doctor.available ? 'Available' : 'Not Available'}
              </p>
              <button
                className={`view-profile-btn ${!doctor.available ? 'disabled-btn' : ''}`}
                disabled={!doctor.available}
                onClick={() => {
                  if (doctor.available) {
                    navigate(`/doctor/${doctor.id}`, { state: doctor });
                  }
                }}
              >
                View Profile
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No doctors found for your search.</p>
        )}
      </section>
    </div>
  );
};

export default LandingPage;
