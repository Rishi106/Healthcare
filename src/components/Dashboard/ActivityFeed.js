import React from 'react';
import '../../styles/ActivityFeed.css';
 const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3 className="section-title">Activity</h3>
      <p className="activity-summary">3 appointments on this week</p>
      
      <div className="activity-chart">
        <div className="chart-bars">
          {[20, 40, 60, 45, 80, 50, 30].map((height, index) => (
            <div 
              key={index} 
              className="chart-bar" 
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>
        <div className="chart-labels">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <span key={day} className="chart-label">{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;