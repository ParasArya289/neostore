import { createContext,useContext,useState } from "react";
import { toast } from "react-hot-toast";
import { signupHandler } from "../../backend/controllers/AuthController";
import { loginUser, singupUser } from "../../HelperFunctions/authHelpers";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = localStorage.getItem("token");
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorageToken);
  const [user, setUser] = useState(localStorageUser);
  const [authLoading, setAuthLoading] = useState(false);
  const loginHandler = async (userCred) => {
    const notification = toast.loading("Creating your account")
    try {
      setAuthLoading(true);
      const res = await loginUser(userCred);
      const { foundUser, encodedToken } = await res.json();
      toast.success("Your Logged in")
      if(!res.ok){
        if(res.status === 404){
          throw new Error("Your not registered, Signup to continue")
        }else if(res.status === 401){
          throw new Error("Wrong email or password")
        }
      }
      if (res.status === 200) {
        localStorage.setItem("token", encodedToken);
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify(foundUser));
        setUser(foundUser);
      }
    } catch (e) {
      console.error(e.message);
      toast.error(e.message)
    } finally {
      setAuthLoading(false);
      toast.dismiss(notification)
    }
  };

  const singupHandler = async (userDetails) => {
    const notification = toast.loading("Creating Your account")
    try {
      setAuthLoading(true);
      const res = await singupUser(userDetails);
      const { createdUser, encodedToken } = await res.json();
      if(!res.ok){
        if(res.status === 422){
          throw new Error("Account by this Email already exist")
        }
      }
      if (res.status === 201) {
        localStorage.setItem("token", encodedToken);
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify(createdUser));
        setUser(createdUser);
        toast.success("Your Logged in")
      }
    } catch (e) {
      console.error(e.message);
      toast.error(e.message)

    } finally {
      setAuthLoading(false);
      toast.dismiss(notification)
    }
  };

  return (
    <authContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        loginHandler,
        singupHandler,
        authLoading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
