import React from 'react'
import { FiGithub } from 'react-icons/fi';
const PlooberModal = ({ show, handleClose }) => {
    return (
      <div className='projects_ploober_container'>
        <div className='modal_container'>
        <div className='modal_content'>
          <div className='ploober_gif'>
          <img src="https://media.giphy.com/media/GdFAvyOJ0BsrGs82yq/giphy.gif" ></img>
          <p>React Native | MongoDB Atlas | Express | Node | Firebase | Expo </p></div>
          <div className='project_description'>
          <p>Passion project conceptualized on Figma and created with React Native and Expo during a week long sprint.</p>
            <br></br>
            <p>Oversaw the daily standup of three other engineers to ensure a smooth production.</p>
            <br></br>

            <p>Used iOS geolocation and Yelp API to narrow down plumbers within a 2 mile radius of current location.</p>
            <br></br>
            <p>Your #1 choice to help with #2 problems!</p>
            <br></br>
            <a href="https://github.com/Wolf-Of-Call-Street/Ploober-React-Native" target="blank">
              <FiGithub style={{width: '30px', height: 'auto', color: 'var(--text'}}/>
            </a>
          </div>
        </div>
        <div className='modal_button_container'>
          <button onClick={handleClose}>close</button>
        </div>
        </div>
      </div>
    )
}
export default PlooberModal;