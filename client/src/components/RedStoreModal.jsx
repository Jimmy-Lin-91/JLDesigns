import React from 'react';
import { FiGithub } from 'react-icons/fi';


const RedStoreModal = ({ show, handleClose }) => {
  const imgurLinks = ['https://i.imgur.com/YTgdgAt.png', 'https://i.imgur.com/tNVV3MG.png', 'https://i.imgur.com/OgRbkuQ.png', 'https://i.imgur.com/CyqcnBT.png', 'https://i.imgur.com/eK5TaUP.png'];
    return (
      <div className='projects_redstore_container'>
        <div className='modal_container'>
        <div className='modal_content'>
          <div className='carousel_tech_container'>
            <div className='carousel_container'>
            {imgurLinks.map((link, index) => {
                return (
                  <div>
                    <a href={link} key={index} target="blank">
                      <img src={link} className="redstore_carousel_img"></img>
                    </a>
                  </div>
                )
              })}
            </div>
            <p>HTML | CSS </p>
          </div>
          <div className='project_description'>
          <p>Mock merchandise store using pre-existing png and photos.</p>
            <br></br>
            <p>Front facing customer landing page displaying hottest items, item descriptions, and ratings.</p>
            <br></br>

            <p>Dedicated section to user reviews and featured product.</p>
            <br></br>
            <p>Who knew spending money could be this fun? Oh, wait. Everyone. Scroll right for screenshots!</p>
            <br></br>
            <a href="https://jimmy-lin-91.github.io/eCommerceMock/" target="blank">
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
export default RedStoreModal;