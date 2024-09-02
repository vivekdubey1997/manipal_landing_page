// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Create this CSS file to style the navbar
import mahe from '../assets/MAHE_Color 1.png'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={mahe} alt="Manipal Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Global Impact</a></li>
          <li><a href="#">Certificate</a></li>
          <li><button className="apply-button">Apply Online</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
