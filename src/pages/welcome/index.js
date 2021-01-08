import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pics from "../../@assets";

import AC from "../../redux/actions";
import { connect } from "react-redux";

function Welcome({ setUserType }) {
  return (
    <Card
      className="text-center d-flex justify-content-center"
      style={{ height: "100vh" }}
    >
      <div>
        <Card.Img src={Pics.colorLogo} style={{ height: "50vh" }} />
        <Card.Body>
          <Card.Text className="display-4 px-md-5 px-3 mx-md-5">
            START YOUR CAREER IN SALES AND MARKETING
          </Card.Text>
          <div className=" mt-5">
            <Button
              size="lg"
              variant="one"
              className="p-3 mx-3"
              onClick={() => setUserType("internee")}
            >
              <Link to="/signup">Internee Registeration</Link>
            </Button>
            <Button
              size="lg"
              variant="two"
              className="p-3 mx-3"
              onClick={() => setUserType("employer")}
            >
              <Link to="/signup">Employer Registeration</Link>
            </Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}
export default connect(null, {
  setUserType: AC.setUserType,
})(Welcome);
