import React from "react";
import "../styles/Calendar.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const totalDays = 30; 
const Calendar = () => {
  const firstDayOffset = 3; 
  const renderDays = () => {
    const cells = [];

    for (let i = 0; i < firstDayOffset; i++) {
      cells.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      cells.push(
        <div key={day} className="calendar-day">
          {day}
        </div>
      );
    }

    return cells;
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Calendar</h2>
      <div className="calendar-header">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
