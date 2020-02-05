import React from "react";
import { Col, Row, Container } from "bootstrap-4-react";
import ThirdProj from "../ModalComponents/ThirdProj";

export default class LottzProp extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col-sm-12 col-md-12 col-lg-6">
              <a
                href="https://lottzproperties.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../Imgs/Lottz/Lottz Properties_v2.svg")}
                  width="400"
                  height="200"
                  className="d-inline-block align-top"
                  alt="Lottz Properties"
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
              <ThirdProj />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
