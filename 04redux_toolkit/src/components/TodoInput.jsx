import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );

    setText("");
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="
          flex-1
          px-4 py-2
          rounded-lg
          bg-zinc-800
          text-white
          placeholder-gray-400
          border border-zinc-700
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
        "
      />

      <button
        onClick={handleAdd}
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
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
