import React from 'react';
import Navbar from './Navbar'; 
// Home component for homepage edits


function Home() {
    return (
      <div className="home-container">
        <Navbar />
          <div className="content-container-header">
            <h1>Bethany Winter</h1>
              <h2>Full Stack Software Engineer</h2>
              <p>sample text</p>
          </div>
          <div className="content-container-body">
            <>more content</>
          </div>
    </div>
    );
  }
  
  export default Home;  