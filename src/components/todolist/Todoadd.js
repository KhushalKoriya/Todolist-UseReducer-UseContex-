import React, { useState, useContext } from "react";
import "./Todoadd.css";
import TodoContext from "../../store/TodoContext";

const Todoadd = (props) => {
  const [enteredValue, setEnteredValue] = useState({
    id :  null,
    value : '',
    isChecked : false
  });
  const dataCtx = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();
    dataCtx.addItem(enteredValue);
    // const todoData = {
    //   value: enteredValue,
    //   isChecked : false
    // };
    // props.onSaveTodoData(todoData);
    setEnteredValue({...enteredValue, value : ''});
  };
  const valueChangeHandler = (e) => {
    setEnteredValue({
      ...enteredValue,
      id :  Math.random().toString(),
      value : e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          value={enteredValue.value}
          placeholder="Add New Car"
          onChange={valueChangeHandler}
        />
        <button type="submit" hidden>Add</button>
      </form>
    </div>
  );
};
export default Todoadd;
