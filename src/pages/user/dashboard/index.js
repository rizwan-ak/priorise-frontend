import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Pics from "../../../@assets";
import { withRouter } from "react-router-dom";
import ApplyModal from "../../../components/applyModal";

function Dashboard({ history }) {
  const [show, setShow] = useState(false);
  const [state, setState] = React.useState({
    city: "",
    areaOfInterest: "",
    functionalDomain: "",
    search: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const { search, areaOfInterest, functionalDomain, city } = state;
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
          <Row>
            <Col>
              <Form.Control
                value={search}
                name="search"
                onChange={onChange}
                size="lg"
                placeholder="Search here..."
                className="shadow-lg rounded"
              />
            </Col>
            <Col>
              <Form.Control
                as="select"
                value={city}
                name="city"
                onChange={onChange}
                size="lg"
                className="shadow-lg rounded"
                custom
              >
                <option value="all">City(All)</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Form.Control
                as="select"
                value={areaOfInterest}
                name="areaOfInterest"
                onChange={onChange}
                size="lg"
                className="shadow-lg rounded"
                custom
              >
                <option value="all">Area of interest(All)</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control
                as="select"
                value={functionalDomain}
                name="functionalDomain"
                onChange={onChange}
                size="lg"
                className="shadow-lg rounded"
                custom
              >
                <option value="all">Functional Domain(All)</option>
              </Form.Control>
            </Col>
          </Row>
          {[1, 1].map((j, i) => (
            <Row
              key={i}
              className="mt-5 mx-3 shadow-lg p-4"
              style={{ borderRadius: 20 }}
            >
              <Col xs={12} md={4} className="text-center text-md-left">
                <img alt="logo" src={Pics.logo} width={100} height={100} />
              </Col>
              <Col xs={12} md={4} className="text-center text-muted">
                <h4 className="mt-3">Priorise INC</h4>
                <h5 className="mt-3">Dublin, Cork</h5>
                <h5 className="mt-3">Sales - Education - Farming</h5>
              </Col>
              <Col xs={12} md={4} className="text-justify">
                <p>
                  {"A short desdcription about the internship will be displayed here. A short desdcription about the internship will be displayed here. A short desdcription about the internship will be displayed here.".substr(
                    0,
                    125
                  )}
                </p>
              </Col>
              <Col xs={12} className="d-flex justify-content-between">
                <Button
                  variant="two"
                  className="px-4"
                  onClick={() => setShow(true)}
                >
                  Apply
                </Button>
                <Button
                  variant="one"
                  className="px-3 align-self-center"
                  onClick={() => history.push("/jobDetails")}
                >
                  Details
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
        <Col
          xs={{ span: 12, order: "first" }}
          lg={{ span: 2, order: "last" }}
          className="text-center d-none d-lg-block"
          style={{ maxHeight: "80vh" }}
        >
          <div
            className="bg-two rounded-circle mx-auto d-flex justify-content-center align-items-center text-white h4 mt-md-5"
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
          <h4 className="text-muted mt-5">John Doe</h4>
          <p className="lead text-muted mt-3">Dublin</p>
          <Button
            size="lg"
            variant="two"
            className="px-4 mt-5"
            onClick={() => history.push("/profile")}
          >
            Update
          </Button>
          <div
            className="mx-3 mt-5 shadow-lg p-2 d-none d-lg-flex justify-content-center align-items-center"
            style={{ borderRadius: 15, height: 300 }}
          >
            <p className="font-weight-bold">PlaceHolder for LMS</p>
          </div>
        </Col>
      </Row>
      <ApplyModal show={show} set={setShow} />
    </div>
  );
}

export default withRouter(Dashboard);
