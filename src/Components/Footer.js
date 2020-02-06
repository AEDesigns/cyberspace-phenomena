import React from "react";
import "../App.css";
import { Container, Row, Col } from "bootstrap-4-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <div className="footer-style">
        <br />
        <Container>
          <Row>
            <Col className="col-sm-12 col-md-12 col-lg-4">
              <p className="services">Contact Me: </p>
              <p>PH: (615)669-5552‬</p>
              <p>
                <a href="mailto:aedevdesigns@gmail.com?subject=Let's Connect!">
                  aedevdesigns@gmail.com
                </a>
              </p>
              <Container>
                <a href="https://twitter.com/Kr4knB8" className="pr-1">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href="https://github.com/AEDesigns?tab=repositories"
                  className="pr-1"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/andrew-elliott-501008163/">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </Container>
            </Col>
            <Col className="col-sm-12 col-md-12 col-lg-4">
              <img
                src={require("../Imgs/white-logo-svg.svg")}
                width="200"
                height="auto"
                className="d-inline-block align-top"
                alt="A E Desgins"
              />
            </Col>
            <Col className="col-sm-12 col-md-12 col-lg-4 mx-auto">
              <p className="services">Proudly Serving:</p>
              <ul className="ul-styles mx-auto text-center">
                <li>
                  <a href="#">Nashville</a>
                </li>
                <li>
                  <a href="#">The 'Boro</a>
                </li>
                <li>
                  <a href="#">Mt. Juliet</a>
                </li>
                <li>
                  <a href="#">Brentwood</a>
                </li>
                <li>
                  <a href="#">Franklin</a>
                </li>
                <li>
                  <a href="#">Cookeville</a>
                </li>
                <li>
                  <a href="#">Chattanooga</a>
                </li>
                <li>
                  <a href="#">Clarksville</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
