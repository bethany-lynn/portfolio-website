import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          work in progress - Bethany is learning more React every day
        </p>
      </header>
      <Home />
    </div>
  );
}

export default App;

