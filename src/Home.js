import React from 'react';
import './Home.css';

function Home({ appLogo }) {
  return (
    <div className="home-container">
      <div className="header-content">
        <h1 className='name'>Bethany Winter</h1>
      </div>
      <div className="content-container-body">
        Full Stack Software Engineer
        <br />
        <div className='email'>
          bethanylynnpro@gmail.com
        </div> {appLogo}
      </div>
    </div>
  );
}

export default Home;