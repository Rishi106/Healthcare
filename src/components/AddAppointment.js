import React, { useState } from "react";
import "../styles/AddAppointment.css";

const AddAppointment = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Submitted:", formData);
    setSubmitted(true);

    setFormData({ doctor: "", date: "", time: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="add-appointment-container">
      <h2>Add New Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Doctor's Name:
          <input
            type="text"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Add Appointment</button>
      </form>

      {submitted && (
        <p className="success-message">Appointment added successfully!</p>
      )}
    </div>
  );
};

export default AddAppointment;
