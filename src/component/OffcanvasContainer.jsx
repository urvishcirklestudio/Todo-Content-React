import React, { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function OffcanvasContainer() {
    const {OffcanvasShow} = useContext(TodoContext)
  return (
    <div className="my-5 py-3 text-end">
        <OverlayTrigger 
            overlay={<Tooltip>Check Delete history</Tooltip>} placement="bottom">
          <button className="btn btn-secondary" onClick={OffcanvasShow}>
          <i className="bi bi-clock-history"></i>
          </button>
          </OverlayTrigger>
    </div>
  )
}

export default OffcanvasContainer
