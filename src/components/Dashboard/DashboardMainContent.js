import React from 'react';
import '../../styles/Dashboard.css';
import DashboardOverview from './DashboardOverview';
import AnatomySection from './AnatomySection';
 import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        
        
        <div className="dashboard-row">
          <div className="dashboard-col anatomy-col">
            <AnatomySection />      
 
            <ActivityFeed />
          </div>
          
          <div className="dashboard-col calendar-col">
            <CalendarView />
          <UpcomingSchedule />
          </div>
        </div>
        
       
      </div>
    </main>
  );
};

export default DashboardMainContent;