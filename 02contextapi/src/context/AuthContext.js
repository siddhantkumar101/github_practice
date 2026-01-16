import { createContext,useContext } from "react";

const AuthContext=createContext(null);
export const useAuth=()=>useContext(AuthContext);
export default AuthContext;//this file only consisit of logic