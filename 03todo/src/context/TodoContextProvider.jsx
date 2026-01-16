
import { createContext,useContext } from "react";
import { TodoContext } from "./TodoContext";
import {useState} from "react";


const TodoContextProvider = ({children}) => {
    const[todos,setTodos]=useState([]);
    //add todo
    const addTodo=(text)=>{
const newTodo={
        id:Date.now(),
        text:text,
        completed:false
    };
setTodos((prevTodos)=>[...prevTodos,newTodo])
};
//detete todo
const deleteTodo = (id) => {
    setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== id)
    );
};
const updateTodo=(id,newText)=>
{
    setTodos((prevTodos)=>prevTodos.map((todo)=>todo.id===id?{...todo,text:newText}:todo))//doubt in this region
};


    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            deleteTodo,
            updateTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider;