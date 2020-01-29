import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Display4, Lead } from "bootstrap-4-react";

function Contact() {
  return (
    <div>
      <Jumbotron>
        <Display4 className="text-center">Contact Us</Display4>
        <Lead className="text-center">
          For a free consultation and find out how we can help your business!
        </Lead>
      </Jumbotron>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default Contact;
