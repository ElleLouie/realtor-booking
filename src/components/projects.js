import React, { useEffect, useState } from 'react';

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
    <li className="project-display-item">
      <h1>{item.name}</h1>
      <p>PACKAGE {item.type}</p>
    </li>
  );
};

const Projects = () => {
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(ProjectData);

  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length);
  }, [carouselItems]);

  const shiftPrev = (copy) => {
    const lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    const firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };
  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('');
  };

  return (
    <div className="project-container">
      <h1> OUR PROJECTS </h1>
      <div className="ui">
        <button type="button" onClick={() => setMoveClass('next')} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button type="button" onClick={() => setMoveClass('prev')} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
        {carouselItems.map((item) => {
          return (
            renderProjects(item)
          );
        })}
      </ul>
    </div>
  );

  // return (
  //   <div className="project-container">
  //     <h1> OUR PROJECTS </h1>
  //     <div className="project-display">
  //       {ProjectData.map((item) => {
  //         return (
  //           renderProjects(item)
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default Projects;
