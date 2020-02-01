import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

interface NavigationObject {
  loggedIn: boolean,
  userData?: any
}

const Navigation = ({ loggedIn, userData }: NavigationObject) => (
  <Navbar collapseOnSelect expand="lg" className="home-body">
    <Navbar.Brand href="#home">Global Reach</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        {
          loggedIn ?
          <Nav.Link to="/logout" as={Link}>Logout</Nav.Link>
          : <Nav.Link to="/login" as={Link}>Login</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation