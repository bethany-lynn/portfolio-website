import React from 'react';
import Navbar from './Navbar'; 
import Projects from './Projects';
import CareerLore from './CareerLore';

import './App.css';

import logo from './logo.svg';
import Home from './Home';
import BottomBar from './BottomBar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<CareerLore />} />
      </Routes>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          work in progress - this is app.js
        </p>
      </header>
        {/* <Home /> */}
      <BottomBar />
    </div>
    </div>
  );
}

export default App;

// take out everything except bottom and nav bar 
// only the things i want on specific pages should be in those files