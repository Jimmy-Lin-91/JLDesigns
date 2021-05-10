import React from 'react'

const REIModal = ({ show, handleClose }) => {
    return (
      <div className='projects_rei_container'>
        <div>
          <div>
            {/* for gif */}
          </div>
          <div>
            {/* for description */}
          </div>
        </div>
        <button onClick={handleClose}>close</button>
      </div>
    )
}
export default REIModal;