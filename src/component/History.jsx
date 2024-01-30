import React, { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import DeleteItems from "./DeleteItems";
import { TodoContext } from "./context/TodoContext";

function History(props) {
  const { show, ModalClose, DelHistory,reuse,DeletlocalItems, } = useContext(TodoContext); 
  return (
    <Offcanvas
      className="offcanvascustom"
      show={show.Offcanvas}
      onHide={ModalClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bold">Delete History</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="delet_grp">
        {DelHistory.length > 0 ? (
          DelHistory.map((items, index) => (
            <DeleteItems key={index} id={index} items={items}/>
          ))
        ) : ( 
          <h3 className="text-center mt-5 fw-bold">No Data....!</h3>
          
        )} 

           
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default History;
