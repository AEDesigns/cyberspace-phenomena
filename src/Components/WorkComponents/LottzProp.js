import React from "react";
import { Col, Row, Container } from "bootstrap-4-react";
import "../../App";

export default class LottzProp extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col-sm-12 col-md-12 col-lg-6">
              <img
                src={require("../../Imgs/Lottz/Lottz Properties_v2.svg")}
                width="400"
                height="auto"
                className="d-inline-block align-top img-responsive mobile-img"
                alt="Lottz Properties"
              />
              <img
                src={require("../../Imgs/Lottz/home-1.png")}
                width="400"
                height="auto"
                className="d-inline-block align-top mt-4 img-responsive hov-img mobile-img"
                alt="Lottz Properties Home Page"
              />
              <img
                src={require("../../Imgs/Lottz/home-2.png")}
                width="400"
                height="auto"
                className="d-inline-block align-top mt-4 img-responsive hov-img mobile-img"
                alt="Lottz Properties Home Page"
              />
            </Col>
            <Col className="col-sm-12 col-md-12 col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a
                href="https://lottzproperties.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Lottz Properties
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
