import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

function TodoList(props) { 
    const {todoItems,deleteTodo,editTodo,ModalShow} = props
  return (
    <div className="todo-wrapper mt-5">

  
        <div className="row">
            <div className="col-2">
            <h4>id</h4>
            </div>
            <div className="col-4">
            <h4>First Name</h4>
            </div>
            <div className="col-4">
            <h4>Last Name</h4>
            </div>
            <div className="col-2 text-center">
            <h4>Action</h4>
            </div>
        </div>
        {
            todoItems.map((items, i)=>
                <div className="row py-2 border-bottom" key={i}>
                    <div className="col-2 fs-5">{i}</div>
                    <div className="col-4 fs-5">{items.FirstName}</div>
                    <div className="col-4 fs-5">{items.LastName}</div>
                    <div className="col-2 text-center d-flex gap-2 justify-content-center">
                        <button className='btn btn-primary py-2' onClick={()=>editTodo(i)}><i className="bi bi-pencil"></i></button>
                        <button className='btn btn-danger py-2' onClick={()=> ModalShow(i)}><i className="bi bi-trash"></i></button>
                    </div>
                </div>
            )
        }
        
    </div> 
  )
}

export default TodoList
