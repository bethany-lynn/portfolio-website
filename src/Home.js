import React from 'react';
import './Home.css';

function Home({ appLogo }) {
  return (
    <div className="home-container">
      <div className="content-container-header">
        <div className="header-content">
          <h1>Bethany Bear</h1>
          
        </div>
      </div>
      <div className="content-container-body">
        Full Stack Software Engineer {appLogo}
      </div>
    </div>
  );
}

export default Home;

