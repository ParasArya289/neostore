import { createContext, useState } from "react";
import { loginUser, singupUser } from "../../HelperFunctions/authHelpers";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const localStorageToken = localStorage.getItem("token");
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [token, setToken] = useState(localStorageToken);
    const [user, setUser] = useState(localStorageUser);
    const [authLoading,setAuthLoading] = useState(false);
    const loginHandler = async(userCred) => {
    try {
        setAuthLoading(true)
      const res = await loginUser(userCred);
      const {foundUser,encodedToken} = await res.json()
      if (res.status === 200) {
        localStorage.setItem("token",encodedToken);
        setToken(encodedToken);
        localStorage.setItem("user",JSON.stringify(foundUser));
        setUser(foundUser);
      }
    } catch (e) {
      console.error(e.message);
    }finally{
        setAuthLoading(false)
    }
  };

  const singupHandler = async(userDetails)=>{
    try {
        setAuthLoading(true);
        const res = await singupUser(userDetails);
        const {createdUser,encodedToken} = await res.json()
        if (res.status === 201) {
          localStorage.setItem("token",encodedToken);
          setToken(encodedToken);
          localStorage.setItem("user",JSON.stringify(createdUser));
          setUser(createdUser);
        }
      } catch (e) {
        console.error(e.message);
      }finally{
        setAuthLoading(false)
    }
  }

  return <authContext.Provider value={{token,setToken,user,setUser,loginHandler,singupHandler,authLoading}}>{children}</authContext.Provider>;
};
