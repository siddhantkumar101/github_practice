import React from 'react'
import {useState} from "react";
import {UseTodo} from "../context/TodoContext"

function TodoInput() {
    const[todo,setTodo]=useState('');
const{addTodo}=UseTodo();
const handleAdd = () => {
  if (!todo.trim()) return;   // empty todo mat bhejo
  addTodo(todo);              // context ko bhej do
  setTodo("");                // input clear
};




  return (
    <div className="w-full flex gap-3 mb-6">
      {/* Input */}
      <input
        type="text"
        placeholder="Add a new todo..."
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        className="
          flex-1
          px-4 py-2
          rounded-lg
          bg-zinc-900
          text-white
          placeholder-gray-400
          border border-zinc-700
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          transition
        "
      />

      {/* Button */}
      <button
        className="
          px-5 py-2
          rounded-lg
          bg-blue-600
          text-white
          font-medium
          hover:bg-blue-700
          active:scale-95
          transition

        "
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

  


export default TodoInput