import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        {/* have resume on this page for immediate viewing. skills, experience, etc */}
        {/* have images for languages */}
        {/* link to LinkedIn, Github, email */}
        <li><a href="/projects">Projects</a></li>
        {/* have images with links to each project and its respective GitHub repository */}
        {/* add desriptions of projects and motivation for each */}
        {/* list of goals met for each - short and nice */}
        <li><a href="/career">Career Lore</a></li>
        {/* what i did before */}
        {/* why i switched to tech */}
        {/* professional goals and outlook */}
      </ul>
    </nav>
  );
}

export default Navbar;
