import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Jumbotron, Display4, Lead, Row, Col } from "bootstrap-4-react";
import MyForm from "./WorkComponents/ContactForm";

function Contact() {
  return (
    <div>
      <Jumbotron>
        <Display4 className="text-center">Contact Me</Display4>
        <Lead className="text-center">
          For a free consultation and find out how I can help your business!
        </Lead>
      </Jumbotron>
      <Row></Row>
      <MyForm />
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default Contact;
