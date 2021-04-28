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
        <Router>
            <nav className='menu'>
              <ul>
                <li>
                  <Link className='link' to='/'>Home</Link>
                </li>
                <li>
                  <Link className='link' to='/About'>About</Link>
                </li>
                <li>
                  <Link className='link' to='/Projects'>Projects</Link>
                </li>
                <li>
                  <a href='http://linkedin.com/in/linjimmy91' target='blank'>
                    <AiOutlineLinkedin className='linkedin-icon'/>
                  </a>
                </li>
            <li>
              <a href='https://github.com/Jimmy-Lin-91' target='blank'>
              <FiGithub className='github-icon'/>
              </a>
            </li>
              </ul>
            </nav>
          <Switch>
            <Route path='/'></Route>
            <Route path='/about'></Route>
            <Route path='/projects'></Route>
          </Switch>
        </Router>
        </div>
        </div>

    )
}
export default NavBarOverlay;