import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";

export default function EducationModal({ show, set, education, setEducation }) {
  const [state, setState] = useState({
    degree: "",
    university: "",
    levelOfEducation: "",
    passingYear: "",
    specialization: "",
    details: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = () => {
    const { passingYear, levelOfEducation, university } = state;
    if (passingYear && levelOfEducation && university) {
      education.push(state);
      setEducation(education);
      set(false);
    } else {
      alert("Please fill all the fields to add education.");
    }
  };

  const {
    degree,
    university,
    levelOfEducation,
    passingYear,
    specialization,
    details,
  } = state;

  return (
    <Modal centered size="lg" show={show} onHide={() => set(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Education</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="d-flex align-items-center mt-3">
            <Col xs={4} className="mt-3">
              <h4>Degree</h4>
            </Col>
            <Col xs={8} className="mt-3">
              <Form.Control
                as="select"
                value={degree}
                name="degree"
                onChange={onChange}
                size="lg"
                className="shadow-lg rounded"
                custom
              >
                <option value="Bachelor of Science">Bachelor of Science</option>
                <option value="Bachelor of Arts">Bachelor of Arts</option>
                <option value="Bachelor of Education">
                  Bachelor of Education
                </option>
                <option value="Bachelor of Music">Bachelor of Music</option>
              </Form.Control>
            </Col>
            <Col xs={4} className="mt-3">
              <h4 className="mt-3">University</h4>
            </Col>
            <Col xs={8} className="mt-3">
              <Form.Control
                value={university}
                name="university"
                onChange={onChange}
                size="lg"
                placeholder="Your University"
                className="shadow-lg rounded"
              />
            </Col>
            <Col xs={4} className="mt-3">
              <h4>Level of Education</h4>
            </Col>
            <Col xs={8} className="mt-3">
              <Form.Control
                as="select"
                value={levelOfEducation}
                name="levelOfEducation"
                onChange={onChange}
                size="lg"
                className="shadow-lg rounded"
                custom
              >
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's degree">Bachelor's degree</option>
                <option value="Master Degree">Master Degree</option>
                <option value="Post greaduate">Post greaduate</option>
                <option value="Certification">Certification</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Col>
            <Col xs={4} className="mt-3">
              <h4>Passing Year</h4>
            </Col>
            <Col xs={8} className="mt-3">
              <Form.Control
                as="select"
                value={passingYear}
                name="passingYear"
                onChange={onChange}
                size="lg"
                className="shadow-lg rounded"
                custom
              >
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
              </Form.Control>
            </Col>
            <Col xs={4} className="mt-3">
              <h4 className="mt-3">Specializations in</h4>
            </Col>
            <Col xs={8} className="mt-3">
              <Form.Control
                value={specialization}
                name="specialization"
                onChange={onChange}
                size="lg"
                placeholder="Your University"
                className="shadow-lg rounded"
              />
            </Col>
            <Col xs={4} className="mt-3">
              <h4 className="mt-3">Details</h4>
            </Col>
            <Col xs={8} className="mt-3">
              <Form.Control
                value={details}
                name="details"
                onChange={onChange}
                size="lg"
                placeholder="Your University"
                className="shadow-lg rounded"
              />
            </Col>
            <Button
              variant="two"
              className="ml-auto m-3 px-5"
              onClick={handleSubmit}
            >
              add
            </Button>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
