import 'bootstrap/dist/css/bootstrap.min.css';  
import {Modal, Button} from 'react-bootstrap';
import React, { useState, useContext } from "react";
import TodoContext from "../../store/TodoContext";
 const Tododelete =(props)=>{
  const dataCtx = useContext(TodoContext);
    const userDeleteHandler = (userDeleteId) => {
      dataCtx.deleteItem(userDeleteId);
        // props.onDeleteUserHandler(userDeleteId);
        props.onClose();
    }
    
    return (
 
        <Modal show={props.show} onHide={props.onClose} style={{zIndex:'0 !important'}}>  
  <Modal.Header closeButton>  
    <Modal.Title>Delete Data</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body>  
  <div className="modal-body">
            Are you sure you want to delete this Data?
        </div>
  </Modal.Body>  
  
  <Modal.Footer>  
    <Button variant="secondary" onClick={props.onClose}>Close</Button>  
    <Button variant="primary" onClick={() => userDeleteHandler(props.deleteData)}>Delete</Button>  
  </Modal.Footer>  
</Modal>
       
    );
}

export default Tododelete;
