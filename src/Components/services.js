import React, { Component } from "react";
import { Card, Container, Row, Col } from "bootstrap-4-react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Jumbotron, Display4, Lead } from "bootstrap-4-react";
import Typing from "./typing";

const img_src =
  "data:image/svg+xml;charset=UTF-8," +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">286X180<%2Ftext><%2Fg>' +
  "<%2Fg><%2Fsvg>";

export default class Services extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Display4 className="text-center">Æ Designs specializes in:</Display4>
          <Lead>
            <Typing />
          </Lead>
          <hr className="my-4" />
          <p className="text-center">
            Find out below how we can help your business grow!
          </p>
        </Jumbotron>
        <h2 className="text-center">What we have to offer:</h2>
        <section className="services">
          <br />
          <Container>
            <Row>
              <Col className="col-sm-12 col-md-12 col-lg-4">
                <Card style={{ width: "18rem" }}>
                  <Card.Image src={img_src} />
                  <Card.Body>
                    <Card.Title>Website Design & Development</Card.Title>
                    <Card.Text>
                      <p>
                        Now-a-days, a business needing a website is an absolute
                        must and I'm here to guide you through that process. As
                        an expert in my field, I can design and build a website
                        that flows naturally and converts potential customers
                        into revenue.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link to="/design-and-dev">See some of our works</Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col className="col-sm-12 col-md-12 col-lg-4">
                <Card style={{ width: "18rem" }}>
                  <Card.Image src={img_src} />
                  <Card.Body>
                    <Card.Title>SEO</Card.Title>
                    <Card.Text>
                      <p>
                        Your digital presence being found is the lifeblood of
                        your business, especially when considering that 15% of
                        all business is currently done on the web. So being
                        found on Google and other search engines is an absolute
                        MUST, and I'm here to help with that.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col className="col-sm-12 col-md-12 col-lg-4">
                <Card style={{ width: "18rem" }}>
                  <Card.Image src={img_src} />
                  <Card.Body>
                    <Card.Title>ADA Compliance </Card.Title>
                    <Card.Text>
                      <p></p>
                      <p>
                        Today everyone can access the web and ensuring your
                        website can be navigated by individuals who may have
                        disabilities is not only the right thing to do, it's the
                        law. Our projects follow ADA AA Compliance standards,
                        meaning a seamless experience for all.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <br />
      </div>
    );
  }
}
