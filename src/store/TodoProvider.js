import React, { useReducer } from "react";
import TodoContext from "./TodoContext";

const dummydata = [
  {
    id: "1",
    value: "Mercedes",
    isChecked: false,
  },
  {
    id: "2",
    value: "Audi",
    isChecked: false,
  },
];

var initialValue = {
  dummydata: dummydata,
  updatedData: dummydata,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        dummydata: state.dummydata.concat(action.item),
        updatedData: state.dummydata.concat(action.item),
      };
    case "DELETE":
      const deleteUserData = state.dummydata.filter(
        (data1) => data1.id !== action.itemId
      );

      return {
        dummydata: deleteUserData,
      };
    case "SEARCH":
      const filterItems = state.dummydata.filter((item) => {
        return (
          item.value.toLowerCase().indexOf(action.itemInput.toLowerCase()) > -1
        ); // true
      });
      return {
        updatedData: state.updatedData,
        dummydata: action.itemInput.length ? filterItems : state.updatedData,
      };
    case "CHECKED":
      const updatedCheckedData = state.dummydata.map((item) => {
        return item.id === action.itemchecked
          ? { ...item, isChecked: !item.isChecked }
          : item;
      });

      return {
        updatedData : updatedCheckedData,
        dummydata: updatedCheckedData,
      };

    case "CHANGESTATE":
      var dataArray = state.updatedData;
      if(action.itemcheckedCase === "all"){
        dataArray = state.updatedData;
      } else if(action.itemcheckedCase === "completed"){
        dataArray =  state.updatedData.filter((item) => {
          return item.isChecked === true;
        })
      } else if(action.itemcheckedCase === "active"){

        dataArray = state.updatedData.filter((item) => {
        return item.isChecked === false;
      });
      }
      return {
        updatedData : state.updatedData,
        dummydata: dataArray
      };
  }

  return initialValue;
};

const TodoProvider = (props) => {
  const addItemHandler = (itemData) => {
    dispatchToDo({ type: "ADD", item: itemData });
  };
  const deleteItemHandler = (itemDataId) => {
    dispatchToDo({ type: "DELETE", itemId: itemDataId });
  };
  const searchItemHandler = (itemDataInput) => {
    dispatchToDo({ type: "SEARCH", itemInput: itemDataInput });
  };
  const checkedItemHandler = (checkedItem) => {
    dispatchToDo({ type: "CHECKED", itemchecked: checkedItem });
  };
  const footerChangeFnHandler = (footerChangeFnHandlerItem) => {
    dispatchToDo({
      type: "CHANGESTATE",
      itemcheckedCase: footerChangeFnHandlerItem,
    });
  };

  const [todoState, dispatchToDo] = useReducer(todoReducer, initialValue);
  const todoContext = {
    dummydata: todoState.dummydata,
    updatedData: todoState.dummydata,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    searchItem: searchItemHandler,
    checkedItem: checkedItemHandler,
    footerChangeFn: footerChangeFnHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;