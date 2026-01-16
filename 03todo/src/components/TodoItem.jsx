import { useState } from "react";
import { UseTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = UseTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleUpdate = () => {
    if (!editedText.trim()) return;
    updateTodo(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="w-full flex items-center justify-between gap-3 px-4 py-3 mb-2 rounded-lg bg-zinc-900 border border-zinc-700">
      {/* LEFT SIDE */}
      {!isEditing ? (
        <span className="text-white">{todo.text}</span>
      ) : (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="
            flex-1
            px-2 py-1
            rounded-md
            bg-zinc-800
            text-white
            border border-zinc-600
            focus:outline-none
            focus:ring-2 focus:ring-blue-500
          "
        />
      )}

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex gap-2">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="
              px-3 py-1
              text-sm
              rounded-md
              bg-yellow-500
              text-black
              hover:bg-yellow-600
              transition
            "
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="
              px-3 py-1
              text-sm
              rounded-md
              bg-green-500
              text-black
              hover:bg-green-600
              transition
            "
          >
            Save
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="
            px-3 py-1
            text-sm
            rounded-md
            bg-red-500
            text-white
            hover:bg-red-600
            transition
          "
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
