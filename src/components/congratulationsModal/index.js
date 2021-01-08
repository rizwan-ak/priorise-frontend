import React from "react";
import { Container, Modal } from "react-bootstrap";

export default function CongratulationsModal({ show, set }) {
  return (
    <Modal centered size="lg" show={show} onHide={() => set(false)}>
      <Modal.Header
        closeButton
        className="d-flex justify-content-center align-items-center "
      >
        <Modal.Title className="font-weight-bold">Congratulations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center my-5">
          <ion-icon
            name="checkmark-sharp"
            style={{ fontSize: 200, color: "lime", align: "center" }}
          />
          <h4 className="my-5">Your application has been successfully sent.</h4>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
