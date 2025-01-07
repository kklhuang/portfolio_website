import React from 'react';
import spotify from '../images/spotify.png';
import shortcake from '../images/shortcake.png';
import finn from '../images/finn.png';
import biquadris from '../images/biquadris.png';

function Projects() {
  const projects = [
    { title: <a href="https://github.com/kklhuang/spotify_mbti" target="_blank" rel="noopener noreferrer" class="proj-title-link">Spotify MBTI</a>, 
      langs: 'React, Spotify API',
      description: "A webapp that calculates a Spotify Listener's listening personality.",
      image: spotify      
    },
    { title: <a href="https://github.com/kklhuang/shortcake" target="_blank" rel="noopener noreferrer" class="proj-title-link">Shortcake</a>, 
      langs: 'JS/HTML/CSS',
      description: 'A Chrome extension that makes it easier to find out the ingredients needed for any recipe.',
      image: shortcake
    },
    { title: <a href="https://github.com/Finn-Discord-Bot/finn" target="_blank" rel="noopener noreferrer" class="proj-title-link">Finn</a>, 
      langs: 'Python',
      description: 'A smart portfolio creator and financial analytics Discord bot. Part of the HackyWinterland2021 hackathon.',
      image: finn
    },
    { title: 'Biquadris', 
      langs: 'C++',
      description: 'A two-player version of Tetris. Source provided upon request.',
      image: biquadris,
    
    },
  ];

  return (
    <div className="page projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-panel">
            <h3>{project.title}</h3>
            <p className="project-langs">{project.langs}</p>
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
