import { createContext, useEffect, useReducer } from "react";
import TodoReducer from "./TodoReducer";
import { ToastContainer, toast } from 'react-toastify';
const getlocaldata = (localData) => {
  let list = localStorage.getItem(localData);
  if (list) {
    return JSON.parse(localStorage.getItem(localData));
  } else {
    return [];
  }
};

export const TodoContext = createContext()
const initialvalue = {
  todo: { FirstName: "", LastName: "", },
  updateTodo: { update: false, index: "" },
  TodosItems: getlocaldata('TodosData'),
  DelHistory: getlocaldata('Deletehistory'),
  show: { modalShow: false, id: "", Offcanvas: false, }
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialvalue)
  // Get Input value and Set todo
  const inputChange = (e) => {
    dispatch({
      type: "Set_input_val", payload: {
        name: e.target.name,
        value: e.target.value,
      }
    });
  }

  // Get Todo Data And set Items
  const getTodos = (e) => {
    if (state.todo.FirstName !== '' && state.todo.LastName !== '') {
      if (state.updateTodo.update) {
        dispatch({ type: "Update_Todo" })
        toast(`Your Data Update successfully`);
      } else {
        dispatch({ type: "Add_New_Todo" })
      }
    }
    else if (state.todo.FirstName !== '' || state.todo.LastName !== '') {
      dispatch({ type: "Add_New_Todo" })
    }
    dispatch({ type: "ClearTodo" })
  };

  //  Edit Todo
  const editTodo = (id) => {
    dispatch({ type: 'Edit_Todo', payload: { data: state.TodosItems[id], id } })
  };

  //  Delete Todo Items
  const deleteTodoItems = (id) => {
    dispatch({ type: "Delete_Items", payload: id })
  };

  // Reuse Delete History Items
  const reuse = (id) => { 
    dispatch({ type: "Reuse_Del_Item", payload: id });
  };

  // Delete History Items
  const DeletlocalItems = (id) => {
    dispatch({ type: "Del_History_Item", payload: id });    
  };

  // Modal Show Delete Popup
  const ModalShow = (id) => dispatch({ type: "Show_Modal", payload: id });
  // Modal Close
  const ModalClose = (id) => dispatch({ type: "Close_Modal" });
  // OffCanvasShow Close
  const OffcanvasShow = () => dispatch({ type: "Show_OffCanvas" });







  useEffect(() => {
    localStorage.setItem("TodosData", JSON.stringify(state.TodosItems));
    localStorage.setItem("Deletehistory", JSON.stringify(state.DelHistory));
  }, [state.TodosItems, state.DelHistory])

  return (
    <TodoContext.Provider value={{ ...state, inputChange, getTodos, editTodo, ModalShow, ModalClose, deleteTodoItems, reuse, OffcanvasShow, DeletlocalItems }}>
      {children}
    </TodoContext.Provider>
  )
}

export default AppProvider