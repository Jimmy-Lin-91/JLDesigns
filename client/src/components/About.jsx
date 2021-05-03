import React from 'react'

const About = () => {
    return (
      <div className='about_container' id='about'>
      <h1>About</h1>
      <div className='profile_container'>
        <div className='photo_container'>
          <img className='photo' src='./photos/photo.png'></img>
        </div>
        <div className='home_text'>
        <p className='quote'><span>Front End</span>: React | CSS | HTML </p>
        <p className='quote'><span>Back End</span>: MongoDB | PosgreSQL | Express | Node</p>
<p>I am a Front End developer with a joy for team building and storytelling.
<br></br>
<br></br>
My history in restaurant management has given me "soft skills", my acting in Hollywood has given me my personal brand, and my respect for programming has given me an eye for detail and structure.
<br></br>
<br></br>
I speak equal parts Neil LeBute and Neil deGrasse Tyson. My React components are functional yet classy.
<br></br>
<br></br>
All comedy aside, I bring humanity and compassion. Any team is my team. </p>
        </div>
      </div>
    </div>
    )
}
export default About;