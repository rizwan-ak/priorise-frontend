import React from "react";
import { Route } from "react-router-dom";

import Profile from "../../../pages/user/profile";
import Dashboard from "../../../pages/user/dashboard";
import Details from "../../../pages/user/details";

import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function InterneeRoutes() {
  return (
    <>
      <Header />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/jobDetails" component={Details} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Footer />
    </>
  );
}
