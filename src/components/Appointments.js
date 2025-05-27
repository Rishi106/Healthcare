import React from "react";
import "../styles/Appointments.css";

const appointments = [
  { id: 1, name: "Dr. Smith", date: "2025-06-01", time: "10:00 AM" },
  { id: 2, name: "Dr. Taylor", date: "2025-06-03", time: "02:30 PM" },
];

const Appointments = () => {
  return (
    <div className="section-container">
      <h2>Appointments</h2>
      <ul className="appointments-list">
        {appointments.map((appt) => (
          <li key={appt.id}>
            <strong>{appt.name}</strong> — {appt.date} at {appt.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
