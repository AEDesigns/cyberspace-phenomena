import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Display4, Lead } from "bootstrap-4-react";

function Development() {
  return (
    <div>
      <Jumbotron>
        <Display4 className="text-center">
          We can help you meet those tight deadlines
        </Display4>
      </Jumbotron>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default Development;
