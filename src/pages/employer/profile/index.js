import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";

import AC from "../../../redux/actions";
import { connect } from "react-redux";
import data from "../../../@utils/data";
import { withRouter } from "react-router-dom";

function Profile({ setUser, user, history }) {
  const [state, setState] = useState({
    name: "",
    address: "",
    interests: [],
    functionalDomains: [],
    country: "",
    city: "",
    personName: "",
    email: "",
    landline: "",
    mobile: "",
    logo: "",
    websiteURL: "",
    description: "",
  });

  useEffect(() => {
    user && setState(user);
  }, [user]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const submitInformation = () => {
    setUser(state);
    history.push("/dashboard");
  };

  const {
    name,
    address,
    interests,
    functionalDomains,
    country,
    city,
    personName,
    email,
    landline,
    mobile,
    logo,
    websiteURL,
    description,
  } = state;

  return (
    <>
      <Container>
        <h1 className="text-center my-5">Company Information</h1>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Company</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Form.Control
              value={name}
              name="name"
              onChange={onChange}
              size="lg"
              placeholder="Company name"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Address</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Form.Control
              value={address}
              name="address"
              onChange={onChange}
              size="lg"
              placeholder="Office Address"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Bussiness Areas</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Multiselect
              style={{
                chips: { background: "#5f0035" },
              }}
              id={data.AIList}
              options={data.AIList}
              closeIcon="cancel"
              closeOnSelect={false}
              placeholder="you can choose 3"
              selectionLimit="3"
              selectedValues={interests}
              onSelect={(e) => setState({ ...state, interests: e })}
              displayValue="name"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Functional Domain</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Multiselect
              style={{
                chips: { background: "#1dbcdf" },
              }}
              id={data.FDList}
              options={data.FDList}
              closeIcon="cancel"
              closeOnSelect={false}
              placeholder="you can choose 3"
              selectionLimit="3"
              selectedValues={functionalDomains}
              onSelect={(e) => setState({ ...state, functionalDomains: e })}
              displayValue="name"
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
      </Container>
      <Container>
        <h1 className="text-center my-5">Contact Information</h1>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Name of The Person</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Form.Control
              value={personName}
              name="personName"
              onChange={onChange}
              size="lg"
              placeholder="Name of The Person to Contact"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Email to Contact</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Form.Control
              value={email}
              name="email"
              onChange={onChange}
              size="lg"
              placeholder="Your Email"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Landline</h4>
          </Col>
          <Col xs={8} sm={3}>
            <Form.Control
              value={landline}
              name="landline"
              onChange={onChange}
              size="lg"
              placeholder="Landline Number"
              className="shadow-lg rounded"
            />
          </Col>
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Mobile</h4>
          </Col>
          <Col xs={8} sm={3}>
            <Form.Control
              value={mobile}
              name="mobile"
              onChange={onChange}
              size="lg"
              placeholder="Mobile Number"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="text-center my-5">About the company</h1>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={6} sm={4}>
            <h4 className="mt-3">Comany Logo</h4>
          </Col>
          <Col xs={6} sm={4}>
            <label
              className="shadow rounded py-2 px-5"
              style={{ cursor: "pointer" }}
              htmlFor="upload-logo"
            >
              Upload
            </label>
            <Form.File
              accept="image/*"
              id="upload-logo"
              onChange={(e) => setState({ ...state, logo: e.target.files[0] })}
              className="d-none"
            />
          </Col>
          {logo && (
            <Col xs={12} sm={4}>
              <object
                aria-label="fodo"
                data={logo && URL.createObjectURL(logo)}
                width="200"
                height="200"
                className="rounded-circle"
              ></object>
            </Col>
          )}
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Website URl</h4>
          </Col>
          <Col xs={8} sm={9}>
            <Form.Control
              value={websiteURL}
              name="websiteURL"
              onChange={onChange}
              size="lg"
              placeholder="Company's Website URL"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={3}>
            <h4 className="mt-3">Description</h4>
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
      </Container>
      <Container className="text-right mb-5">
        <Button
          variant="two"
          size="lg"
          className="rounded shadow-lg px-5 mt-3 mt-md-5"
          onClick={submitInformation}
        >
          Submit
        </Button>
      </Container>
    </>
  );
}
export default connect((state) => state, { setUser: AC.setUser })(
  withRouter(Profile)
);
