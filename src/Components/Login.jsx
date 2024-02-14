import React, { useContext, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../App";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { user, setLogin,setUser} = useContext(UserLogin);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setErrorMessage] = useState("");

  const handileclick = (e) => {
    e.preventDefault();
    const newNameRef = nameRef.current.value;
    const newPasswordRef = passwordRef.current.value;
    if (!newNameRef || !newPasswordRef) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const findName = user.find((users) => users.name === newNameRef);
    const findPassword = user.find(
      (users) => users.password === newPasswordRef
    );
    if (!findName) {
      setErrorMessage("Please correct Username");
      return;
    }
    if (!findPassword) { 
      setErrorMessage("please correct Password");
      return;
    }

    if (findName && findPassword) {
      let users = user.find((item)=>item.name==newNameRef && item.password ==newPasswordRef)
      console.log(users);
      if (users){

        setLogin(users)
        navigate("/");
        toast.success("Login Success!");
        console.log(user);
      }
    }
  };

  return (
    <div style={{ alignItems: "center" }} className="p-4  mt-4 "  >
      <Container 
        className="border p-4  mt-5 "
        style={{
          width: "500px",
          alignItems: "center",
          borderRadius: "20px",
          background: "rgb(230, 230, 219)",
          backgroundImage: "url('data:image/jpeg;base64,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')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
        
      >
        <h1 style={{ textAlign: "center" }}>Login </h1>
        <div style={{ textAlign: "center" }}>
          <Form
            className="border p-4 m-4 bg-white"
            style={{ borderRadius: "20px" }}
          >
            <input
              ref={nameRef}
              type="text"
              placeholder="User Name.."
              style={{
                width: "300px",
                height: "40px",
                borderRadius: "10px",
                border: "1.2px solid",
              }}
            />
            <br />
            <br />
            <div className="mb-3">
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                style={{
                  width: "300px",
                  height: "40px",
                  borderRadius: "10px",
                  border: "1.2px solid",
                }}
              />
            </div>

            {error && (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            )}
            <div className="d-flex">
              <div className="col-8 " style={{ textAlign: "left" }}>
                <Button variant="outline-dark" onClick={handileclick}>
                  Login
                </Button>
              </div>
              <div className="col-4">
                <p>
                  <Link to="/signup">Register Here</Link>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;