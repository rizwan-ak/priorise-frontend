import React from "react";
import { Route } from "react-router-dom";

import Profile from "../../../pages/employer/profile";
import Dashboard from "../../../pages/employer/dashboard";
import Applications from "../../../pages/employer/applications";
import Details from "../../../pages/employer/details";
import Post from "../../../pages/employer/post";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function EmployerRoutes() {
  return (
    <>
      <Header />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/applications" component={Applications} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/post" component={Post} />
      <Footer />
    </>
  );
}
