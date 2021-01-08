import React, { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";

import Pics from "../../@assets/index";

import CongratulationsModal from "../congratulationsModal";

export default function ApplyModal({ show, set }) {
  const [showModal, setShow] = useState(false);
  const [cv, setCv] = useState();
  const [questions, setQuestions] = useState([]);
  const handleSubmit = () => {
    setShow(true);
    set(false);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    const arr = [...questions];
    arr[name] = value;
    setQuestions(arr);
  };

  return (
    <>
      <Modal centered size="lg" show={show} onHide={() => set(false)}>
        <Modal.Header
          closeButton
          className="d-flex justify-content-center align-items-center"
        >
          <img src={Pics.logo} alt="logo" width={75} height={75} />
          <Modal.Title className="ml-3 text-muted">Priorise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <h4 className="font-weight-bold">Questionnaire</h4>

            <div className="mt-3">
              {[1, 1].map((q, i) => (
                <div key={i}>
                  <h5 className="mt-4">
                    <span className="font-weight-bold">q {i + 1}.</span>
                    Do you have any prior experience?
                  </h5>
                  <Form.Control
                    value={questions[i]}
                    name={i}
                    onChange={onChange}
                    size="lg"
                    placeholder="Your Answer"
                    className="shadow-lg rounded"
                  />
                </div>
              ))}
            </div>
            <div className="d-flex align-items-center">
              <object
                aria-label="foo"
                className="m-3"
                data={cv && URL.createObjectURL(cv)}
                width="150"
                height="100"
              ></object>
              <h4>30/10/2020</h4>
            </div>

            <div className="d-flex justify-content-between mt-3">
              <label className="btn btn-one px-md-3 px-2" htmlFor="upload-pdf">
                New CV
              </label>
              <Form.File
                accept="application/pdf"
                id="upload-pdf"
                onChange={(e) => setCv(e.target.files[0])}
                className="d-none"
              />
              <label
                variant="two"
                className="px-md-5 px-3 btn btn-two"
                onClick={handleSubmit}
              >
                Apply
              </label>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
      <CongratulationsModal show={showModal} set={setShow} />
    </>
  );
}
