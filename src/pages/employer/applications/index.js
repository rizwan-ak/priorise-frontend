import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

function Applications({ history }) {
  return (
    <div className="p-md-5 p-3 mb-5">
      <ion-icon
        name="arrow-back-outline"
        style={{ fontSize: 60, cursor: "pointer" }}
        onClick={() => history.goBack()}
      ></ion-icon>
      <h1 className="text-center">Applications</h1>
      <Row>
        <Col
          xs={2}
          className="shadow-lg p-2 d-none d-lg-flex text-center align-items-center"
          style={{ maxHeight: "60vh", borderRadius: 20 }}
        >
          <p className="font-weight-bold">PlaceHolder for advanced filters</p>
        </Col>
        <Col xs={12} lg={10} className="px-md-5">
          {[
            { status: "rejected", date: "10/10/2020" },
            { status: "selected", date: "not seen" },
            { status: "under consideration", date: "10/10/2020" },
            { status: "selected", date: "not seen" },
          ].map((j, i) => (
            <Link key={i} to="/details">
              <div
                className="mt-5 mx-3 shadow-lg p-4 d-flex align-items-center"
                style={{ borderRadius: 20 }}
              >
                <div
                  className="bg-two rounded-circle mx-md-4 d-none d-md-flex justify-content-center align-items-center text-white h1 font-weight-bold"
                  style={{
                    height: 100,
                    width: 100,
                  }}
                >
                  {"John Doe"
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <h4>John Doe</h4>
                    <span className="text-two font-weight-bold">
                      {j.status}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">University of California</span>
                    <span className="text-one font-weight-bold">{j.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(Applications);
