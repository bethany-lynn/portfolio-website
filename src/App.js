import React from 'react';
import Navbar from './Navbar'; 
import './App.css';

import logo from './logo.svg';
import Home from './Home';
import BottomBar from './BottomBar';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          work in progress
        </p>
      </header>
        <Home />
      <BottomBar />
    </div>
    </BrowserRouter>
  );
}

export default App;