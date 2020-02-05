import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Display4, Col, Row, Container } from "bootstrap-4-react";
import LathropInsurance from "./WorkComponents/Lathrop";
import MrFormalAz from "./WorkComponents/MrFormalAz";
import LottzProp from "./WorkComponents/LottzProp";

function DesignAndDev() {
  return (
    <div>
      <Jumbotron>
        <Display4 className="text-center">Our Works</Display4>
      </Jumbotron>
      <Container>
        <Col>
          <Row>
            <LathropInsurance />
          </Row>
        </Col>
      </Container>
      <Container className="mt-2">
        <Col>
          <Row>
            <MrFormalAz />
          </Row>
        </Col>
      </Container>
      <Container className="mt-2">
        <Col>
          <Row>
            <LottzProp />
          </Row>
        </Col>
      </Container>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default DesignAndDev;
