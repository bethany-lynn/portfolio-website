import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Projects from './Projects';
import CareerLore from './CareerLore';

import './App.css';
import './Navbar.css';


// import logo from './logo.svg';
import Home from './Home';
import BottomBar from './BottomBar';
import { Route, Routes } from 'react-router-dom';


function App() {
  const themes = [
    {
      name: 'Theme 1',
      backgroundColor: 'conic-gradient(from -270deg at 75% 110%, fuchsia, floralwhite)',
      textColor: '#FFC8FB',
      squiggleColor: '#CFBFF7',
      logoColors: {
        fill: '#CFBFF7',
        stroke: '#1D0134',
        iconFill: '#1D0134',
        iconStroke: '#CCCCCC'
      }
    },
    {
      name: 'Theme 2',
      backgroundColor: 'conic-gradient(from -270deg at 75% 110%, midnightblue,#94D1BE)',
      textColor: '#3B413C',
      squiggleColor: '#BFF0D4',
      logoColors: {
        fill: '#B0CA87',
        stroke: '#DAF0EE',
        iconFill: '#B0CA87',
        iconStroke: '#B0CA87'
      }
    },
    {
      name: 'Theme 3',
      backgroundColor: 'conic-gradient(from 90deg at bottom right, cyan, rebeccapurple)',
      textColor: '#F0EFF4E0DE',
      logoColors: {
        fill: '#F0EFF4',
        stroke: '#1D0134',
        iconFill: '#1D0134',
        iconStroke: '#CCCCCC'
      }
    },
  ];

  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex];

  const changeTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
  };

  return (
    <div style={{ backgroundImage: theme.backgroundColor, color: theme.textColor }}>
    <Navbar squiggleColor={theme.squiggleColor} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<CareerLore />} />
      </Routes>
    <div className="App">
      <header className="App-header">
      <svg
        className={`App-logo ${theme.logoClassName}`}
        width="209px"
        height="209px"
        viewBox="-3.2 -3.2 38.40 38.40"
        xmlns="http://www.w3.org/2000/svg"
        style={theme.logoColors}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} stroke="#CCCCCC" strokeWidth="0.32" />
        <g id="SVGRepo_iconCarrier" style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }}>
          <title style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }}></title>
          <g data-name="Layer 2" id="Layer_2" style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }}>
            <path d="M26,19.72a10,10,0,0,0-6-8.88V8h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2h1v2.84a10,10,0,0,0-5.84,7.44A9,9,0,0,0,6,20a2.62,2.62,0,0,0,0,.28,10,10,0,0,0,19.84,1.44A9.74,9.74,0,0,0,26,20,2.62,2.62,0,0,0,26,19.72Zm-2.16,1.93A8,8,0,0,1,8,20.36c0-.12,0-.24,0-.36a7.43,7.43,0,0,1,.18-1.64,8,8,0,0,1,5.15-5.89,1,1,0,0,0,.67-1V8h4v3.52a1,1,0,0,0,.67,1A8,8,0,0,1,24,19.64,2.17,2.17,0,0,1,24,20,8.17,8.17,0,0,1,23.83,21.65Z" style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
            <path d="M22,20a6,6,0,0,1-12,0,5.29,5.29,0,0,1,.1-1.06l.33.16a5.12,5.12,0,0,0,2.57.62,5.12,5.12,0,0,0,2.57-.62A6.84,6.84,0,0,1,19,18.28a6.75,6.75,0,0,1,2.89.57A6.23,6.23,0,0,1,22,20Z" style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
            <path d="M8,8a.76.76,0,0,1-.75.75,1.51,1.51,0,0,0-1.5,1.5.75.75,0,0,1-1.5,0,1.5,1.5,0,0,0-1.5-1.5.75.75,0,0,1,0-1.5,1.5,1.5,0,0,0,1.5-1.5.75.75,0,0,1,1.5,0,1.51,1.51,0,0,0,1.5,1.5A.76.76,0,0,1,8,8Z" style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
            <path d="M30,5a.76.76,0,0,1-.75.75,1.51,1.51,0,0,0-1.5,1.5.75.75,0,0,1-1.5,0,1.5,1.5,0,0,0-1.5-1.5.75.75,0,0,1,0-1.5,1.5,1.5,0,0,0,1.5-1.5.75.75,0,0,1,1.5,0,1.51,1.51,0,0,0,1.5,1.5A.76.76,0,0,1,30,5Z" style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
          </g>
        </g>
        </svg>
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

















// working logo color customization, but not working themes for logo:

// import React, { useState } from 'react';
// import Navbar from './Navbar'; 
// import Projects from './Projects';
// import CareerLore from './CareerLore';

// import './App.css';
// import './Navbar.css';


// import logo from './logo.svg';
// import Home from './Home';
// import BottomBar from './BottomBar';
// import { Route, Routes } from 'react-router-dom';


// function App() {
//   const themes = [
//     {
//       name: 'Theme 1',
//       backgroundColor: '#c285f5',
//       textColor: '#FFC8FB',
//       squiggleColor: '#CFBFF7',
//       logoColors: {
//         fill: '#1D0134',
//         stroke: '#1D0134',
//         iconFill: '#1D0134',
//         iconStroke: '#CCCCCC'
//       }
//     },
//     {
//       name: 'Theme 2',
//       backgroundColor: '#1B512D',
//       textColor: '#B1CF5F',
//       squiggleColor: '#BFF0D4',
//       logoColors: {
//         fill: '#1D0134',
//         stroke: '#1D0134',
//         iconFill: '#1D0134',
//         iconStroke: '#CCCCCC'
//       }
//     },
//     {
//       name: 'Theme 3',
//       backgroundColor: '#383B53',
//       textColor: '#D4D6B9',
//       squiggleColor: '#C0E0DE',
//       logoColors: {
//         fill: '#1D0134',
//         stroke: '#1D0134',
//         iconFill: '#1D0134',
//         iconStroke: '#CCCCCC'
//       }
//     },
//   ];

//   const [themeIndex, setThemeIndex] = useState(0);
//   const theme = themes[themeIndex];

//   const changeTheme = () => {
//     const nextIndex = (themeIndex + 1) % themes.length;
//     setThemeIndex(nextIndex);
//   };

//   return (
//     <div style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}>
//     <Navbar squiggleColor={theme.squiggleColor} />
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/career" element={<CareerLore />} />
//       </Routes>
//     <div className="App">
//       <header className="App-header">
//       <img src={logo} className={`App-logo ${theme.logoClassName}`} alt="logo" style={theme.logoColors} />

//         <p>
//           {/* things here show up on every page */}
//         </p>
//       </header>
//       <BottomBar />
//       <button onClick={changeTheme}>im bored</button>
//     </div>
//     </div>
//   );
// }

// export default App;