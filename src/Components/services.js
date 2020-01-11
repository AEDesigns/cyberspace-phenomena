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
          <Display4 className="text-center">
            Scrybe Digital specializes in:
          </Display4>
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
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Image src={img_src} />
                  <Card.Body>
                    <Card.Title>Website Design & Development</Card.Title>
                    <Card.Text>
                      <p>
                        Your website is your digital address, and much like your
                        physical address, it needs to be up to snuff to attract
                        customers.
                      </p>
                      <p>
                        We'll sit down with you and discuss your wants and
                        needs, while also providing as a guide to ensure your
                        website is not only visually appealing but also ADA
                        Compliant and secure.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link to="/design-and-dev">See some of our works</Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Image src={img_src} />
                  <Card.Body>
                    <Card.Title>Custom Development</Card.Title>
                    <Card.Text>
                      <p>
                        Do you have an idea that may just be the next Youtube,
                        airBNB or Facebook but not sure where to begin or you
                        need an extra set of hands?
                      </p>
                      <p>
                        Our developers can help! Our expert developers can help
                        you design and develop your program using the latest
                        cutting edge technologies and design principles!
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link to="/development">Learn how we can help</Link>
                  </Card.Footer>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Image src={img_src} />
                  <Card.Body>
                    <Card.Title>Email Marketing</Card.Title>
                    <Card.Text>
                      <p>
                        So you've built up a client base and business is
                        booming. What's next?
                      </p>
                      <p>
                        Now, we need to keep in contact with our clients so they
                        get the latest and greatest news and products you have
                        to offer! We can help with that by developing emails
                        that are not only mobile responsive, but also look great
                        on <em>ANY</em> email client.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Image src={img_src} />
                  <Card.Body>
                    <Card.Title>SEO</Card.Title>
                    <Card.Text>
                      <p>Search Engine Optimization is our bread and butter.</p>
                      <p>
                        We can help improve your standing with Google by
                        tactical and creative content, linking and ensuring your
                        website is built to maximize all of the above.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Image src={img_src} />
                  <Card.Body>
                    <Card.Title>Social Media Marketing</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Image src={img_src} />
                  <Card.Body>
                    <Card.Title>Consulting</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
