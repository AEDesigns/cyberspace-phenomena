import React from "react";
import { Col, Row, Container } from "bootstrap-4-react";
import SecondProjectModal from "../ModalComponents/SecondProj";

export default class MrFormalAz extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col-sm-12 col-md-12 col-lg-6">
              <a
                href="https://mrformalaz.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../Imgs/mrFormalAz/mrFormalAz-logo.png")}
                  width="400"
                  height="200"
                  className="d-inline-block align-top"
                  alt="Mr Formal Arizona"
                />
              </a>
            </Col>
            <Col className="col-sm-12 col-md-12 col-lg-6">
              <p className="working-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <br />
              <SecondProjectModal />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
