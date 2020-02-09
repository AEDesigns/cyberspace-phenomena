import React from "react";
import { Col, Row, Container } from "bootstrap-4-react";

export default class MrFormalAz extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center">Mr Formal Arizona - Phoenix, Az</h2>
          <Row>
            <Col className="col-sm-12 col-md-12 col-lg-6">
              <img
                src={require("../../Imgs/mrFormalAz/A-LOGO.png")}
                width="400"
                height="auto"
                className="d-inline-block align-top img-responsive"
                alt="Mr Formal Arizona"
              />
              <img
                src={require("../../Imgs/mrFormalAz/home-screen-1.png")}
                width="400"
                height="200"
                className="d-inline-block align-top mt-4 img-responsive"
                alt="Mr Formal Arizona Home Page"
              />
              <img
                src={require("../../Imgs/mrFormalAz/our-story.png")}
                width="400"
                height="200"
                className="d-inline-block align-top mt-4 img-responsive"
                alt="Mr Formal Arizona Our Story Page"
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
                href="https://mrformalaz.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Mister Formal Arizona
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
