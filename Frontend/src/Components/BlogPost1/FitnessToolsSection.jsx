import React from 'react';
import FitnessToolCard from './FitnessToolCard';
import './FitnessToolsSection.css';
import '../Heading/heading.module.css';
import { fitnessToolsData } from './fitnessToolsData';

const uniqueFitnessToolsData = fitnessToolsData.filter((tool, index, self) =>
  index === self.findIndex((t) => (
    t.title === tool.title
  ))
);

function FitnessToolsSection() {
  return (
    <div className="fitness-tools-section">
      <div className="header-container">
        <h2 className="main-heading">
          Our Fitness <span className="tools-red">Tools</span>
        </h2>
        <p className="sub-heading">Access A Variety Of Tools To Help You Reach Your Fitness Goals More Effectively</p>
      </div>
      <div className="card-container">
        {uniqueFitnessToolsData.map((tool, index) => (
          <FitnessToolCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default FitnessToolsSection;