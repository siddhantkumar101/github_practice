import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-xl shadow-lg p-6">
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          📝 Todo App
        </h1>

        {/* Input */}
        <TodoInput />

        {/* List */}
        <TodoList />

      </div>
    </div>
  );
};

export default TodoApp;
