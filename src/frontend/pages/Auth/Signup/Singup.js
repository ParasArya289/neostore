import { useContext, useRef } from "react";
import { authContext } from "../../../contexts/authContext";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

export const Signin = () => {
  const { token, user, singupHandler, authLoading } = useContext(authContext);
  const formRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      obj[key] = value;
    }
    singupHandler(obj);
  };

  const createTestAccount = () => {
    firstNameRef.current.value = "Test";
    lastNameRef.current.value = "Test";
    emailRef.current.value = "test@gmail.com";
    passwordRef.current.value = "test";
  };
  return (
    <>
      <h1 className="auth-heading">SignUp</h1>
      <form className="auth-form" ref={formRef} onSubmit={handleSubmit}>
        <input
          ref={firstNameRef}
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <input
          ref={lastNameRef}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input ref={emailRef} type="email" name="email" placeholder="Email" />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
        />
        <Dropdown className="auth-dropdown" as={ButtonGroup}>
          <Button
            className="auth-btn"
            type="submit"
            disabled={authLoading}
            variant="secondary"
          >
            Create Account
          </Button>

          <Dropdown.Toggle
            disabled={authLoading}
            split
            variant="secondary"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item onClick={createTestAccount}>
              Fill With Test Data
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
    </>
  );
};
