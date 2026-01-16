import { createContext, useContext } from "react";

export const TodoContext = createContext(null);

export const UseTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used inside TodoContextProvider");
  }

  return context;
};