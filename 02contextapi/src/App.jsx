// App.jsx
import { useAuth } from "./context/AuthContext.js";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const { user } = useAuth();

  return (
    <>
     {(user && user.username) ? <Profile /> : <Login />}

    </>
  );
}

export default App;
