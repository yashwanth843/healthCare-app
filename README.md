# 🩺 HealthMeet – Doctor Appointment Booking App

**HealthMeet** (also titled *MediBook* in UI) is a responsive and user-friendly healthcare appointment booking application built using **React** and **JavaScript**. It allows users to search doctors, view profiles, check availability, and book appointments — all in a clean and intuitive interface.

---

## 🎯 Objective

Build a frontend-focused full stack (static mock backend) application for booking doctor appointments. This project was developed as part of a technical assignment.

---

## 🚀 Features

- 🔍 **Search & Filter** doctors by name or specialization
- 📇 **Doctor Profile Page** with availability and booking option
- 🧾 **Booking Form** to enter patient details with validation
- ✅ **Confirmation Page** after successful appointment
- 📱 **Responsive Design** for mobile and large screens
- 🚫 View Profile button is disabled if doctor is not available

---

## 🛠️ Tech Stack

| Tech        | Usage                                 |
|-------------|----------------------------------------|
| React       | Frontend framework                    |
| JavaScript  | Application logic                     |
| React Router| Page navigation                       |
| Plain CSS   | Styling and responsive design         |
| useState    | State management (local)              |
| useLocation/useNavigate | Page state + routing     |

---

## 📁 Folder Structure

src/
├── App.js
├── Components/
│ ├── LandingPage/
│ │ ├── index.js
│ │ └── index.css
│ ├── DoctorProfilePage/
│ │ ├── index.js
│ │ └── index.css
│ ├── BookingForm/
│ │ ├── index.js
│ │ └── index.css
│ └── ConfirmationPage/
│ ├── index.js
│ └── index.css
├── index.js # ReactDOM root
└── index.css # Global styles


---

## 🧪 How to Run the Project Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/healthmeet-app.git
   cd healthmeet-app


## Install Dependencies
  npm install

## Start the App
  npm start

**Deployed Link**
https://medibook-app.netlify.app/

**Github Link**
https://github.com/yashwanth843/healthCare-app

## ❗ Challenges Faced
Designing fully responsive UI with just CSS

Managing routing and state between pages using React Router

Creating reusable doctor cards and clean filtering logic

Validating forms with good user experience

Made with 💙 by Desetti Yashwanth

