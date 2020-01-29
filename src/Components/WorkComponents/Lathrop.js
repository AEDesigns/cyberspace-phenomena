import React from "react";
import { Col, Row, Container } from "bootstrap-4-react";
import FirstProjectModal from "../ModalComponents/FirstProject";

export default class LathropInsurance extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col-sm-12 col-md-12 col-lg-6">
              <img
                src={require("../../Imgs/Lathrop-logo.png")}
                width="400"
                height="200"
                className="d-inline-block align-top"
                alt="Lathrop Insurance"
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
              <br />
              <FirstProjectModal />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
