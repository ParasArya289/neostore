import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { Login } from "./Login/Login";
import { Signin } from "./Signup/Singup";
import { motion } from "framer-motion";
import "./Auth.css";
import useMeasure from "react-use-measure";

export const Auth = () => {
  const [loginUi, setLoginUi] = useState(true);
  const { token } = useContext(authContext);
  const [ref, { height }] = useMeasure();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location?.state?.from)
  useEffect(() => {
    if (token) {
      const navi = (location?.state?.from === "/user" && "/products")||(location?.state?.from ?? "/products" )
      navigate(navi);
    }
  }, [token]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, height: height + 70 }}
      transition={{ duration: 0.4, delay: 0 }}
      className="auth-container"
    >
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
      <div ref={ref}>{loginUi ? <Login /> : <Signin />}</div>
    </motion.div>
  );
};
