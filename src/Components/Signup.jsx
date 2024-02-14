
import React, { useContext, useRef, useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../App";

const Signup = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserLogin);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const submitClick = (e) => {
    e.preventDefault();
    const setName = nameRef.current.value;
    const setEmail = emailRef.current.value;
    const setPassword = passwordRef.current.value;

    if (!setName || !setEmail || !setPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const isEmailValid = setEmail.includes("@") && setEmail.includes(".");
    if (!isEmailValid) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (setPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    if (user.find((sameuser) => sameuser.name === setName)) {
      setErrorMessage("Username already exists. Please choose a different one.");
      return;
    }

    setErrorMessage("");

    const newUser = { name: setName, email: setEmail, password: setPassword,cart:[] };
    setUser([...user, newUser]);
    console.log(user);
    // Navigate to login page
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-4 mt-4">
    <Container
      className="border p-4 mt-5"
      style={{
        maxWidth: "500px",
        borderRadius: "20px",
        background: "rgb(230, 230, 219)",
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqhqTfpxbw2xZOO2D__y3GWd-3olseNviAQ&usqp=CAU')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ textAlign: "center", color: 'white' }}>Sign up</h1>
      <Form
        className="border p-4 m-4 bg-white"
        style={{ borderRadius: "20px", textAlign: "center" }}
      >
        <input
          type="text"
          name="text"
          placeholder="User Name"
          required
          ref={nameRef}
          className="form-control mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          ref={emailRef}
          required
          className="form-control mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          ref={passwordRef}
          className="form-control mb-3"
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
  
        <Button variant="outline-dark" onClick={submitClick}>
          Submit
        </Button>
      </Form>
    </Container>
  </div>
  
  );
};

export default Signup;
