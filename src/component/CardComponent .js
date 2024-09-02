import React from 'react';

const CardComponent = () => {
    return (
        <div style={{
            backgroundColor: '#0A3464',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '350px',
            margin: 'auto',
            textAlign: 'left',
    
            
           
        }}>
            <h2>MSc in Business Analytics</h2>
            <p><i className="fa fa-calendar"></i> 24 months &nbsp; | &nbsp; <i className="fa fa-clock"></i> 15-20 Hours/Week</p>
            <p style={{ backgroundColor: '#4EC4B7', padding: '5px 10px', display: 'inline-block', borderRadius: '5px' }}>
                Work Ex. Desirable
            </p>
            <ul>
                <li>Business Statistics</li>
                <li>Big Data Analytics</li>
                <li>Programming with R and Python, etc</li>
            </ul>
            <p style={{ fontWeight: 'bold' }}>INR 2,80,000</p>
            <button style={{
                backgroundColor: '#F26B1D',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
            }}>
                DOWNLOAD BROCHURE
            </button>
        </div>
    );
};

export default CardComponent;
