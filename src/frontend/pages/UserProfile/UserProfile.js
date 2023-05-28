import { useContext } from "react";
import { authContext } from "../../contexts/authContext";

export const UserProfile = () => {
  const { user, token, setToken, setUser } = useContext(authContext);
  return (
    <>
      <h1>Welcome, {user.firstName}</h1>
    </>
  );
};
