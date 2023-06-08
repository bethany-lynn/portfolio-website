import React from 'react';
import './BottomBar.css'

function BottomBar() {
  return (
    <div className="bottom-bar">
      <a href="https://www.linkedin.com/in/bethanylynnpro/" target="_blank" rel="noopener noreferrer">
        <img src="linkedin.png" alt="Bethany's LinkedIn" />
      </a>
      <a href="https://github.com/bethany-lynn" target="_blank" rel="noopener noreferrer">
        <img src="github.png" alt="Bethany's GitHub" />
      </a>
    </div>
  );
}

export default BottomBar;
