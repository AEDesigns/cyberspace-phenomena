import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>
            <img
              src={require("../Imgs/white-logo-svg.svg")}
              width="200"
              height="auto"
              className="d-inline-block align-top"
              alt="Scrybe Digital Marketing"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <div className="nav-link">Home</div>
              </Link>
              <Link to="/design-and-dev">
                <div className="nav-link">Our Works</div>
              </Link>
              <Link to="/contact">
                <div className="nav-link">Contact Us</div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
