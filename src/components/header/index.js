import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Pics from "../../@assets/index";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="one" className="text-white">
      <Navbar.Brand href="/dashboard">
        <img alt="dp" src={Pics.colorLogo} style={{ height: 75, width: 100 }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard" className="mr-5">
            <div className="d-md-flex flex-column align-items-center">
              <ion-icon name="home-outline" style={{ fontSize: 24 }} />
              <span className="ml-md-0 ml-3">Dashboard</span>
            </div>
          </Nav.Link>
          <Nav.Link href="/profile" className="mr-5">
            <div className="d-md-flex flex-column align-items-center">
              <ion-icon name="person-outline" style={{ fontSize: 24 }} />
              <span className="ml-md-0 ml-3">Profile</span>
            </div>
          </Nav.Link>
          <NavDropdown
            className="mr-5"
            title={
              <div className="d-md-flex flex-column align-items-center">
                <ion-icon
                  name="notifications-outline"
                  style={{ fontSize: 24 }}
                />
                <span className="ml-md-0 ml-3">Notifications</span>
              </div>
            }
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/" className="mr-5">
            <div className="d-md-flex flex-column align-items-center">
              <ion-icon name="log-out-outline" style={{ fontSize: 24 }} />
              <span className="ml-md-0 ml-3">Log Out</span>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
