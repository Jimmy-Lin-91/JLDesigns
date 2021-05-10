import React from 'react'

const RedStoreModal = ({ show, handleClose }) => {
    return (
      <div className='projects_redstore_container'>
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
export default RedStoreModal;