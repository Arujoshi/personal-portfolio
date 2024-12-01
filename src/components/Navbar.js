import "./Navbar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaEnvelope, FaBars } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to control the mobile view

  const handleToggle = () => {
    setIsMobile(!isMobile); // Toggle the state when the button is clicked
  };

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li>
        <a href="#home" className="navbar-link">
            <FaHome /> Home
          </a>
        </li>
        <li>
        <a href="#about" className="navbar-link">
            <FaUserAlt /> About
        </a>
        </li>
        <li>
        <a href="#contact" className="navbar-link">
            <FaEnvelope /> Contact
          </a>
        </li>
      </ul>

      {/* Toggle Button for Mobile */}
      <div className="toggle-button" onClick={handleToggle}>
        <FaBars /> {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;