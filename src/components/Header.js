import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 🔹 Add this import
import '../styles/Header.css';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import userAvatar from '../assets/user-avatar.png';

const Header = () => {
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  const handleAddClick = () => {
    setIsAddMenuOpen(!isAddMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="notification-icon">
          <FiBell />
          <span className="notification-badge">3</span>
        </div>
      </div>
      
      <div className="header-right">
        <div className="add-button-container">
          <button className="add-button" onClick={handleAddClick}>
            <FiPlus className="plus-icon" />
          </button>
          
          {isAddMenuOpen && (
            <div className="add-menu">
              <Link to="/add-appointment" className="menu-item">New Appointment</Link>
              <Link to="/add-patient" className="menu-item">Add Patient</Link>
              <Link to="/create-report" className="menu-item">Create Report</Link>
            </div>
          )}
        </div>
        
        <div className="user-profile">
          <img src={userAvatar} alt="User" className="user-avatar" />
          <span className="user-name">Dr. Sarah Johnson</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
