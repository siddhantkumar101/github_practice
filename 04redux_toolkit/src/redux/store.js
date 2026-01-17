import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"  
export const store=configureStore({
            reducer:{
                todo:todoReducer,
            },
}) ;
// //{
//   todo: {
//     todos: []// this will be the global satte stucutre

//   }
// }
