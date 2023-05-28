import { useReducedMotion } from "framer-motion";
import { createContext, useState } from "react";
import { loginUser } from "../../HelperFunctions/authHelpers";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = localStorage.getItem("token");
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorageToken);
  const [user, setUser] = useState(localStorageUser);

  const loginHandler = async(userCred) => {
    try {
      const res = await loginUser(userCred);
      const {foundUser,encodedToken} = await res.json()
      console.log(foundUser,encodedToken,res.ok)
      if (res.status === 200) {
        localStorage.setItem("token",encodedToken);
        setToken(encodedToken);
        localStorage.setItem("user",JSON.stringify(foundUser));
        setUser(foundUser);
        console.log(user)
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return <authContext.Provider value={{token,setToken,user,setUser,loginHandler}}>{children}</authContext.Provider>;
};
