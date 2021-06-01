import React from 'react';
import { FiGithub } from 'react-icons/fi';


const Morpheus = ({ show, handleClose }) => {

    return (
      <div className='projects_morpheus_container'>
        <div className='modal_container'>
        <div className='modal_content'>
          <div className='carousel_tech_container'>
            <div className='carousel_container'>
              <img className='projects_morpheus_img' src='./photos/morpheusMain.jpg'></img>
            </div>
            <p>React Native, Expo, SQLite3</p>
          </div>
          <div className='project_description'>
          <p>Dream tracking app to help train the mind for lucid dreaming.</p>
            <br></br>
            <p>Portable dedicated database through SQLite3. Custom REST Api.</p>
            <br></br>

            <p>Track your emotions day to day to see the connection between waking and sleep states!</p>
            <br></br>
            <p>Best way to learn how to lucid dream is to exercise your dream recall muscles! Start logging your dreams today.</p>
            <br></br>
            <a href="github.com/Jimmy-lin-91/Morpheus" target="blank">
              <FiGithub style={{width: '30px', height: 'auto', color: 'var(--text'}}/>
            </a>
          </div>
        </div>
        <div className='modal_button_container'>
          <button onClick={handleClose}>Close</button>
        </div>
        </div>
      </div>
    )
}
export default Morpheus;