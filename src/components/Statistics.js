import React from "react";
import "../styles/Statistics.css";

const Statistics = () => {
  return (
    <div className="section-container">
      <h2>Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>120</h3>
          <p>Appointments</p>
        </div>
        <div className="stat-card">
          <h3>85%</h3>
          <p>Satisfaction</p>
        </div>
        <div className="stat-card">
          <h3>14</h3>
          <p>New Patients</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
