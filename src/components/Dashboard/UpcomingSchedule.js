import React from 'react';
import '../../styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  // Data matching the image exactly
  const scheduleData = [
    {
      day: "Thursday",
      appointments: [
        { title: "Health checkup complete", time: "11:00 AM" },
        { title: "Ophthalmologist", time: "14:00 PM" }
      ]
    },
    {
      day: "Saturday",
      appointments: [
        { title: "Cardiologist", time: "12:00 AM" },
        { title: "Neurologist", time: "16:00 PM" }
      ]
    }
  ];

  return (
    <div className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>
      
      {scheduleData.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h3 className="day-title">On {daySchedule.day}</h3>
          
          <div className="appointments-grid">
            {daySchedule.appointments.map((appt, idx) => (
              <div key={idx} className="appointment-card">
                <div className="appointment-time">{appt.time}</div>
                <div className="appointment-title">{appt.title}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;