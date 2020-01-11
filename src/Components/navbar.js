import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={require("../Imgs/Scrybe.jpg")}
              width="200"
              height="100"
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
