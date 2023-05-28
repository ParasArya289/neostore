import { useContext } from "react";
import { authContext } from "../../contexts/authContext";

export const UserProfile = () => {
  const { user, token, setToken, setUser } = useContext(authContext);
  const logoutHandler = () => {
    setToken("");
    setUser("");
    localStorage.clear()
  }
  return (
    <>
      <h1>Welcome, {user.firstName}</h1>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};
