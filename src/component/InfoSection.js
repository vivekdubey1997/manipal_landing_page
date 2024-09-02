import React from 'react';
import './InfoSection.css'; // Importing CSS file for styling
import image from '../assets/Group 9205.png'
import icon from "../assets/Group 3312.svg"

const InfoSection = () => {
  return (
   <div className='maincontainer'>
     <div className="info-section">
      <div className="info-image">
        <img src={image} alt="Person pointing" />
      </div>
      <div className="info-details">
        <div className="info-item">
          <div className="info-icon">
            {/* Replace with your icon */}
            <img src={icon}alt="EMI Icon" />
          </div>
          <div className="info-text">
            <h3>No-cost EMIs & more</h3>
            <p>With our no-cost EMIs and easy financing options, we let your learning take the spotlight, freeing you from the stress of financial worries and allowing you to focus on your education.</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">
            {/* Replace with your icon */}
            <img src="scholarship_icon.png" alt="Scholarship Icon" />
          </div>
          <div className="info-text">
            <h3>Scholarships up to 30%</h3>
            <p>Exclusive scholarships designed for meritorious students, defense personnel, government employees, differently-abled people, Manipal alumni & learners from Sikkim and other Northeast regions of India.</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default InfoSection;
