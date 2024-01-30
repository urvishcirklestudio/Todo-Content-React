import React, { useContext } from 'react'
import { TodoContext } from './context/TodoContext';

function Form() {
    const {inputChange,getTodos,todo,ModalShow, } = useContext(TodoContext);
    // console.log(TodosItems);
  return (
    <form action="#" className="row align-items-end" onSubmit={(e)=>e.preventDefault()}>
          <div className="col-5 form-group">
            <label htmlFor="" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="w-100 p-2"
              name="FirstName"
              value={todo.FirstName}
              onChange={inputChange}
            />
          </div>
          <div className="col-5 form-group">
            <label htmlFor="" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="w-100 p-2"
              name="LastName"
              value={todo.LastName}
              onChange={inputChange}
            />
          </div>
          <div className="col-2 text-center">
            <button className="btn btn-primary py-2 w-100" 
            onClick={getTodos}
            >
              Submite
            </button>
          </div>
        </form>
  )
}

export default Form
