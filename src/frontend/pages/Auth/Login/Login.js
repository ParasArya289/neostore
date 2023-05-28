import "./Login.css";

import { useContext, useRef } from "react";
import { authContext } from "../../../contexts/authContext";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import{motion} from 'framer-motion';

export const Login = () => {
  const { token, loginHandler, user, authLoading } = useContext(authContext);
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      obj[key] = value;
    }
    loginHandler(obj);
  };
  const createTestAccount = () => {
    emailRef.current.value = "parasarya289@gmail.com";
    passwordRef.current.value = "parasarya";
  };
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.1}}>
      <h1 className="auth-heading">LogIn</h1>
      <form ref={formRef} className="auth-form" onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" placeholder="Email" />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
        />
        <Dropdown className="auth-dropdown" as={ButtonGroup}>
          <Button className="auth-btn" type="submit" disabled={authLoading} variant="secondary">
            Login
          </Button>

          <Dropdown.Toggle
            disabled={authLoading}
            split
            variant="secondary"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item onClick={createTestAccount}>
              Test login
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
    </motion.div>
  );
};
