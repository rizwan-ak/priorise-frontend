import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import EducationModal from "../../../components/educationModal";
import AC from "../../../redux/actions";
import { connect } from "react-redux";
import data from "../../../@utils/data";
import { withRouter } from "react-router-dom";

function Profile({ setUser, user, history }) {
  const [test, setTest] = useState("");
  const [modal, setModal] = useState(false);
  const [state, setState] = useState({
    email: "",
    firstName: "",
    title: "",
    lastName: "",
    dob: "",
    contactNo: "",
    gender: "",
    interests: [],
    functionalDomains: [],
    keyWords: [],
    education: [],
    cv: "",
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

  const deleteKeyWord = (idx) => {
    const arr = state.keyWords.filter((k, i) => i !== idx);
    setState({ ...state, keyWords: arr });
  };

  const addKeyWords = () => {
    const arr = state.keyWords;
    if (test) {
      arr.push(test);
      setState({ ...state, keyWords: arr });
      setTest("");
    }
  };

  const {
    email,
    firstName,
    lastName,
    title,
    dob,
    contactNo,
    gender,
    interests,
    functionalDomains,
    keyWords,
    education,
    cv,
  } = state;
  return (
    <>
      <Container>
        <h1 className="text-center my-5">Personal Information</h1>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={2}>
            <h4 className="mt-3">Your Email</h4>
          </Col>
          <Col xs={8} sm={4}>
            <Form.Control
              value={email}
              name="email"
              onChange={onChange}
              size="lg"
              placeholder="Your Email"
              className="shadow-lg rounded"
            />
          </Col>
          <Col xs={4} sm={2}>
            <h4 className="mt-3">Password</h4>
          </Col>
          <Col xs={8} sm={4}>
            <Button
              block
              size="lg"
              variant="two"
              className="font-weight-bold shadow-lg rounded"
              // style={{ borderRadius: "0 20px 20px 0" }}
            >
              Change Password
            </Button>
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={2}>
            <h4 className="mt-3">First Name</h4>
          </Col>
          <Col xs={8} sm={4}>
            <Form.Control
              size="lg"
              value={firstName}
              name="firstName"
              onChange={onChange}
              placeholder="First Name"
              className="shadow-lg rounded"
            />
          </Col>
          <Col xs={4} sm={2}>
            <h4 className="mt-3">Title</h4>
          </Col>
          <Col xs={8} sm={4}>
            <Form.Control
              as="select"
              value={title}
              name="title"
              onChange={onChange}
              size="lg"
              className="shadow-lg rounded"
              custom
            >
              {data.PrefixList.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={2}>
            <h4 className="mt-3">Last Name</h4>
          </Col>
          <Col xs={8} sm={4}>
            <Form.Control
              value={lastName}
              name="lastName"
              onChange={onChange}
              size="lg"
              placeholder="Last Name"
              className="shadow-lg rounded"
            />
          </Col>
          <Col xs={4} sm={2}>
            <h4 className="mt-3">DOB</h4>
          </Col>
          <Col xs={8} sm={4}>
            <Form.Control
              value={dob}
              name="dob"
              onChange={onChange}
              type="date"
              size="lg"
              placeholder="01-05-2000"
              className="shadow-lg rounded"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={2}>
            <h4 className="mt-3">Contact #</h4>
          </Col>
          <Col xs={8} sm={4}>
            <Form.Control
              value={contactNo}
              name="contactNo"
              onChange={onChange}
              size="lg"
              placeholder="+940078601"
              className="shadow-lg rounded"
            />
          </Col>
          <Col xs={4} sm={2}>
            <h4 className="mt-3">Gender</h4>
          </Col>
          <Col xs={8} sm={4}>
            <Form.Control
              value={gender}
              name="gender"
              onChange={onChange}
              as="select"
              size="lg"
              className="shadow-lg rounded"
              custom
            >
              {data.GenderList.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="text-center my-5">Internship/ Apprenticeship</h1>
        <Row className="d-flex align-items-center mt-3">
          <Col xs={4} sm={4}>
            <h4 className="mt-3">Resume/ CV</h4>
          </Col>
          <Col xs={4} sm={4}>
            <label
              className="shadow rounded py-2 px-5"
              style={{ cursor: "pointer" }}
              htmlFor="upload-pdf"
            >
              Upload
            </label>
            <Form.File
              accept="application/pdf"
              id="upload-pdf"
              onChange={(e) => setState({ ...state, cv: e.target.files[0] })}
              className="d-none"
            />
          </Col>
          <Col xs={4} sm={4}>
            <h4 className="mt-3">
              <object
                data={cv && URL.createObjectURL(cv)}
                width="300"
                height="200"
              ></object>
            </h4>
          </Col>
          <Col xs={4} sm={4}>
            <h4 className="mt-3">Areas of Interest</h4>
          </Col>
          <Col xs={8} sm={8}>
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
          <Col xs={4} sm={4} className="mt-3">
            <h4 className="mt-3">Areas of Interest</h4>
          </Col>
          <Col xs={8} sm={8} className="mt-3">
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
          <Col xs={4} sm={4} className="mt-3">
            <h4 className="mt-3">Add key words</h4>
          </Col>
          <Col xs={8} sm={8} className="mt-3">
            <InputGroup className="shadow-lg rounded">
              <Form.Control
                value={test}
                size="lg"
                placeholder="Add Keywords"
                onChange={(e) => setTest(e.target.value)}
              />
              <InputGroup.Append>
                <InputGroup.Text
                  onClick={addKeyWords}
                  style={{ cursor: "pointer" }}
                  className="px-3"
                >
                  +
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col
            sm={12}
            md={{ span: 8, offset: 4 }}
            className="mt-3 d-flex flex-row flex-wrap"
          >
            {keyWords.map((k, i) => (
              <span
                key={i}
                className="bg-one text-white p-1 px-3 rounded shadow mr-3 mb-2"
                style={{ cursor: "pointer" }}
                onClick={() => deleteKeyWord(i)}
              >
                {k}
              </span>
            ))}
          </Col>
        </Row>
      </Container>
      <Container className="text-center mb-3">
        <h1 className="text-center my-5">Educational Information</h1>
        {education.length > 0 && (
          <div className="rounded shadow mx-md-5 mx-3 p-3">
            {education.map((e, i) => (
              <h6 className="text-muted lead" key={i}>
                {e.levelOfEducation} - {e.university} - {e.passingYear}
              </h6>
            ))}
          </div>
        )}
        <Button
          variant="two"
          className="rounded-circle shadow pt-2 px-3 mt-4"
          onClick={() => setModal(true)}
        >
          <span className="h1">+</span>
        </Button>
      </Container>
      <Container className="text-right mb-5">
        <Button
          variant="two"
          size="lg"
          className="rounded shadow-lg px-5"
          onClick={submitInformation}
        >
          Submit
        </Button>
      </Container>

      <EducationModal
        show={modal}
        set={setModal}
        education={education}
        setEducation={(e) => setState({ ...state, education: e })}
      />
    </>
  );
}
export default connect((state) => state, { setUser: AC.setUser })(
  withRouter(Profile)
);
