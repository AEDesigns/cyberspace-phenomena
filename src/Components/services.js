import React from "react";
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
import jumboImg from "../Components/jumboImg.jpg";
import Fade from "react-reveal/Fade";

export default class Services extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron
          fluid
          style={{
            backgroundImage: `url(${jumboImg})`,
            backgroundSize: "cover",
          }}
        >
          <Display4 className="text-center jmbo-style">
            Æ Designs specializes in:
          </Display4>
          <Lead>
            <Typing />
          </Lead>
          <hr className="my-4" />
        </Jumbotron>
        <h2 className="text-center services">
          Find out below how I can help your business grow!
        </h2>
        <section className="services">
          <br />
          <Container>
            <Fade bottom>
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
                          Now-a-days, a business needing a website is an
                          absolute must and I'm here to guide you through that
                          process. As an expert in my field, I can design and
                          build a website that flows naturally and converts
                          potential customers into revenue.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Link to="/design-and-dev">See some of my works</Link>
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
                          found on Google and other search engines is an
                          absolute MUST, and I'm here to help with that.
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
                          disabilities is not only the right thing to do, it's
                          the law. My projects follow ADA AA Compliance
                          standards, meaning a seamless experience for all.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Link href="#">Card Link</Card.Link>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Fade>
          </Container>
        </section>
        <section className="services">
          <br />
          <Container>
            <Fade bottom>
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
                        Twitch Digital Assets
                      </Card.Title>
                      <Card.Text>
                        <p>
                          Emotes, Overlays and more! We can help streamers
                          spruce up their communities with stunning, pixel
                          perfect graphics. Our Graphic Designers are experts at
                          helping you engage with your viewers.Check out our
                          total streamer package for an amazing deal.
                        </p>
                        <p className="space"></p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Link to="/design-and-dev">
                        See some of our Emotes and More!
                      </Link>
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
                      <Card.Title className="text-center ">
                        Custom Development
                      </Card.Title>
                      <Card.Text>
                        <p>
                          So you've got the next big idea that'll be bigger than
                          Amazon and Facebook but you're unsure of how to
                          develop such a behemoth. Luckily, our developers can
                          handle everything from website development to full
                          stack applications and e-commerce websites.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Link href="#">Software Development</Card.Link>
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
                        Email Development
                      </Card.Title>
                      <Card.Text>
                        <p></p>
                        <p>
                          Email marketing is always an important cornerstone of
                          your business, so your emails need to be up to snuff.
                          We can build custom emails that are viable on all of
                          the major clients(including Google, Yahoo and
                          Hotmail), mobile responsive, break the mold and are
                          100% accessible.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Link href="#">Card Link</Card.Link>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Fade>
          </Container>
        </section>
        <br />
        <Fade left>
          <CallToAction />
        </Fade>
        <Footer />
      </div>
    );
  }
}
