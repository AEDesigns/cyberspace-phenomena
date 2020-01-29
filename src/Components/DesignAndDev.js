import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Display4, Col, Row, Container } from "bootstrap-4-react";
import LathropInsurance from "./WorkComponents/Lathrop";

function DesignAndDev() {
  return (
    <div>
      <Jumbotron>
        <Display4 className="text-center">Our Works</Display4>
      </Jumbotron>
      <LathropInsurance />
      <br />
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default DesignAndDev;
