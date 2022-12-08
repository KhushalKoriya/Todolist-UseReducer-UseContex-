import React,{useContext} from 'react';
import TodoContext from "../../store/TodoContext";

import './Card.css';

const Card = (props) => {
  const dataCtx = useContext(TodoContext);
  const classes = props.className;
//className={`todolist ${dataCtx.darkMode ? 'todolistDark' : 'todolistwhite'}`
  return <div className={`${classes} ${dataCtx.darkMode ? 'todolistDark' : 'todolistwhite'}`}>{props.children}</div>;
};

export default Card;