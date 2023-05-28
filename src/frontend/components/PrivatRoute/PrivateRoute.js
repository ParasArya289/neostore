import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../contexts/authContext"

export const PrivateRoute = ({children})=>{
    const {token} = useContext(authContext);
    const location = useLocation();
    return token? children:<Navigate to="/auth" state={{from:location?.pathname}} replace />
}