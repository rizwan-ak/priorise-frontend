import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import Pics from "../../@assets";

export default function PaidModal({ show, set }) {
  return (
    <Modal centered size="lg" show={show} onHide={() => set(false)}>
      <Modal.Header
        closeButton
        className="d-flex justify-content-center align-items-center "
      >
        <Modal.Title className="font-weight-bold">Congratulations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center">
          <ion-icon
            name="checkmark-sharp"
            style={{ fontSize: 200, color: "lime", align: "center" }}
          />
          <h4 className="my-3">
            You have successfully posted for this Internship.
          </h4>
          <h3 className="font-weight-bold my-5">Invoice</h3>
          <object
            aria-label="foo"
            data={Pics.pdf}
            width="300"
            height="200"
          ></object>
        </Container>
        <div className="mx-3 mt-5 d-flex flex-row justify-content-between">
          <Button size="lg" variant="one" className="float-right px-5">
            <a href={Pics.pdf} download>
              Download
            </a>
          </Button>
          <Button size="lg" variant="two" className="float-right px-5">
            <a href={Pics.pdf} target="_blank" rel="noopener noreferrer">
              VIEW
            </a>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
