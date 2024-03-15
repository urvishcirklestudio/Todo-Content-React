import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./component/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import History from "./component/History";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./App.css";
import { Offcanvas } from "bootstrap";
const getlocaldata = (localData) => {
  let list = localStorage.getItem(localData);
  if (list) {
    return JSON.parse(localStorage.getItem(localData));
  } else {
    return [];
  }
};

function App() {
  // FORM STATE
  const [todo, setTodo] = useState({FirstName: "",LastName: "",});
  const [updateTodo, setUpdateTodo] = useState({update: false,index: ""});
  const [items, setItems] = useState(getlocaldata("TodoData"));

  const [DelHistory, setDelHistory] = useState('');
//  console.log(DelHistory);
  // Modal State
  const [show, setShow] = useState({
    modalShow: false,
    id: "",
    Offcanvas:false,

  });

  // CURD Opration
  const inputChange = (e) =>setTodo({ ...todo, [e.target.name]: e.target.value });
  const getTodos = (e) => {
    if(todo.FirstName !== '' && todo.LastName !== ''){
      if (updateTodo.update) {
        const updatedItems = [...items];
        updatedItems[updateTodo.index] = { ...todo };
        setItems(updatedItems);
        toast(`Your Data Update successfully`);
        setUpdateTodo({ update: false, index: "" });
      } else {
        // setItems([...items, todo]);  
        setItems((curValue)=>[...curValue,{...todo,RollNo:items.length + DelHistory.length}]);
      }
    }
    setTodo({ FirstName: "", LastName: "" });
  };

  const deleteTodo = (id) => {
    const updateTodo = items.filter((ele, index) => {
      return index !== id;
    });

    const localDeleteData = getlocaldata("Deletehistory");
    setDelHistory(localDeleteData) 
    
    localStorage.setItem("Deletehistory", JSON.stringify([...localDeleteData,items[id]]));

   
    setItems(updateTodo);
    setShow({modalShow: false,id: "",});
  };

  const editTodo = (id) => {
    setUpdateTodo({ update: true, index: id });
    setTodo({ ...items[id] });
  };
  const reuse = (id) => {
    const reuseDelItem = DelHistory.filter((ele, index) => {
      return index !== id;
    })      
    // console.log({...DelHistory[id],id});
    setDelHistory(reuseDelItem);
    setShow({...show,Offcanvas: reuseDelItem.length == 0 ? false : show.Offcanvas})

    localStorage.setItem("Deletehistory", JSON.stringify(reuseDelItem));
    const SetArray = [...items,DelHistory[id]]; 
    SetArray.sort((a, b)=>a.RollNo-b.RollNo); 
    setItems(SetArray) 
    
  };  
   const DeletlocalItems = (id) => {
    const reuseDelItem = DelHistory.filter((ele, index) => {
      return index !== id;
    }) 
    setShow({...show,Offcanvas: reuseDelItem.length == 0 ? false : show.Offcanvas})

    localStorage.setItem("Deletehistory", JSON.stringify(reuseDelItem));
    setDelHistory(reuseDelItem);     
  };

  useEffect(() => {
    localStorage.setItem("TodoData", JSON.stringify(items));
    setDelHistory(getlocaldata("Deletehistory"))
  }, [items]);

  // Modal Fun
  const handleClose = () => setShow({ odalShow: false, id: "" ,Offcanvas:false});
  const ModalShow = (id) => setShow({ modalShow: true, id,Offcanvas:false });
  const OffcanvasShow = () => setShow({ ...show,Offcanvas:true });
 
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="container py-5">
        <div className="my-5 py-3 text-end">
        <OverlayTrigger 
            overlay={<Tooltip>Check Delete history</Tooltip>} placement="bottom">
          <button className="btn btn-secondary" onClick={OffcanvasShow}>
          <i className="bi bi-clock-history"></i>
          </button>
          </OverlayTrigger>
        </div>
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
            <button className="btn btn-primary py-2 w-100" onClick={getTodos}>
              Submite
            </button>
          </div>
        </form>

        <TodoList
          todoItems={items}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          ModalShow={ModalShow}
        />
      </div>

      <History show={show} handleClose={handleClose} DelHistory={DelHistory} reuse={reuse} DeletlocalItems={DeletlocalItems}/>

      <Modal show={show.modalShow} onHide={handleClose}>
        <Modal.Header className="justify-content-center">
          <Modal.Title className="fs-5">
            Are you sure you want to delete this item
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer className="justify-content-center">
          <Button variant="danger" onClick={() => deleteTodo(show.id)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
