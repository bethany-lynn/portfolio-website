import React from 'react';
import './Home.css';
import myFace from './images/self.jpg'

function Home({ appLogo, theme, themeIndex }) {

  const selfPicture = theme.picture || myFace;

  return (
    <div className="home-container">
      <div className="header-content">
        <h1 className="name">Bethany Winter</h1>
      </div>
      <div className="row content-container-box">
        <div className="col-md column-one">
          <div className="job-title">
            Full Stack Software Engineer
            <br />
            San Diego, CA
          </div>
          <div className="email">
            bethanylynnpro@gmail.com
          </div>
          <div className='link-container'>
            <div className='linkedin'>
              <a href="https://www.linkedin.com/in/bethanylynnpro/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.svgrepo.com/show/354000/linkedin-icon.svg" alt="Bethany's LinkedIn" />
              </a>
            </div>
            <div className='github'>
              <a href="https://github.com/bethany-lynn" target="_blank" rel="noopener noreferrer">
                <img src="https://www.svgrepo.com/download/35001/github.svg" alt="Bethany's GitHub" />
              </a>
            </div>
          </div>
          <div className='applogo'>
            {appLogo}
          </div>
        </div>
        <div className="col-md column-two">
          <div className="theme-photo-container">
            <img
              src={selfPicture}
              alt={`Theme ${themeIndex + 1}`}
              className="theme-photo"
            />
            <div className="theme-text">
              {theme.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


// const email = 'bethanylynnpro@gmail.com';
// <a className="email" href={`mailto:${email}`}>
// {email}
// </a>

// old photo working code:
// <div className="column-two">
// <img src={selfPicture} alt="Bethany's face" />
// </div>