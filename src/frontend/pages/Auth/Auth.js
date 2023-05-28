import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { Login } from "./Login/Login";
import { Signin } from "./Signup/Singup";

export const Auth = () => {
  const [loginUi, setLoginUi] = useState(false);
  const {token} = useContext(authContext);
  const navigate = useNavigate();
  useEffect(()=>{
    navigate(token?"/products":"/auth")
  },[token])
  return (
    <div>
      <header>
        <button onClick={() => setLoginUi(!loginUi)}>Login</button>
        <button onClick={() => setLoginUi(!loginUi)}>Signin</button>
      </header>
      {loginUi ? <Login /> : <Signin />}
    </div>
  );
};
