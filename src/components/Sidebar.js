import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { Link, useLocation } from 'react-router-dom';  

import {
  FiMenu,
  FiHome,
  FiClock,
  FiCalendar,
  FiBookmark,
  FiBarChart2,
  FiFileText,
  FiMessageSquare,
  FiHelpCircle,
  FiSettings
} from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation(); 

  const toggleSidebar = () => setIsOpen(!isOpen);

  const routeMap = {
    Dashboard: '/',
    History: '/history',
    Calendar: '/calendar',
    Appointments: '/appointments',
    Statistics: '/statistics',
    Chat: '/chat',
    Support: '/support',
    Setting: '/setting',
  };

  const sections = [
    {
      title: 'General',
      items: ['Dashboard', 'History', 'Calendar', 'Appointments', 'Statistics']
    },
    {
      title: 'Tools',
      items: ['Chat', 'Support']
    },
    {
      title: '',
      items: ['Setting']
    }
  ];

  const icons = [
    <FiHome />,
    <FiClock />,
    <FiCalendar />,
    <FiBookmark />,
    <FiBarChart2 />,
    <FiMessageSquare />,
    <FiHelpCircle />,
    <FiSettings />
  ];

  const getGlobalIndex = (sectionIndex, itemIndex) => {
    if (sectionIndex === 0) return itemIndex;
    if (sectionIndex === 1) return itemIndex + 5;
    return itemIndex + 7;
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FiMenu />
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header"></div>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="sidebar-section">
            {section.title && <h3 className="sidebar-heading">{section.title}</h3>}
            <ul className="sidebar-menu">
              {section.items.map((item, i) => {
                const globalIndex = getGlobalIndex(sectionIndex, i);
                const path = routeMap[item];

                 const isActive = location.pathname === path;

                return (
                  <li key={globalIndex} className={`sidebar-item ${isActive ? 'active' : ''}`}>
                    <Link to={path} className="sidebar-link" onClick={() => { if (!isOpen) setIsOpen(true); }}>
                      <div className="sidebar-icon">{icons[globalIndex]}</div>
                      <span className="sidebar-text">{item}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
