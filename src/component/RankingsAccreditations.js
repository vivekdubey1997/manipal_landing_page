import React from 'react';
import './RankingsAccreditations.css';
import Aicte from '../assets/AICTE-3 1.png';
import nrf from '../assets/NIRF-1 1.png';
import ioe from '../assets/IOE.jpg 1.png';

const rankings = [
    {
        id: 1,
        logo: Aicte,  // Replace with actual path
        description: "Amongst India's Top #101-150 Universities in 2023",
    },
    {
        id: 2,
        logo: nrf,  // Replace with actual path
        description: "Amongst World's Top Universities for Quality Education in 2023",
    },
    {
        id: 3,
        logo: nrf,  // Replace with actual path
        description: "Among India's Few Universities Granted IOE Status",
    },
    {
        id: 4,
        logo: ioe,  // Replace with actual path
        description: "Amongst India's Top #101-150 Universities in 2023",
    },
    {
        id: 5,
        logo: ioe,  // Replace with actual path
        description: "Amongst India's Top #101-150 Universities in 2023",
    },
];

const RankingsAccreditations = () => {
    return (
        <div className="carousel-container">
            <div className="carousel">
                {rankings.map((ranking) => (
                    <div key={ranking.id} className="carousel-item">
                        <img src={ranking.logo} alt="logo" className="ranking-logo" />
                        <p>{ranking.description}</p>
                    </div>
                ))}
            </div>
            <button className="carousel-button left">{'<'}</button>
            <button className="carousel-button right">{'>'}</button>
        </div>
    );
};

export default RankingsAccreditations;
