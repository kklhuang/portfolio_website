import React from 'react';
import persona from '../images/persona.jpeg';
import cookin from '../images/cookin.jpeg';
import genesys from '../images/genesy.jpeg';
import empire from '../images/empire.jpeg';
import eon from '../images/eon.jpeg';

function Experiences() {
  const experiences = [
    { title: 'Persona', role: 'Contractor Data Engineer', description: 'Documents team. Developed a classification system to classify thousands of multilingual documents into 70+ categories.', image: persona},
    { title: 'Cookin', role: 'Backend Developerㅤㅤㅤㅤㅤㅤ', description: 'Developed key features for Cookin’s business app, enhancing cost management, menu control, and search functionality.', image: cookin},
    { title: 'Genesys', role: 'Fullstack Developer', description: 'Speech and Text Analytics team. Architected cross-product querying solution, enhancing efficiency across three Genesys platforms.', image: genesys},
    { title: 'Empire Life', role: 'Fullstack Developer', description: 'Fast and Full Seg Team. Optimized client onboarding process for new investment portfolios.', image: empire},
    { title: 'Eon Media', role: 'Fullstack Developer', description: 'Created a video management portal with a custom search engine with autocomplete, autocorrect, filtering and sorting tools.', image: eon },
  ];

  return (
    <div className="page experiences">
      <h2>My Experiences</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-panel">
            <img src={exp.image} alt={exp.title} className="exp-image" />
            <h3>{exp.title}</h3>
            <p className='exp-role'>{exp.role}</p>
            <p className='exp-description'>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
