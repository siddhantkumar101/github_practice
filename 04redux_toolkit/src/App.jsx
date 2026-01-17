import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-xl shadow-xl p-6">
        
        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          📝 Redux Todo App
        </h1>

        <TodoInput />
        <TodoList />

      </div>
    </div>
  );
}

export default App;
