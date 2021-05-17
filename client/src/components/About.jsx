import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
const About = () => {
    return (
      <div className='about_container' id='about'>
      <h1>About</h1>
      <div className='about_inner_container'>
      <div className='profile_container'>
        <img className='photo' src='./photos/photo.png'></img>

        <div className='hover_container'>
        <p className='quote'>Front End:
        React  CSS  HTML </p>
        <br></br>
        <br></br>
        <p className='quote'>Back End:
        MongoDB  PosgreSQL  Express  Node</p>
        </div>
      </div>
        <div className='home_text'>
        <p>I am a Front End developer with a joy for team building and storytelling.
        <br></br>
        <br></br>
        My history in restaurant management has given me "soft skills", my acting in Hollywood has given me my personal brand, and my respect for programming has given me an eye for detail and structure.
        <br></br>
        <br></br>
        I speak equal parts Neil LeBute and Neil deGrasse Tyson. My React components are functional yet classy.
        <br></br>
        <br></br>
        All comedy aside, I spend most of my days conceptualizing new wireframes on Figma and transferring them to code.
        <br></br>
        <br></br>
        Hover over for languages!
        <br></br>
          <a href="https://github.com/Jimmy-Lin-91" target="blank">
            <FiGithub className="icon"/>
          </a>
          <a href="http://linkedin.com/in/linjimmy91" target="blank">
            <AiOutlineLinkedin className="icon"/>
          </a>
          </p>
        </div>
      </div>
    </div>
    )
}
export default About;