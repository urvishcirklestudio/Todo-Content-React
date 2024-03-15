import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function DeleteItems(props) {
     const {items,reuse,id,DeletlocalItems} = props
  return (
    <div className='delete_items'>
        <div className="items_value fs-6" data-id={items.id}>
            <p>First Name: {items.FirstName}</p>
            <p>Last Name: {items.LastName}</p>
        </div> 
        
        <div className="reuse">
            <OverlayTrigger 
            overlay={<Tooltip>Reuse</Tooltip>} placement="bottom">
                <button className='btn btn-primary p-0' onClick={()=>reuse(id)}><i className="bi bi-arrow-right-short"></i></button>    
            </OverlayTrigger>
            <OverlayTrigger 
            overlay={<Tooltip>Delete</Tooltip>} placement="bottom">
                <button className='btn btn-danger p-0' onClick={()=>DeletlocalItems(id)}><i className="bi bi-trash"></i></button>    
            </OverlayTrigger>
        </div> 
    </div>
  )
}

export default DeleteItems
