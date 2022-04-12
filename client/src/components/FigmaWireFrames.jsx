import React from 'react'

const FigmaWireFrames = ({ show, handleClose }) => {
    return (
      <div className='wireframes_container' id='wireframes'>
        <h1>Designs and Clients</h1>
        <div className='wireframes_outer_container'>
          <div classname='wireframes_inner_container'>
            <div className='wireframe_style1'>
              <div className='wireframe_style1_col-1'>
                <p>VEDA</p>
                <iframe
                width="500"
                height="300"
                src="https://youtube.com/embed/df9Rm2FxvX4"/>
              </div>
            </div>
          </div>
          <div classname='wireframes_inner_container'>
            <div className='wireframe_style1'>
              <div className='wireframe_style1_col-1'>
                <p>Me In Te</p>
                <iframe
                width="500"
                height="300"
                src="https://youtube.com/embed/frGH65vhqdM"/>
              </div>

            </div>
          </div>

        </div>
      </div>
    )
}
export default FigmaWireFrames;