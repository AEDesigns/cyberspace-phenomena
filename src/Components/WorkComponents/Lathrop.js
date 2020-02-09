import React from "react";
import { Col, Row, Container } from "bootstrap-4-react";

export default class LathropInsurance extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1 className="mx-auto">Lathrop Insurance - Westerly, RI</h1>
            <Col className="col-sm-12 col-md-12 col-lg-6">
              <img
                src={require("../../Imgs/Lathrop-logo.png")}
                width="400"
                height="200"
                className="d-inline-block align-top mt-4 img-responsive"
                alt="Lathrop Insurance Logo"
              />
              <img
                src={require("../../Imgs/Lathrop-home-screen-2.png")}
                width="400"
                height="200"
                className="d-inline-block align-top mt-4 img-responsive"
                alt="Lathrop Insurance Services On Home Page"
              />
              <img
                src={require("../../Imgs/lathrop-serving.png")}
                width="400"
                height="200"
                className="d-inline-block align-top mt-4 img-responsive"
                alt="Lathrop Insurance Services Page"
              />
            </Col>
            <Col className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
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
                href="https://lathropinsurance.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Lathrop Insurance
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
