import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import Pdfile from '../../dist/FrontEndRes.pdf';
const NavBarOverlay = () => {
    return (
      <div className='menu_container' >
        <input type='checkbox' name='toggler' className='toggler'></input>
        <div className="hamburger">
          <div></div>
        </div>
        <div className='nav_bar_overlay_container'>
          <ul>
            <li>
              <a className='link' href='#homepage'>Home</a>
            </li>
            <li>
              <a className='link' href='#about'>About</a>
            </li>
            <li>
              <a className='link' id='project_overlay_button' href='#projects'>Projects</a>
            </li>
            <li>
              <a className='link' id='resume_overlay_button' href='https://drive.google.com/file/d/1lXiLRiMM9bwJUCOO0JeIOP0esQ9d8Ej7/view?usp=sharing' target='blank'>Resumé</a>
            </li>
            <li>
              <a className='link' id='contact_overlay_button' href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        </div>

    )
}
export default NavBarOverlay;