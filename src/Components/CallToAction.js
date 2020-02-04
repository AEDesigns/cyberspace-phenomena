import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";

function CallToAction() {
  return (
    <div className="cont-div">
      <div className="Call-To-Action">
        <h3 className="cta-header">Contact Me Today for a Free Consultation</h3>
        <Button variant="success" className="mx-auto cta-btn">
          Lets Connect!
        </Button>
      </div>
    </div>
  );
}

export default CallToAction;
