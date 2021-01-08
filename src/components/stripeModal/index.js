import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

import PaidModal from "../paidModal";

import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

export default function StripeModal({ show, set }) {
  const [modal, setModal] = useState(false);

  const handleSubmit = () => {
    setModal(true);
    set(false);
  };

  return (
    <>
      <Modal centered size="lg" show={show} onHide={() => set(false)}>
        <Modal.Header
          closeButton
          className="d-flex justify-content-center align-items-center"
        >
          <Modal.Title className="font-weight-bold">Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="text-center my-5">
            <p className="lead font-weight-bold">
              Total : <span className="text-muted">$99</span>
            </p>
            <Elements stripe={stripePromise}>
              <CardElement />
            </Elements>
          </Container>
          <div className="mx-3 d-flex flex-row justify-content-between">
            <Button
              size="lg"
              variant="one"
              className="float-right px-5"
              onClick={() => set(false)}
            >
              Cancel
            </Button>
            <Button
              size="lg"
              variant="two"
              className="float-right px-5"
              onClick={handleSubmit}
            >
              Pay
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <PaidModal set={setModal} show={modal} />
    </>
  );
}
