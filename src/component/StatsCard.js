// src/components/StatsCard.js
import React from 'react';
import './StatsCard.css'; // Create this CSS file to style the card

const StatsCard = () => {
  return (
    <div className="stats-card">
      <div className="stats-item">
        <h3>70+</h3>
        <p>Years of educational excellence</p>
      </div>
      <div className="stats-item">
        <h3>1500+</h3>
        <p>Nationalities</p>
      </div>
      <div className="stats-item">
        <h3>60+</h3>
        <p>Alumni Network</p>
      </div>
      <div className="stats-item">
        <h3>3000+</h3>
        <p>Expert Faculty</p>
      </div>
      <div className="stats-item">
        <h3>100+</h3>
        <p>Recruiters from Fortune 500 companies</p>
      </div>
    </div>
  );
};

export default StatsCard;
