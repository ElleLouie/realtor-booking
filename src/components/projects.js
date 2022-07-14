import React from 'react';
import bathimg from '../img/bath.jpg';

const ProjectData = [
  {
    name: 'Villa in Carlsbad',
    type: '03',
    img: { bathimg },
  },
  {
    name: 'Villa in Del Mar',
    type: '01',
    img: { bathimg },
  },
  {
    name: 'Villa in Carlsbad',
    type: '02',
    img: { bathimg },
  },
  {
    name: 'Villa in Carlsbad',
    type: '04',
    img: { bathimg },
  },
  {
    name: 'Villa in Carlsbad',
    type: '03',
    img: { bathimg },
  },
  {
    name: 'Villa in Del Mar',
    type: '01',
    img: { bathimg },
  },
  {
    name: 'Villa in Carlsbad',
    type: '02',
    img: { bathimg },
  },
  {
    name: 'Villa in Carlsbad',
    type: '04',
    img: { bathimg },
  },
];

const renderProjects = (item) => {
  return (
    <div className="project-display-item">
      <h1>{item.name}</h1>
      <div className="text-block">
        <p>PACKAGE {item.type}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-display">
        {ProjectData.map((item) => {
          return (
            renderProjects(item)
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
