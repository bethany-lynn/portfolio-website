import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import CareerLore from './CareerLore';
import Resume from './Resume';
import './App.css';

import selfImage from './images/self.jpg';
import meelfImage from './images/meelf.jpg';
import bluehairImage from './images/bluehair.png';
import maxandmeImage from './images/maxandme.jpg';
import mamasatoruImage from './images/mamasatoru.jpg';
import squirrelImage from './images/squirrel.jpg';
import megreenImage from './images/megreen.PNG';
import bwselfieImage from './images/bwselfie.jpg';
import bwoliverImage from './images/bwoliver.jpg';
import littlemecomputerImage from './images/littlemecomputer.jpg';

function App() {
  const themes = [
    {
      name: 'Theme 1',
      backgroundColor: 'conic-gradient(from 90deg at top right, #CB48B7, floralwhite)',
      textColor: '#934683',
      picture: selfImage,
      text: 'C2E2 2020: Purchased my first face mask at my last convention for years.',
      navbarColors: {
        backgroundColor: 'rgb(253, 109, 255)',
        borderColor: '#fd65f8',
      },
      logoColors: {
        fill: '#f7cad0',
        stroke: '#CB48B7',
        iconFill: '#9A48D0',
        iconStroke: '#9A48D0'
      }
    },
    {
      name: 'Theme 2',
      backgroundColor: 'conic-gradient(from 90deg at top right, #98E2C6, #C1FF9B)',
      textColor: '#2D3319',
      picture: meelfImage,
      text: 'First Renaissance Faire in 2023! Elf, pirate, fairy combo?',
      navbarColors: {
        backgroundColor: '#3EF496',
        borderColor: '#41cb52',
      },
      itemBoxBlogHover: {
        borderWidth: '4px',
        borderColor: ' #41cb52'
      },
      logoColors: {
        fill: '#dad7cd',
        stroke: '#DAF0EE',
        iconFill: '#B0CA87',
        iconStroke: '#B0CA87'
      }
    },
    {
      name: 'Theme 3',
      backgroundColor: 'conic-gradient(from 90deg at top right, cyan, rebeccapurple)',
      textColor: '#F0EFF4E0DE',
      picture: bluehairImage,
      text: 'I feel more confident about my selfies when they are in pixels.',
      navbarColors: {
        backgroundColor: '#C6FAF0',
        borderColor: '#4de7ff',
      },
      itemBoxBlogHover: {
        borderWidth: '4px',
        borderColor: '#fd65f8'
      },
      logoColors: {
        fill: '#bde0fe',
        stroke: '#003049',
        iconFill: '#1D0134',
        iconStroke: '#CCCCCC'
      }
    },
    {
      name: 'Theme 4',
      backgroundColor: 'conic-gradient(from 90deg at top right, #e7c6ff, #5863F8)',
      textColor: '#c8b6ff',
      picture: maxandmeImage,
      text: 'My loyal partner, Max, at the Ren Faire with me in his bard-garb.',
      navbarColors: {
        backgroundColor: '#AD5CFF',
        borderColor: '#c8b6ff',
      },
      itemBoxBlogHover: {
        borderWidth: '4px',
        borderColor: '#fd65f8'
      },
      logoColors: {
        fill: '#c8b6ff',
        stroke: '#F7F5FB',
        iconFill: '#B0CA87',
        iconStroke: '#B0CA87'
      }
    },
    {
      name: 'Theme 5',
      backgroundColor: 'conic-gradient(from 90deg at top right, #f4eea9, #f4f482)',
      textColor: '#a47e1b',
      picture: mamasatoruImage,
      text: 'My sweet puppy Satoru Huan, wriggling out of my arms. He has grown much since this. I live in white fur.',
      navbarColors: {
        backgroundColor: '#FFC60A',
        borderColor: '#a47e1b',
      },
      itemBoxBlogHover: {
        borderWidth: '4px',
        borderColor: '#fd65f8'
      },
      logoColors: {
        fill: '#fffcf2',
        stroke: '#76520e',
        iconFill: '#B0CA87',
        iconStroke: '#B0CA87'
      }
    },
    {
      name: 'Theme 6',
      backgroundColor: 'conic-gradient(from 90deg at top right, #D9CAB3, #8C7A6B)',
      textColor: '#BC8034',
      picture: squirrelImage,
      text: 'I checked off a major box on my bucket list when this squirrel ate out of my hand in DC. I would love to go back, even just for the squirrels.',
      navbarColors: {
        backgroundColor: '#605C4E',
        borderColor: '#4C230A',
      },
      itemBoxBlogHover: {
        borderWidth: '4px',
        borderColor: '#4C230A'
      },
      logoColors: {
        fill: '#BC8034',
        stroke: '#76520e',
        iconFill: '#B0CA87',
        iconStroke: '#B0CA87'
      }
    },
    {
      name: 'Theme 7',
      backgroundColor: 'conic-gradient(from 90deg at top right, #a4ac86, #656d4a)',
      textColor: '#3F403F',
      picture: megreenImage,
      text: 'One of the many phases of my forever-color-changing hair. Truly, though, green is the best color.',
      navbarColors: {
        backgroundColor: '#3E6259',
        borderColor: '#212922',
      },
      itemBoxBlogHover: {
        borderWidth: '4px',
        borderColor: '#434C40'
      },
      logoColors: {
        fill: '#c2c5aa',
        stroke: '#656d4a',
        iconFill: '#B0CA87',
        iconStroke: '#B0CA87'
      }
    },
    {
      name: 'Theme 8',
      backgroundColor: 'conic-gradient(from 90deg at top right, #9a8c98, #8d99ae)',
      textColor: 'white',
      picture: bwselfieImage,
      text: ' "Wow, I actually like this selfie, what a surpise!" - I said to Max after he took this.',
      navbarColors: {
        backgroundColor: '#434A42',
        borderColor: '#22223b',
      },
      itemBoxBlogHover: {
        borderWidth: '4px',
        borderColor: 'white'
      },
      logoColors: {
        fill: 'white',
        stroke: '#22223b',
        iconFill: '#B0CA87',
        iconStroke: '#B0CA87'
      }
    },
    {
      name: 'Theme 9',
      backgroundColor: 'conic-gradient(from 90deg at top right, #993955, #AE76A6)',
      textColor: '#A3C3D9',
      text: 'Young me and my sweet doggy, Oliver. A good boy that will always be with me.',
      picture: bwoliverImage,
      navbarColors: {
        backgroundColor: '#536B78',
        borderColor: '#A4587E',
      },
      itemBoxBlogHover: {
        borderWidth: '4px',
        borderColor: '#A4587E'
      },
      logoColors: {
        fill: '#536B78',
        stroke: '#76520e',
        iconFill: '#B0CA87',
        iconStroke: '#B0CA87'
      }
    },
    {
      name: 'Theme 10',
      backgroundColor: 'conic-gradient(from 90deg at top right, #FF6F59, #DB504A)',
      textColor: '#43AA8B',
      picture: littlemecomputerImage,
      text: 'I have been beepin and boopin since butterfly clips were cool the first time.',
      navbarColors: {
        backgroundColor: '#F89F5F',
        borderColor: '#43AA8B',
      },
      itemBoxBlogHover: {
        borderWidth: '4px',
        borderColor: '#43AA8B'
      },
      logoColors: {
        fill: '#43AA8B',
        stroke: '#76520e',
        iconFill: '#B0CA87',
        iconStroke: '#B0CA87'
      }
    },
  ];

  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex];

  const changeTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBoredClick = () => {
    changeTheme();
  };

  return (
    <div style={{ backgroundImage: theme.backgroundColor, color: theme.textColor }}>
      <Navbar handleScrollToSection={handleScrollToSection} theme={themes[themeIndex]} />
      <div className="app-wrapper">
        <div className="App">
          <div className="pages" id="section1">
            <Home appLogo={(
              <button className="svg-button" onClick={handleBoredClick}>
                <svg
                  className={`App-logo ${theme.logoClassName}`}
                  width="209px"
                  height="209px"
                  viewBox="-3.2 -3.2 38.40 38.40"
                  xmlns="http://www.w3.org/2000/svg"
                  style={theme.logoColors}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"
                    style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"
                    style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} stroke="#CCCCCC" strokeWidth="0.32" />
                  <g id="SVGRepo_iconCarrier"
                    style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }}>
                    <title
                      style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }}>
                    </title>
                    <g data-name="Layer 2" id="Layer_2" style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }}>
                      <path d="M26,19.72a10,10,0,0,0-6-8.88V8h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2h1v2.84a10,10,0,0,0-5.84,7.44A9,9,0,0,0,6,20a2.62,2.62,0,0,0,0,.28,10,10,0,0,0,19.84,1.44A9.74,9.74,0,0,0,26,20,2.62,2.62,0,0,0,26,19.72Zm-2.16,1.93A8,8,0,0,1,8,20.36c0-.12,0-.24,0-.36a7.43,7.43,0,0,1,.18-1.64,8,8,0,0,1,5.15-5.89,1,1,0,0,0,.67-1V8h4v3.52a1,1,0,0,0,.67,1A8,8,0,0,1,24,19.64,2.17,2.17,0,0,1,24,20,8.17,8.17,0,0,1,23.83,21.65Z"
                        style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
                      <path d="M22,20a6,6,0,0,1-12,0,5.29,5.29,0,0,1,.1-1.06l.33.16a5.12,5.12,0,0,0,2.57.62,5.12,5.12,0,0,0,2.57-.62A6.84,6.84,0,0,1,19,18.28a6.75,6.75,0,0,1,2.89.57A6.23,6.23,0,0,1,22,20Z"
                        style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
                      <path d="M8,8a.76.76,0,0,1-.75.75,1.51,1.51,0,0,0-1.5,1.5.75.75,0,0,1-1.5,0,1.5,1.5,0,0,0-1.5-1.5.75.75,0,0,1,0-1.5,1.5,1.5,0,0,0,1.5-1.5.75.75,0,0,1,1.5,0,1.51,1.51,0,0,0,1.5,1.5A.76.76,0,0,1,8,8Z"
                        style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
                      <path d="M30,5a.76.76,0,0,1-.75.75,1.51,1.51,0,0,0-1.5,1.5.75.75,0,0,1-1.5,0,1.5,1.5,0,0,0-1.5-1.5.75.75,0,0,1,0-1.5,1.5,1.5,0,0,0,1.5-1.5.75.75,0,0,1,1.5,0,1.51,1.51,0,0,0,1.5,1.5A.76.76,0,0,1,30,5Z"
                        style={{ fill: theme.logoColors.fill, stroke: theme.logoColors.stroke }} />
                    </g>
                  </g>
                </svg>
              </button>
            )} theme={theme} />
          </div>
          <div className="pages" id="section2">
            <Projects theme={theme} />
          </div>
          <div className="pages" id="section3">
            <CareerLore />
          </div>
          <div className="pages" id="section4">
            <Resume />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;