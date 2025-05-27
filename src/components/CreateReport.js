import React, { useState } from "react";
import "../styles/CreateReport.css";

const CreateReport = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    diagnosis: "",
    prescription: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Report Created:", formData);
    setSubmitted(true);
    setFormData({
      patientName: "",
      diagnosis: "",
      prescription: "",
      notes: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="create-report-container">
      <h2>Create Patient Report</h2>
      <form className="report-form" onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Diagnosis:
          <input
            type="text"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Prescription:
          <input
            type="text"
            name="prescription"
            value={formData.prescription}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Additional Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </label>

        <button type="submit">Generate Report</button>
      </form>

      {submitted && (
        <p className="success-message">Report created successfully!</p>
      )}
    </div>
  );
};

export default CreateReport;
