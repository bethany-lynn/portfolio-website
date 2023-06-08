import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          work in progress - Bethany is learning more React every day
        </p>
      </header>
      <main>
        <Home />
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;