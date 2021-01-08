import React from "react";
import Pics from "../../@assets";
import { Card, Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ForgotPasswordModal from "../../components/forgotPasswordModal";
import { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);
  return (
    <Card
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: `#ffffff url("${Pics.bg}") no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          minWidth: "30vw",
          borderRadius: 20,
        }}
      >
        <Card.Body className="text-center">
          <Card.Img src={Pics.logo} className="h-25 w-25" />
          <div className="mt-5">
            <Button
              size="lg"
              variant="one"
              className="p-3 px-md-5 px-3 loginButton"
            >
              Sign in
            </Button>
            <Link to="/signup">
              <Button
                size="lg"
                variant="light"
                className="p-3 px-md-5 px-3 signupButton"
              >
                Sign up
              </Button>
            </Link>
          </div>
          <div className="mx-5 mt-5">
            <Form.Control
              type="email"
              placeholder="Enter email"
              size="lg"
              className="mt-3"
            />
            <Form.Control
              type="password"
              placeholder="Enter password"
              size="lg"
              className="mt-3"
            />
            <p
              className="text-white text-right mt-2"
              style={{ cursor: "pointer" }}
              onClick={() => setShow(true)}
            >
              Forgot Password?
            </p>
            <Link to="/dashboard">
              <Button
                block
                size="lg"
                variant="two"
                className="font-weight-bold"
                // style={{ borderRadius: "0 20px 20px 0" }}
              >
                Sign in
              </Button>
            </Link>
            <p className="text-white text-center mt-3">
              Don't have an account?
              <Link to="/signup" className="font-weight-bold">
                Sign up
              </Link>
            </p>
          </div>
        </Card.Body>
      </div>
      <ForgotPasswordModal show={show} set={setShow} />
    </Card>
  );
}

export default connect((state) => state)(Login);
