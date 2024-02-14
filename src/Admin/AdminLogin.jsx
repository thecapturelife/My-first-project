import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const navigate = useNavigate();
  const adminName = useRef();
  const adminPassword = useRef();
  const [error, setErrorMessage] = useState("");

  const handleAdmin = () => {
    const newAdminName = adminName.current.value;
    const newAdminPassword = adminPassword.current.value;

    if (!newAdminName || !newAdminPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (newAdminName !== "admin") {
      setErrorMessage("Please enter correct Username");
      return;
    }
    if (newAdminPassword !== "admin123") {
      setErrorMessage("Please enter correct Password");
      return;
    }

    const isAdmin = newAdminName === "admin" && newAdminPassword === "admin123";

    if (isAdmin) {
      toast.success("Admin Login success");
      navigate("/adminmain");
    } else {
      toast.error("Please enter a valid username or password");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
      <Container
        className="border p-4 mt-5"
        style={{
          width: "90%",
          borderRadius: "20px",
          background: "linear-gradient(45deg, #fc7b03, #ffc107)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>Admin Login </h1>
        <Form
          className="border p-4 m-4 bg-white"
          style={{ borderRadius: "20px", textAlign: "center" }}
        >
          <input
            ref={adminName}
            type="text"
            placeholder="User Name.."
            style={{
              width: "80%",
              height: "40px",
              borderRadius: "10px",
              border: "1.2px solid",
              marginBottom: "1rem",
              padding: "0.5rem",
            }}
          />
          <input
            ref={adminPassword}
            type="password"
            placeholder="Password"
            style={{
              width: "80%",
              height: "40px",
              borderRadius: "10px",
              border: "1.2px solid",
              marginBottom: "1rem",
              padding: "0.5rem",
            }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div style={{ textAlign: "center" }}>
            <Button onClick={handleAdmin} variant="outline-dark">
              Login
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AdminLogin;
