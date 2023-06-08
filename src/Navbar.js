import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/career">Career Lore</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

// home
        // have resume on this page for immediate viewing. skills, experience, etc
        // have images for languages
        // link to LinkedIn, Github, email
// projects
        // have images with links to each project and its respective GitHub repository
        // add desriptions of projects and motivation for each
        // list of goals met for each - short and nice
// career lore:
        // what i did before
        // why i switched to tech
        // professional goals and outlook
