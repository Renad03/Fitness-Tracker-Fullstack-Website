import React from 'react';
import './FitnessToolCard.css'; 

function FitnessToolCard({ icon, title, link }) {
  return (
    <div className="fitness-tool-card">
      <div className="icon">
       <img src={icon} alt=""/>
      </div>
      <h3 className="title">{title}</h3>
      <a href={link} className="learn-more">
        Learn More &rarr;
      </a>
    </div>
  );
}

export default FitnessToolCard;