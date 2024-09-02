import React from 'react';
import './Programs.css';
import im from "../assets/Online M.A.H.E advantages.svg";
import i from "../assets/samsung-memory-MSfUkIU8pGM-unsplash.jpg"

const Programs = () => {
  const programs = [
    {
      title: "Master of Business Administration (Online MBA)",
      duration: "24 months",
      workload: "15-20 Hours/Week",
      workEx: "Work Ex. Desirable",
      subjects: ["Healthcare Management", "Fashion Management", "Pharmaceutical Management, etc."],
      price: "INR 2,80,000",
      imageUrl:i
    },
    {
      title: "MSc in Business Analytics",
      duration: "24 months",
      workload: "15-20 Hours/Week",
      workEx: "Work Ex. Desirable",
      subjects: ["Business Statistics", "Big Data Analytics", "Programming with R and Python, etc."],
      price: "INR 2,80,000",
      imageUrl: 'https://stock.adobe.com/in/images/id/300795276?get_facets=1&order=relevance&safe_search=1&k=mba+student+graduate+student&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Aphoto%5D=1&clickref=1100lzy5Mrrs&mv=affiliate&mv2=Freepik&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=Freepik&as_content=api&as_audience=idp&sdid=6WTV6YJ5'
    },
    {
      title: "MSc in Data Science",
      duration: "24 months",
      workload: "15-20 Hours/Week",
      workEx: "Work Ex. Desirable",
      subjects: ["Machine Learning Methods", "Database Management", "Programming with R and Python, etc."],
      price: "INR 2,80,000",
      imageUrl: 'https://stock.adobe.com/in/images/double-exposure-photo-of-young-man-throwing-graduation-cap-technology-background-realistic-image-ultra-hd-high-design-very-detailed/633933436'
    },
  ];

  return (
    <div className="programs-container">
      <h2>Our Programs</h2>
      <div className="programs">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <div 
              className="program-image-placeholder" 
              style={{ backgroundImage: `url(${program?.imageUrl})` }}
            >
              {/* Image Placeholder */}
            </div>
            <div className="program-details">
              <h3>{program.title}</h3>
              <div className="program-meta">
                <span>{program.duration}</span>
                <span>{program.workload}</span>
              </div>
              <div className="work-ex">{program.workEx}</div>
              <ul>
                {program.subjects.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
              <div className="program-price">{program.price}</div>
              <button className="download-btn">Download Brochure</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
