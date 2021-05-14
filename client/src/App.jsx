import React from 'react';
import NavBarOverlay from './components/NavBarOverlay.jsx';
import Burger from './components/Burger.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import FigmaWireFrames from './components/FigmaWireFrames.jsx'
import { Transition } from 'react-transition-group';
import { Tracker } from 'react-tracker';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <div className='omega_container'>
      <div className='homepage_container' id='homepage'>
        <div className='nav_bar'>
          <img className='logo' src='./photos/logo.png'></img>
          <NavBarOverlay />
        </div>
          <div className='hero_text'>
            <div className='hero_text_divOne'>
              <h1 className='hero_h1_text'>He<span>ll</span>o, my name is Jimmy<span>L</span>in</h1>
            </div>
            <div className='hero_text_divTwo'>
              <h3 className='first_h3Text'>I'm a Front End Software Engineer</h3>
            </div>
            <div className='hero_text_divThree'>
              <h3 className='second_h3Text'>...with a passion for storyte<span>ll</span>ing.</h3>
            </div>
          </div>
      </div>
       <About />
       <Projects />
       <FigmaWireFrames/>
       <Contact/>
    </div>
  )
}
export default App;