import { useRef } from "react";

export const Signin = () => {
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
    console.log(obj);
  };
  return (
    <>
      <h1>Signin</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
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
        <button type="submit">Create Account</button>
      </form>
    </>
  );
};
