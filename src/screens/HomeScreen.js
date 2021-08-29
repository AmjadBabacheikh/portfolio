import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import "./HomeScreen.css";

const HomeScreen = ({ history }) => {
  return (
    <>
      <Row>
        <Col md={10} className="home py-4">
          <h1 className="init">Hi, my name is</h1>
          <h2 className="big-heading">Amjad Babacheikh.</h2>
          <h3 className="big-heading-title">I build things for the web.</h3>
          <p className="presentation-para">
            I'm a software engineer specializing in building (and occasionally
            designing) web and mobile applicatons. Currently, I'm focused on
            building large applications based on microservices architecture.
          </p>
          <Button className="touch" onClick={() => history.push("/contact")}>
            Get In Touch
          </Button>
        </Col>
      </Row>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default HomeScreen;
