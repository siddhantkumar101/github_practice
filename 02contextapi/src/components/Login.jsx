import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login, logout } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Please login to your account
        </p>

        <div className="mt-6 space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?
          <span className="text-indigo-500 cursor-pointer ml-1">
            Sign up
          </span>
        </p>

        <button
          onClick={logout}
          className="mt-4 w-full py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Login;
