import './App.css';
import React, { useState } from 'react';
import Todolist from './components/todolist/Todolist';
import TodoProvider from './store/TodoProvider';


// const dataContex = React.createContext(dummydata);
function App() {
  // const[data,setData]=useState(dummydata);

  // const onAddData=(todoData)=>{
  //     setData((prevTodoData) => {
  //       return[...prevTodoData,todoData];
  //     });
  // }
  return (
    <TodoProvider>
    <Todolist/>
    </TodoProvider>
  );
}

export default App;
