import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import fitMan from "../../Assets/images/fitman.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  if (!email || !password) {
    setError("Email and password are required.");
    return;
  }

  try {
    const response = await axios.get(`http://localhost:5000/users/login/${email}`, {
  params: { password },
});
 

  

    const user = response.data;
    if(response.data === null) {
      setError("User not found.");
    }
    if (response.data.password !== password) {
      setError("Incorrect email or password.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  } catch (err) {
    console.error(err);
    if (err.response && err.response.data && err.response.data.message) {
      setError(err.response.data.message);
    } else {
      setError("Login failed. Please try again.");
    }
  }
};


  return (
    <Container className="main-login d-flex justify-content-center align-items-center w-100 min-vh-100">
      <div
        className="login p-4"
        style={{
          maxWidth: "500px",
          backgroundColor: "rgba(96, 0, 0, 0.85)",
          color: "white",
        }}
      >
        <h2 className="text-center mb-4">Login FitMaker</h2>
        <Form onSubmit={handleLogin} className="main-form">
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                backgroundColor: "#FFF",
                color: "black",
                borderColor: "#ccc",
              }}
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: "#FFF",
                color: "black",
                borderColor: "#ccc",
              }}
            />
          </Form.Group>

          {error && (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          )}

          <Button variant="danger" onClick={handleLogin} className="w-100 mt-2">
            Login
          </Button>

          <div className="text-center mt-3">
            <span style={{ color: "#ccc" }}>
              Don't have an account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </span>
          </div>
        </Form>
      </div>

      <div className="hero-image-container">
        <img src={fitMan} alt="Fit Man" />
      </div>
    </Container>
  );
};

export default Login;
