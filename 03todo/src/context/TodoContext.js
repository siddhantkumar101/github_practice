import {react} from 'react'
import {createContext,useContext} from 'react'
export const TodoContext=createContext(null);
export const useTodo=()=>useContext(TodoContext);

