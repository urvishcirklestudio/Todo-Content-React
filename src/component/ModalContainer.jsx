import React, { useContext } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { TodoContext } from './context/TodoContext'

function ModalContainer() {
    const{show,ModalClose,deleteTodoItems}=useContext(TodoContext)
  return (
    <Modal show={show.modalShow} onHide={ModalClose}>
        <Modal.Header className="justify-content-center">
          <Modal.Title className="fs-5">
            Are you sure you want to delete this item
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer className="justify-content-center">
          <Button variant="danger" onClick={() => deleteTodoItems(show.id)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalContainer
