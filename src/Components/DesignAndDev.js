import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Display4, Lead } from "bootstrap-4-react";

function DesignAndDev() {
  return (
    <div>
      <Jumbotron>
        <Display4 className="text-center">Our Works</Display4>
      </Jumbotron>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default DesignAndDev;
