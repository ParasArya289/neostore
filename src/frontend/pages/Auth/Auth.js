import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { Login } from "./Login/Login";
import { Signin } from "./Signup/Singup";

import "./Auth.css";

export const Auth = () => {
  const [loginUi, setLoginUi] = useState(true);
  const { token } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(token ? "/products" : "/auth");
  }, [token]);
  return (
    <div className="auth-container">
      <header className="auth-header">
        <button
          style={{ background: !loginUi ? "#d1d5db" : "#9ca3af" }}
          onClick={() => setLoginUi(!loginUi)}
        >
          LogIn
        </button>
        <button
          style={{ background: loginUi ? "#d1d5db" : "#9ca3af" }}
          onClick={() => setLoginUi(!loginUi)}
        >
          SignUp
        </button>
      </header>
      {loginUi ? <Login /> : <Signin />}
    </div>
  );
};
