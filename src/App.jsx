import { useContext, useEffect, useState } from "react";
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
import AppProvider, { TodoContext } from "./component/context/TodoContext";
import Form from "./component/Form";
import ModalContainer from "./component/ModalContainer";
import OffcanvasContainer from "./component/OffcanvasContainer";
 

function App() { 
 
  return (
    <AppProvider>
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
        <OffcanvasContainer/>
        <Form/>
        <TodoList/>
        <History/>
      <ModalContainer/>
      </div> 

    </AppProvider>
  );
}

export default App;
