import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

export default function QuestionModal({ show, set, questions, setQuestions }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    questions.push(question);
    setQuestions(questions);
    setQuestion("");
    set(false);
  };
  return (
    <Modal centered size="lg" show={show} onHide={() => set(false)}>
      <Modal.Header
        closeButton
        className="d-flex justify-content-center align-items-center "
      >
        <Modal.Title className="font-weight-bold">Add Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center my-5">
          <Form.Control
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            size="lg"
            placeholder="Company name"
            className="shadow-lg rounded"
          />
        </Container>
        <div className="mx-3">
          <Button
            size="lg"
            variant="two"
            className="float-right px-5"
            onClick={handleSubmit}
          >
            add
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
