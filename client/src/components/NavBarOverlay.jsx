import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { AiOutlineLinkedin, AiFillHome } from 'react-icons/ai';
import { FiGithub, FiBriefcase , FiFileText} from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Pdfile from '../../dist/JimmyLin.pdf';
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
              <a href='#homepage' className='nav_bar_overlay_icons'>
                <AiFillHome />
              </a>
              <a className='link' href='#homepage'>Home</a>
            </li>
            <li>
            <a href='#about' className='nav_bar_overlay_icons'>
                <CgProfile/>
              </a>
              <a className='link' href='#about'>About</a>
            </li>
            <li>
              <a className='link' id='project_overlay_button' href='#projects'>Projects</a>
            </li>
            <li>
              <a className='nav_bar_overlay_icons resume'
              href='https://drive.google.com/file/d/1W5E6uqG60i_bN164qrFHgGwXyDdFy3f5/view?usp=sharing' target='blank'>
                <FiFileText/>
              </a>
              <a className='link' id='resume_overlay_button' href='https://drive.google.com/file/d/1W5E6uqG60i_bN164qrFHgGwXyDdFy3f5/view?usp=sharing' target='blank'>Resumé</a>
            </li>
            <li>
              <a className='nav_bar_overlay_icons email'
              href='#contact'>
                <AiOutlineMail/>
              </a>
              <a className='link' id='contact_overlay_button' href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        </div>

    )
}
export default NavBarOverlay;