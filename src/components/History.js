import React from "react";
import '../styles/History.css';

const historyData = [
  { id: 1, date: "2025-05-20", action: "User logged in" },
  { id: 2, date: "2025-05-21", action: "Updated profile settings" },
  { id: 3, date: "2025-05-22", action: "Booked an appointment" },
  { id: 4, date: "2025-05-23", action: "Logged out" },
];

const History = () => {
  return (
    <div className="history-container">
      <h2>History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
