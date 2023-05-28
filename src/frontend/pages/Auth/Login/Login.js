import { useContext, useRef } from "react";
import { authContext } from "../../../contexts/authContext";

export const Login = () => {
 const {token,loginHandler,user} = useContext(authContext)
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
    loginHandler(obj)
    alert(user.firstName+token)
    
  };
  return (
    <>
      <h1>Login</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" placeholder="Email" />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
        />
        <button type="submit">Create Account</button>
      </form>
    </>
  );
};
