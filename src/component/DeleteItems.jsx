import React, { useContext } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { TodoContext } from './context/TodoContext';

function DeleteItems(props) {
     const {reuse,DeletlocalItems} = useContext(TodoContext); 
  return (
    <div className='delete_items'>
        <div className="items_value fs-6" > 
             <p>First Name: {props.items.FirstName}</p>
            <p>Last Name: {props.items.LastName}</p>
        </div> 
        
        <div className="reuse">
            <OverlayTrigger 
            overlay={<Tooltip>Reuse</Tooltip>} placement="bottom">
                <button className='btn btn-primary p-0' onClick={()=>reuse(props.id)}><i className="bi bi-arrow-right-short"></i></button>    
            </OverlayTrigger>
            <OverlayTrigger 
            overlay={<Tooltip>Delete</Tooltip>} placement="bottom">
                <button className='btn btn-danger p-0' onClick={()=>DeletlocalItems(props.id)}><i className="bi bi-trash"></i></button>    
            </OverlayTrigger>
        </div> 
    </div>
  )
}

export default DeleteItems
