import React from "react";
import { Route } from "react-router-dom";

import Login from "../../pages/login";
import Signup from "../../pages/signup";
import Welcome from "../../pages/welcome";
import InterneeRoutes from "./interneeRoutes";
import EmployerRoutes from "./employerRoutes";
import { connect } from "react-redux";

function Routes({ userType }) {
  return (
    <>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {userType === "internee" && <InterneeRoutes />}
      {userType === "employer" && <EmployerRoutes />}
    </>
  );
}
export default connect((state) => state)(Routes);
