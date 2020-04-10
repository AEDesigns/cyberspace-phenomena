import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="prime-div">
        <div className="sec-div">
          <Navbar expand="lg">
            <Navbar.Brand>
              <img
                src={require("../Imgs/black-logo-svg.svg")}
                width="200"
                height="auto"
                className="d-inline-block align-top brand-img"
                alt="A E Designs"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/">
                  <div className="nav-link">Home</div>
                </Link>
                <Link to="/design-and-dev">
                  <div className="nav-link">My Works</div>
                </Link>
                <Link to="/contact">
                  <div className="nav-link">Contact Me</div>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
