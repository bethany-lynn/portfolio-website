import React from 'react';
import './Home.css';
import myFace from './images/self.jpg'

function Home({ appLogo }) {
  return (
    <div className="home-container">
      <div className="header-content">
        <h1 className="name">Bethany Winter</h1>
      </div>
      <div className="content-container-box">
        <div className="column-one">
          <div className="job-title">
            Full Stack Software Engineer
          </div>
          <div className="email">
            bethanylynnpro@gmail.com
          </div>
          <div className='applogo'>
            {appLogo}
          </div>
        </div>
        <div className="column-two">
          <img src={myFace} alt="Bethany's face" />
        </div>
      </div>
    </div>
  );
}

export default Home;