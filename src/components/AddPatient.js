import React, { useState } from "react";
import "../styles/AddPatient.css";

const AddPatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", age: "", gender: "", contact: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="add-patient-container">
      <h2>Add New Patient</h2>
      <form className="patient-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Contact Number:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Add Patient</button>
      </form>

      {submitted && (
        <p className="success-message">Patient added successfully!</p>
      )}
    </div>
  );
};

export default AddPatient;
