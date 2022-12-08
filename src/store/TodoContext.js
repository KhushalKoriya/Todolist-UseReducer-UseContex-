import React from 'react'

const TodoContext =  React.createContext({
    dummydata : [],
    updatedData : [],
    addItem : item => {},
    deleteItem :item =>{},
    searchItem :item =>{},
    checkedItem :item =>{}
});

export default TodoContext;