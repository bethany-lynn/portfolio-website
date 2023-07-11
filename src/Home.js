import React from 'react';
import './Home.css';

function Home({ appLogo }) {
  return (
    <div className="home-container">
        <div className="header-content">
          <h1 className='name'>Bethany Winter</h1>
        </div>
      <div className="content-container-body">
        Full Stack Software Engineer {appLogo}
      </div>
    </div>
  );
}

export default Home;