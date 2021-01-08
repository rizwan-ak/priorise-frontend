import React from "react";
import Pics from "../../@assets";
import { Card, Button, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

function Signup({ history, userType }) {
  console.log(userType);
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
            <Link to="/login">
              <Button
                size="lg"
                variant="light"
                className="p-3 px-md-5 px-4 loginButton"
              >
                Sign in
              </Button>
            </Link>
            <Button
              size="lg"
              variant="one"
              className="p-3 px-md-5 px-4 signupButton"
            >
              Sign up
            </Button>
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
            <Form.Control
              type="password"
              placeholder="Confirm password"
              size="lg"
              className="mt-3"
            />
            <Link to="/profile">
              <Button
                block
                size="lg"
                variant="two"
                className="font-weight-bold mt-5"

                // style={{ borderRadius: "0 20px 20px 0" }}
              >
                Sign up
              </Button>
            </Link>
            <p className="text-white text-center mt-3">
              Already have an account?
              <Link to="/login" className="font-weight-bold">
                {" "}
                Log In
              </Link>
            </p>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}

export default connect((state) => state)(Signup);
