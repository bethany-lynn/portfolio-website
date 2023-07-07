import React from 'react';
import './Navbar.css';


function Navbar({ handleScrollToSection }) {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item"><button onClick={() => handleScrollToSection('section1')}>Home</button></li>
        <li className="navbar-item"><button onClick={() => handleScrollToSection('section2')}>Projects</button></li>
        <li className="navbar-item"><button onClick={() => handleScrollToSection('section3')}>Career Lore</button></li>
        <li className="navbar-item"><button onClick={() => handleScrollToSection('section4')}>Resume</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;


// squiggleColor,
// import SquiggleSVG from './squiggle.svg';

// <div className="squiggle-shape">
// <img src={SquiggleSVG} alt='Squiggle' style={{ fill: squiggleColor }} />
// </div>