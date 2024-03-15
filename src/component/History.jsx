import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import DeleteItems from "./DeleteItems";

function History(props) {
  const { show, handleClose, DelHistory,reuse,DeletlocalItems } = props; 
  return (
    <Offcanvas
      className="offcanvascustom"
      show={show.Offcanvas}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bold">Delete History</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="delet_grp">
        {DelHistory.length > 0 ? (
          DelHistory.map((items, index) => (
            <DeleteItems key={index} id={index} items={items} reuse={reuse} DeletlocalItems={DeletlocalItems}/>
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
