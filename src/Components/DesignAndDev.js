/* eslint-disable no-undef */
import React from "react";
import { Jumbotron, Display1, Row } from "bootstrap-4-react";
import Footer from "./Footer";
import LathropInsurance from "./WorkComponents/Lathrop";
import MrFormalAz from "./WorkComponents/MrFormalAz";
import LottzProp from "./WorkComponents/LottzProp";
import Interstudy from "./WorkComponents/Interstudy";
import AeDesigns from "./WorkComponents/AeDesigns";
import Fade from "react-reveal/Fade";

function DesignAndDev() {
  return (
    <div>
      <Jumbotron>
        <Display1 className="text-center">My Works</Display1>
      </Jumbotron>
      <Fade up>
        <Row style={{ marginLeft: "10px" }}>
          <LathropInsurance />
        </Row>
        <hr className="solid-line" />
      </Fade>
      <Fade right>
        <Row style={{ marginLeft: "10px" }}>
          <MrFormalAz />
        </Row>
        <hr className="solid-line" />
      </Fade>
      <Fade right>
        <Row style={{ marginLeft: "10px" }}>
          <LottzProp />
        </Row>
        <hr className="solid-line" />
      </Fade>
      <Fade right>
        <Row style={{ marginLeft: "10px" }}>
          <Interstudy />
        </Row>
        <hr className="solid-line" />
      </Fade>
      <Fade right>
        <Row style={{ marginLeft: "10px" }}>
          <AeDesigns />
        </Row>
      </Fade>
      <Footer />
    </div>
  );
}

export default DesignAndDev;
