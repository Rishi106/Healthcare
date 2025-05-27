import React from 'react';
import '../../styles/CalendarView.css';

const CalendarView = () => {
  const calendarData = {
    month: "October 2021",
    days: [
      { day: 25, appointments: ["10:00", "11:00", "12:00"] },
      { day: 26, appointments: ["08:00", "09:00", "10:00"] },
      { day: 27, appointments: ["12:00", "___", "13:00"] },
      { day: 28, appointments: ["10:00", "11:00", "___"] },
      { day: 29, appointments: ["___", "14:00", "16:00"] },
      { day: 30, appointments: ["12:00", "14:00", "15:00"] },
      { day: 31, appointments: ["09:00", "10:00", "11:00"] }
    ],
    upcomingAppointments: [
      { title: "Dentist", time: "09:00–11:00", person: "Dr. Cameron Williamson" },
      { title: "Physiotherapy Appointment", time: "11:00–12:00", person: "Dr. Kevin Djones" }
    ]
  };

  return (
    <div className="calendar-view">
      <h2 className="calendar-title">{calendarData.month}</h2>

      <div className="calendar-grid">
        <div className="calendar-header">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="day-header">{day}</div>
          ))}
        </div>

        <div className="calendar-days">
          {calendarData.days.map((dayData, index) => (
            <div key={`day-${index}`} className="day-number">
              {dayData.day}
            </div>
          ))}
        </div>

        {[0, 1, 2].map(row => (
          <div key={`row-${row}`} className="calendar-row">
            {calendarData.days.map((dayData, col) => (
              <div key={`appt-${col}-${row}`} className="calendar-cell">
                {dayData.appointments[row] ? (
                  <div className={`calendar-appointment ${dayData.appointments[row] === "09:00" ? "highlight" : ""}`}>
                    {dayData.appointments[row]}
                  </div>
                ) : (
                  <div className="calendar-empty">—</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="upcoming-appointments">
        {calendarData.upcomingAppointments.map((appt, index) => (
          <div key={index} className={`appointment-card ${index === 0 ? "primary-card" : "secondary-card"}`}>
            <h4 className="appointment-title">{appt.title}</h4>
            <p className="appointment-time">{appt.time}</p>
            <p className="appointment-person">{appt.person}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
