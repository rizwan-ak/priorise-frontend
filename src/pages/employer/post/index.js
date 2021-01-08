import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import data from "../../../@utils/data";
import QuestionModal from "../../../components/questionModal";
import StripeModal from "../../../components/stripeModal";

function Post({ history }) {
  const [modal, setModal] = useState(false);
  const [stripeModal, setStripeModal] = useState(false);
  const [state, setState] = useState({
    title: "",
    description: "",
    country: "",
    city: "",
    startDate: "",
    duration: "",
    requiredQualification: "",
    noOfPositions: "",
    questions: [],
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const submitInformation = () => {
    // history.push("/dashboard");
    setStripeModal(true);
  };

  const {
    title,
    description,
    country,
    city,
    startDate,
    duration,
    requiredQualification,
    noOfPositions,
    questions,
  } = state;

  console.log(state);
  return (
    <div className="p-md-5 p-3 mb-5">
      <ion-icon
        name="arrow-back-outline"
        style={{ fontSize: 60, cursor: "pointer" }}
        onClick={() => history.goBack()}
      ></ion-icon>
      <Container>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Job/ Internship title</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Form.Control
              value={title}
              name="title"
              onChange={onChange}
              size="lg"
              placeholder="Company name"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Job/ Internship Description</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              name="description"
              onChange={onChange}
              size="lg"
              placeholder="company's description"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Country</h4>
          </Col>
          <Col xs={8} sm={3}>
            <Form.Control
              value={country}
              name="country"
              onChange={onChange}
              as="select"
              size="lg"
              className="shadow-lg rounded"
              custom
            >
              {data.CountryList.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col xs={4} sm={3}>
            <h4 className="mt-3">City</h4>
          </Col>
          <Col xs={8} sm={3}>
            <Form.Control
              value={city}
              name="city"
              onChange={onChange}
              as="select"
              size="lg"
              className="shadow-lg rounded"
              custom
            >
              {data.CityList.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Start Date</h4>
          </Col>
          <Col xs={8} sm={3}>
            <Form.Control
              type="date"
              value={startDate}
              name="startDate"
              onChange={onChange}
              size="lg"
              className="shadow-lg rounded"
            />
          </Col>
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Duration</h4>
          </Col>
          <Col xs={8} sm={3}>
            <Form.Control
              value={duration}
              name="duration"
              onChange={onChange}
              as="select"
              size="lg"
              className="shadow-lg rounded"
              custom
            >
              {data.DurationList.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Required Qualification</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Form.Control
              value={requiredQualification}
              name="requiredQualification"
              onChange={onChange}
              size="lg"
              placeholder="Company name"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">No of Positions</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Form.Control
              type="number"
              value={noOfPositions}
              name="noOfPositions"
              onChange={onChange}
              size="lg"
              placeholder="Company name"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="text-center my-5">Questions</h1>
        {questions.map((q, i) => (
          <h5 key={i} className="font-weight-bold mt-3">
            {`Q${i + 1}. ${q}`}
          </h5>
        ))}
        <div className="text-center">
          <Button
            variant="two"
            className="rounded-circle shadow pt-2 px-3 mt-4"
            onClick={() => setModal(true)}
          >
            <span className="h1">+</span>
          </Button>
        </div>
      </Container>
      <Container className="text-right mt-5">
        <Button
          variant="two"
          size="lg"
          className="rounded shadow-lg px-5"
          onClick={submitInformation}
        >
          Post Internship
        </Button>
      </Container>
      <QuestionModal
        show={modal}
        set={setModal}
        questions={questions}
        setQuestions={(e) => setState({ ...state, questions: e })}
      />
      <StripeModal show={stripeModal} set={setStripeModal} />
    </div>
  );
}
export default withRouter(Post);
