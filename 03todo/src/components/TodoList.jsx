import { UseTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = UseTodo();

  // Empty state
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-6">
        No todos yet. Add one 🚀
      </p>
    );
  }

  return (
    <ul className="w-full mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
