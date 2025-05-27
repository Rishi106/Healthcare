import React from "react";
import "../styles/Setting.css";

const Setting = () => {
  return (
    <div className="section-container">
      <h2>Settings</h2>
      <form className="settings-form">
        <label>
          Name:
          <input type="text" placeholder="Enter name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter email" />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Setting;
