import React from "react";
import { Jumbotron, Display4, Col, Row, Container } from "bootstrap-4-react";
import Footer from "./Footer";
import LathropInsurance from "./WorkComponents/Lathrop";
import MrFormalAz from "./WorkComponents/MrFormalAz";
import LottzProp from "./WorkComponents/LottzProp";
import Interstudy from "./WorkComponents/Interstudy";
import AeDesigns from "./WorkComponents/AeDesigns";

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
      <Container className="mt-2">
        <Col>
          <Row>
            <Interstudy />
          </Row>
        </Col>
      </Container>
      <Container className="mt-2">
        <Col>
          <Row>
            <AeDesigns />
          </Row>
        </Col>
      </Container>
      <Footer />
    </div>
  );
}

export default DesignAndDev;
