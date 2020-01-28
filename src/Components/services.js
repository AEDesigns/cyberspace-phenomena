import React, { Component } from "react";
import { Card, Container, Row, Col } from "bootstrap-4-react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Jumbotron, Display4, Lead } from "bootstrap-4-react";
import Typing from "./typing";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
                  <FontAwesomeIcon
                    icon={faCode}
                    size="3x"
                    className="mx-auto pt-3"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Website Design & Development
                    </Card.Title>
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
                  <FontAwesomeIcon
                    icon={faGoogle}
                    size="3x"
                    className="mx-auto pt-3"
                  />
                  <Card.Body>
                    <Card.Title className="text-center ">SEO</Card.Title>
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
                  <FontAwesomeIcon
                    icon={faAccessibleIcon}
                    size="3x"
                    className="mx-auto pt-3"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      ADA Compliance{" "}
                    </Card.Title>
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
        <CallToAction />
        <Footer />
      </div>
    );
  }
}
