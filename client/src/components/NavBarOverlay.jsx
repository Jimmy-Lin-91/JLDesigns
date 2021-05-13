import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
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
              <a className='link' href='#projects'>Projects</a>
            </li>
            <li>
              <a className='link' href='./photos/FrontEndRes.pdf' target='blank'>Resumé</a>
            </li>
          </ul>
        </div>
        </div>

    )
}
export default NavBarOverlay;