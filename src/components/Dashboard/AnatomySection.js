import React from 'react';
import { FiCheck, FiCircle, FiHeart } from 'react-icons/fi';
import bodyOutline from '../../assets/anatomy-placeholder.png';
import '../../styles/AnatomySection.css';
import HealthStatusCards from './HealthStatusCards'; // Removed .js extension

// Added missing anatomyData
const anatomyData = [
  {
    title: "Healthy Heart",
    status: "healthy",
    position: { top: 30, left: 50 }
  },
 
  {
    title: "Bone",
    status: "healthy",
    position: { top: 60, left: 45 }
  }
];

const AnatomySection = () => {
  return (
    <div className="dashboard-overview">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="week-indicator">This Week</p>

      <div className="dashboard-content">
        <div className="anatomy-section">
          <div className="anatomy-container">
            <img src={bodyOutline} alt="Human body outline" className="body-image" />
            
            {anatomyData.map((item, index) => (
              <div 
                key={index}
                className={`anatomy-marker ${item.status}`}
                style={{ top: `${item.position.top}%`, left: `${item.position.left}%` }}
              >
                {item.status === 'healthy' ? (
                  <FiHeart className="marker-icon" />
                ) : (
                  <FiCircle className="marker-icon" />
                )}
                <div className="marker-tooltip">
                  <span className="tooltip-title">{item.title}</span>
                  <span className="tooltip-status">
                    {item.status === 'healthy' ? 'Healthy' : 'Needs Attention'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="health-status-section">
          <HealthStatusCards /> 
        </div>
      </div>

      <div className="details-section">
        <p className="details-text">Details</p>
      </div>
    </div>
  );
};

export default AnatomySection;