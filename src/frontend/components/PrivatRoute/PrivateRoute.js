import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext, useAuth } from "../../contexts/authContext";

export const PrivateRoute = ({ children }) => {
  const { token } = useContext(authContext);
  const location = useLocation();
//   console.log(location);

  return token ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location?.pathname }} replace />
  );
};
