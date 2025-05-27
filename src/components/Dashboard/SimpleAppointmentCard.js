import React from 'react';
import '../../styles/SimpleAppointmentCard.css';

import { FiCheck, FiClock } from 'react-icons/fi';

const SimpleAppointmentCard = ({ title, time, completed }) => {
  return (
    <div className={`appointment-card ${completed ? 'completed' : ''}`}>
      <div className="card-icon">
        {completed ? <FiCheck /> : <FiClock />}
      </div>
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-time">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;