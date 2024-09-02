import React from 'react';
import './MAHEAdvantages.css';

// Import the icons
import UGCIcon from '../assets/Group (1).svg';
import ScholarshipIcon from '../assets/Group (2).svg';
import PlacementIcon from '../assets/Group.svg';
import AlumniIcon from '../assets/Group_13284_00000049917035682680556730000006972823258752187573_.svg';
import WebinarsIcon from '../assets/Online M.A.H.E advantages.svg';
import GlobalIcon from '../assets/Vector (1).svg';
import CampusIcon from '../assets/Vector (2).svg';
import VirtualLabIcon from '../assets/Vector (3).svg';
import ScheduleIcon from '../assets/Vector.svg';
import backgroundimage from '../assets/UGC-entitled-degree 1.png'

const MAHEAdvantages = () => {
  return (
    <div className="mahe-container">
      <div className="mahe-left-section">
        <h2 className="mahe-title">
          <img src={WebinarsIcon} alt="Online M.A.H.E Advantages" />
        </h2>
        <ul className="mahe-advantages-list">
          <li className="mahe-list-item">
            <img src={UGCIcon} alt="UGC-entitled degrees" className="mahe-icon" />
            UGC-entitled degrees
          </li>
          <li className="mahe-list-item">
            <img src={ScholarshipIcon} alt="Attractive scholarships" className="mahe-icon" />
            Attractive scholarships
          </li>
          <li className="mahe-list-item">
            <img src={PlacementIcon} alt="Placement assistance" className="mahe-icon" />
            Placement assistance
          </li>
          <li className="mahe-list-item">
            <img src={AlumniIcon} alt="Prestigious Manipal alumni status" className="mahe-icon" />
            Prestigious Manipal alumni status
          </li>
          <li className="mahe-list-item">
            <img src={WebinarsIcon} alt="Industry webinars & simulations" className="mahe-icon" />
            Industry webinars & simulations
          </li>
          <li className="mahe-list-item">
            <img src={GlobalIcon} alt="Global classroom" className="mahe-icon" />
            Global classroom
          </li>
          <li className="mahe-list-item">
            <img src={CampusIcon} alt="In-person campus immersion" className="mahe-icon" />
            In-person campus immersion
          </li>
          <li className="mahe-list-item">
            <img src={VirtualLabIcon} alt="Exhaustive e-content & virtual lab" className="mahe-icon" />
            Exhaustive e-content & virtual lab
          </li>
          <li className="mahe-list-item">
            <img src={ScheduleIcon} alt="Convenient class schedule" className="mahe-icon" />
            Convenient class schedule
          </li>
        </ul>
      </div>
      <div className="mahe-right-section">
        <img
          src={backgroundimage}
          alt="UGC-entitled degrees"
          className="mahe-image"
        />
        <h3 className="mahe-heading">UGC-entitled degrees</h3>
        <p className="mahe-description">
          Access UGC-entitled degrees from world-class universities that are NAAC accredited. 
          Pursue online degrees that are at par with conventional on-campus degrees and accepted by governments, corporate organizations, and higher education institutions.
        </p>
       <div className='button'>
        <p>Choose Our online Program To avail all these advantages</p>
       <button className="mahe-enroll-button">Enroll Now</button>
       </div>
      </div>
    </div>
  );
};

export default MAHEAdvantages;
