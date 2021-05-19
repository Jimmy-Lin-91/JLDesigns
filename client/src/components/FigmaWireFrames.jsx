import React from 'react'

const FigmaWireFrames = ({ show, handleClose }) => {
    return (
      <div className='wireframes_container' id='wireframes'>
        <h1>Designs and Clients</h1>
        <div className='wireframes_outer_container'>
          <div classname='wireframes_inner_container'>
            <div className='wireframe_style1'>
              <div className='wireframe_style1_col-1'>
                <p>BB Communications</p>
                <img src='./photos/BBMaster.jpg'></img>
                <div className='wireframe_style1_text'>
              </div>
              </div>
              <div className='wireframe_style1_col-2'>
                <img src='./photos/BBFull.jpg'></img>
              </div>
            </div>
          </div>
          <div classname='wireframes_inner_container'>
            <div className='wireframe_style1'>
              <div className='wireframe_style1_col-1'>
                <p>Actor's Page</p>
                <img src='./photos/AWMain.jpg'></img>
                <div className='wireframe_style1_text'>
              </div>
              </div>
              <div className='wireframe_style1_col-2'>
                <img src='./photos/AWFull.jpg'></img>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
}
export default FigmaWireFrames;