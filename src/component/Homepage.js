// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Create this CSS file to style the component
import mahelogo from "../assets/MAHE_Color 1.png"
const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="logo"> 
          <img src={maheLogo} alt="Manipal Logo" /> 
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Global Impact</a></li>
            <li><a href="#">Certificate</a></li>
            <li><button className="apply-button">Apply Online</button></li>
          </ul>
        </nav>
      </header>

      {/* Enquiry Form */}
      <section className="enquiry-form">
        <div className="form-container">
          <h2>Enquire Now</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Enter Email Address" required />
            <input type="text" placeholder="Mobile Number" required />
            <select>
              <option>Select State</option>
              {/* Add more options */}
            </select>
            <select>
              <option>Select City</option>
              {/* Add more options */}
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlight-item">
          <h3>70+</h3>
          <p>Years of educational excellence</p>
        </div>
        <div className="highlight-item">
          <h3>1500+</h3>
          <p>Nationalities</p>
        </div>
        <div className="highlight-item">
          <h3>60+</h3>
          <p>Alumni Network</p>
        </div>
        <div className="highlight-item">
          <h3>3000+</h3>
          <p>Expert Faculty</p>
        </div>
        <div className="highlight-item">
          <h3>100+</h3>
          <p>Recruiters from Fortune 500 companies</p>
        </div>
      </section>

      {/* Rankings & Accreditations */}
      <section className="rankings">
        <h2>Rankings & Accreditations</h2>
        <div className="rankings-container">
          <div className="ranking-item">
            <img src="path-to-ranking-image" alt="NIRF Ranking" />
            <p>Ranked #6 NIRF India Rankings 2023</p>
          </div>
          {/* Add more ranking items */}
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <h2>Our Programs</h2>
        <div className="program-tabs">
          <button className="tab active">Online Degree Programs</button>
          <button className="tab">PGCP Programs</button>
        </div>
        <div className="program-list">
          <div className="program-item">
            <h3>Master of Business Administration (Online MBA)</h3>
            <p>Duration: 2 years</p>
            <p>Fees: INR 2,80,000</p>
            <button>Enquire Now</button>
          </div>
          {/* Add more programs */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <h2>Know more about our programs</h2>
        <form className="footer-form">
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Mobile Number" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Enter City" required />
          <button type="submit">Submit</button>
        </form>
        <p>Need Educational Counselling? Contact our Experts.</p>
      </footer>
    </div>
  );
};

export default HomePage;
