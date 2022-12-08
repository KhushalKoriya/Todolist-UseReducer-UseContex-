import React, {useEffect, uselistData, useState, useContext}from "react";
import Tododelete from "./Tododelete";
import "./Todolistitem.css";
import TodoContext from "../../store/TodoContext";

const TodolistItem = (props) => {
  const dataCtx = useContext(TodoContext);
  // console.log(props.dataitem);
  const [deleteData, setDeleteData] = useState(null); 
  const [deleted, setDeleted] = useState(false);
  // const onDeleteUserHandler = (deleteUserId) => {
  //   props.onDeleteUser(deleteUserId);
  // };
   
const onClose =()=>{
setDeleted(false);
}
const clickDeleteData = (userDeleteId) => {
setDeleted(true);
setDeleteData(userDeleteId);
}

  const itemChangeHandler = (itemId) => {
    dataCtx.checkedItem(itemId);
    // props.checkedUpdatedItem(itemId);
  }
  return (
   <>
    <input type="checkbox" className="checkbox " checked={props.dataitem.isChecked} onChange ={()=>itemChangeHandler(props.dataitem.id)}/>
    <span 
      className={
        props.dataitem.isChecked ? "checked-item" : "not-checked-item"
      }
    >
      {props.dataitem.value}
    </span>
    <a className="delete" onClick={() => clickDeleteData(props.dataitem.id)}></a>
    {deleted && (
        <Tododelete
        onClose={onClose}
        show={setDeleted}
        // onDeleteUserHandler={onDeleteUserHandler}
        deleteData = {deleteData}
        />
      )}
    </>
  
  );
};
export default TodolistItem;
