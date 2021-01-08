import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import data from "../../../@utils/data";

function Details({ history }) {
  const [status, setStatus] = useState();
  return (
    <div className="p-md-5 p-3 mb-5">
      <ion-icon
        name="arrow-back-outline"
        style={{ fontSize: 60, cursor: "pointer" }}
        onClick={() => history.goBack()}
      ></ion-icon>
      <Container>
        <Row className="mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Status</h4>
          </Col>
          <Col xs={8} sm={3}>
            <Form.Control
              value={status}
              name="country"
              onChange={(e) => setStatus(e.target.value)}
              as="select"
              size="lg"
              className="shadow-lg rounded"
              custom
            >
              {data.StatusList.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Last View</h4>
          </Col>
          <Col xs={8} sm={3}>
            <h4 className="mt-3 text-muted">Wed, 10/10/2020</h4>
          </Col>
        </Row>
        <h1 className="text-center my-5">Personal information</h1>
        <Row className="mt-3">
          <Col xs={12} sm={6}>
            <Row>
              <Col xs={4} sm={6}>
                <h4 className="mt-3">Name</h4>
              </Col>
              <Col xs={8} sm={6}>
                <h4 className="mt-3 text-muted">John Doe</h4>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={6}>
                <h4 className="mt-3">DOB</h4>
              </Col>
              <Col xs={8} sm={6}>
                <h4 className="mt-3 text-muted">01/05/1990</h4>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={6}>
                <h4 className="mt-3">Gender</h4>
              </Col>
              <Col xs={8} sm={6}>
                <h4 className="mt-3 text-muted">Male</h4>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <h4 className="mt-3">Last View</h4>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="text-center my-5">Education & Interests</h1>
        <div className="rounded shadow-lg mx-md-5 mx-3 p-3">
          {[1, 1, 1].map((e, i) => (
            <p className="text-muted lead text-center" key={i}>
              MSC - University of California - 2016
            </p>
          ))}
        </div>

        <Row className="mt-5">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Area of Interest</h4>
          </Col>
          <Col xs={8} sm={9}>
            <h4 className="mt-3 text-muted">
              <div className="d-flex flex-wrap">
                {[1, 1, 1, 1, 1].map((a, i) => (
                  <span
                    key={i}
                    className="mr-3 mb-3 px-3 p-1 text-white shadow bg-two rounded"
                  >
                    Admin
                  </span>
                ))}
              </div>
            </h4>
          </Col>
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Functional Domain</h4>
          </Col>
          <Col xs={8} sm={9}>
            <h4 className="mt-3 text-muted">
              <div className="d-flex flex-wrap">
                {[1, 1, 1, 1, 1].map((a, i) => (
                  <span
                    key={i}
                    className="mr-3 mb-3 px-3 p-1 text-white shadow bg-one rounded"
                  >
                    Admin
                  </span>
                ))}
              </div>
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default withRouter(Details);
