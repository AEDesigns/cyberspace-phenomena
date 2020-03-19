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
              <p className="services">PH: (615)669-5552‬</p>
              <p className="services">
                <a
                  className="services"
                  href="mailto:aedevdesigns@gmail.com?subject=Let's Connect!"
                >
                  aedevdesigns@gmail.com
                </a>
              </p>
              <Container>
                <a href="https://twitter.com/Kr4knB8" className="pr-1 services">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href="https://github.com/AEDesigns?tab=repositories"
                  className="pr-1 services"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  href="https://www.linkedin.com/in/andrew-elliott-501008163/"
                  className="services"
                >
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
              <ul className="ul-styles mx-auto text-center services">
                <li className="services">
                  <a href="#" className="services">
                    Nashville
                  </a>
                </li>
                <li>
                  <a href="#" className="services">
                    The 'Boro
                  </a>
                </li>
                <li>
                  <a href="#" className="services">
                    Mt. Juliet
                  </a>
                </li>
                <li>
                  <a href="#" className="services">
                    Brentwood
                  </a>
                </li>
                <li>
                  <a href="#" className="services">
                    Franklin
                  </a>
                </li>
                <li>
                  <a href="#" className="services">
                    Cookeville
                  </a>
                </li>
                <li>
                  <a href="#" className="services">
                    Chattanooga
                  </a>
                </li>
                <li>
                  <a href="#" className="services">
                    Clarksville
                  </a>
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
