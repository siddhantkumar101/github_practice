import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    setUser({ username, password });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
