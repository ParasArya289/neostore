import { useState } from "react";
import { Login } from "./Login/Login";
import { Signin } from "./Signup/Singup";

export const Auth = () => {
  const [loginUi, setLoginUi] = useState(false);
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
