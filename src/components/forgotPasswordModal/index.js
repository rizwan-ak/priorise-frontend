import React, { useState } from "react";
import { Container, Modal, Button, Form } from "react-bootstrap";

export default function ForgotPasswordModal({ show, set }) {
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    set(false);
    alert(`Password reset email has been sent to ${email}`);
  };

  return (
    <Modal centered size="lg" show={show} onHide={() => set(false)}>
      <Modal.Header
        closeButton
        className="d-flex justify-content-center align-items-center"
      >
        <Modal.Title className="font-weight-bold">Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="mt-5">
          <Form.Control
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            size="lg"
            placeholder="Your Registered email"
            className="shadow-lg rounded"
          />
          <div className="d-flex justify-content-between mt-5">
            <Button variant="one" className="text-center px-md-5 px-3">
              Cancel
            </Button>
            <Button
              variant="two"
              className="text-center px-md-3 px-2"
              onClick={handleSubmit}
            >
              Send Link
            </Button>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
