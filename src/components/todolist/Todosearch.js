import React, { useRef, useState, useContext  } from "react";
import "./Todosearch.css";
import TodoContext from "../../store/TodoContext";

const Todosearch = (props) => {
  const inputref = useRef();
  const dataCtx = useContext(TodoContext);
  let inputHandler = (e) => {
    let inputSearchText = inputref.current.value.toLowerCase();
    dataCtx.searchItem(inputSearchText);
    // props.Searchdata(inputSearchText);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        ref={inputref}
        // value={inputValue}
        onChange={(e)=>inputHandler(e)}
        placeholder="Search Car"
      />
    </div>
  );
};
export default Todosearch;
