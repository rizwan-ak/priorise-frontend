import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Pics from "../../../@assets";
import ApplyModal from "../../../components/applyModal";

function Details({ history }) {
  const [show, setShow] = useState(false);
  return (
    <div className="p-md-5 p-3 mb-5">
      <ion-icon
        name="arrow-back-outline"
        style={{ fontSize: 60, cursor: "pointer" }}
        onClick={() => history.goBack()}
      ></ion-icon>
      <h1 className="text-center">Internship/ Job Details</h1>
      <Row>
        <Col xs={12} lg={10} className="px-md-5">
          <h4 className="font-weight-bold">Area of Interest</h4>
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
          <h4 className="font-weight-bold mt-5">Functional Domain</h4>
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
          <h4 className="font-weight-bold mt-5">Location</h4>
          <h5>Remote</h5>
          <h4 className="font-weight-bold mt-5">Minimum Qualification</h4>
          <h5>Masters</h5>
          <h4 className="font-weight-bold mt-5">Details</h4>
          <h5 className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h5>
        </Col>
        <Col
          xs={{ span: 12, order: "first" }}
          lg={{ span: 2, order: "last" }}
          className="text-center d-none d-lg-block mt-lg-n5"
        >
          <img alt="logo" src={Pics.logo} height={125} />
          <h4 className="text-muted mt-5">Priorise</h4>
          <p className="lead text-muted mt-3">Dublin</p>
        </Col>
      </Row>
      <Button
        className="float-right px-5 mr-md-5"
        variant="two"
        size="lg"
        onClick={() => setShow(true)}
      >
        Apply
      </Button>
      <ApplyModal show={show} set={setShow} />
    </div>
  );
}
export default withRouter(Details);
