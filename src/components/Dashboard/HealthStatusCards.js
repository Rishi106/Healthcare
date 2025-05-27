import React from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import lungIcon from '../../assets/lung.png';
import teethIcon from '../../assets/teeth.png';
import boneIcon from '../../assets/bone.jpeg';
import '../../styles/HealthStatusCards.css';

const HealthStatusCards = () => {
  const healthCards = [
    {
      title: "Lungs",
      date: "26 Oct 2021",
      status: "healthy",
      icon: lungIcon,
      alt: "Lungs icon"
    },
    {
      title: "Teeth",
      date: "26 Oct 2021",
      status: "warning",
      icon: teethIcon,
      alt: "Teeth icon"
    },
    {
      title: "Bone",
      date: "26 Oct 2021",
      status: "healthy",
      icon: boneIcon,
      alt: "Bone icon"
    }
  ];

  return (
    <div className="health-status-cards">
      {healthCards.map((card, index) => (
        <div key={index} className={`health-card ${card.status}`}>
          <div className="card-icon-container">
            <img src={card.icon} alt={card.alt} className="card-icon-image" />
            <div className="status-icon">
              {card.status === 'healthy' ? (
                <FiCheckCircle className="healthy-icon" />
              ) : (
                <FiAlertCircle className="warning-icon" />
              )}
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-date">Date: {card.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;