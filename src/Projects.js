import React from 'react';
import Carousel from './Carousel';
import './Projects.css';

function Projects({ theme }) {
  return (
    <div className='projects-body'>
      {/* <h1>My Projects</h1> */}
      <Carousel theme={theme} />
    </div>
  );
}

export default Projects;