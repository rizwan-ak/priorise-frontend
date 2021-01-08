import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Pics from "../../../@assets";
import { Link, withRouter } from "react-router-dom";

function Dashboard({ history }) {
  return (
    <div className="p-md-5 py-5 px-3">
      <Row>
        <Col
          xs={2}
          className="shadow-lg p-2 d-none d-lg-flex text-center align-items-center"
          style={{ maxHeight: "80vh", borderRadius: 20 }}
        >
          <p className="font-weight-bold">PlaceHolder for advanced filters</p>
        </Col>
        <Col xs={12} lg={8} className="px-md-5">
          <Row className="mx-3">
            <Col>
              <Button
                variant="two"
                block
                size="lg"
                onClick={() => history.push("/post")}
              >
                Add Internship
              </Button>
            </Col>
            <Col>
              <Button
                variant="one"
                block
                size="lg"
                className="mt-sm-0 mt-3"
                // onClick={() => history.push("/profile")}
              >
                Contact Support
              </Button>
            </Col>
          </Row>
          {[
            { status: "active" },
            { status: "complted" },
            { status: "active" },
            { status: "complted" },
            { status: "complted" },
          ].map((j, i) => (
            <div
              key={i}
              className="mt-5 mx-3 shadow-lg p-4"
              style={{ borderRadius: 20 }}
            >
              <div className="d-flex justify-content-between">
                <span className="lead">Designer</span>
                <span className="text-one font-weight-bold">
                  <Link to="/applications">
                    {j.status === "active" && "Applications"}
                  </Link>
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted">3 Months from 10/10/2020</span>
                <span className="text-two font-weight-bold">{j.status}</span>
              </div>
            </div>
          ))}
        </Col>
        <Col
          xs={{ span: 12, order: "first" }}
          lg={{ span: 2, order: "last" }}
          className="text-center d-none d-lg-block"
          style={{ maxHeight: "80vh" }}
        >
          <img alt="logo" src={Pics.logo} height={150} />
          <h4 className="text-muted mt-5">Priorise INC</h4>
          <p className="lead text-muted mt-3">Dublin, Ireland</p>
          <Button
            size="lg"
            variant="two"
            className="px-4 mt-5"
            onClick={() => history.push("/profile")}
          >
            Update
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(Dashboard);
