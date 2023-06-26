import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Projects from './Projects';
import CareerLore from './CareerLore';

import './App.css';

import logo from './logo.svg';
import Home from './Home';
import BottomBar from './BottomBar';
import { Route, Routes } from 'react-router-dom';


function App() {
  const themes = [
    {
      name: 'Theme 1',
      backgroundColor: '#c285f5',
      textColor: '#FFC8FB',
    },
    {
      name: 'Theme 2',
      backgroundColor: '#1B512D',
      textColor: '#B1CF5F',
    },
    {
      name: 'Theme 3',
      backgroundColor: '#383B53',
      textColor: '#D4D6B9',
    },
  ];

  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex];

  const changeTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
  };

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}>
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
          {/* things here show up on every page */}
        </p>
      </header>
      <BottomBar />
      <button onClick={changeTheme}>im bored</button>
    </div>
    </div>
  );
}

export default App;

// take out everything except bottom and nav bar 
// only the things i want on specific pages should be in those files

// function App() {
//   const [backgroundColor, setBackgroundColor] = useState('#c285f5');

//   const changeColors = () => {
//     const newColor = getRandomColor();
//     setBackgroundColor(newColor);
//   };

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return (
//     <div style={{ backgroundColor }}>
//     <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/career" element={<CareerLore />} />
//       </Routes>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* things here show up on every page */}
//         </p>
//       </header>
//       <BottomBar />
//       <button onClick={changeColors}>Change Color</button>
//     </div>
//     </div>
//   );
// }
