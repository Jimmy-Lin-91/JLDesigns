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
          <div className='ploober_description'>
          <p>Facilitated daily stand-up between design and product team to ensure smooth production.</p>
            <br></br>
            <p>Completed MVP within a week timefame.</p>
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
        <div className='modal_button'>
          <button onClick={handleClose}>close</button>
        </div>
        </div>
      </div>
    )
}
export default PlooberModal;