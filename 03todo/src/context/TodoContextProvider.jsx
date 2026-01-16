import {useState} from 'react'
import TodoContext from './TodoContext'
const TodoContextProvider=({children})=>{
    const[todos,setTodos]=useState([]); 
  const addTodo=(todo)=>{
    setTodos((prev)=>[...pre]);
  }
  }