import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="
      flex items-center justify-between
      px-4 py-3
      rounded-lg
      bg-zinc-800
      border border-zinc-700
    ">
      <span className="text-white text-sm">
        {todo.text}
      </span>

      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="
          px-3 py-1
          text-sm
          rounded-md
          bg-red-600
          text-white
          hover:bg-red-700
          transition
        "
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
