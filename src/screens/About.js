import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about_me_section">
      <h2 className="about_me_title py-3">About Me</h2>
      <Row>
        <Col md={6}>
          <p className="about_me_paragraphe">
            Hello my name is Amjad and I enjoy creating web and mobile
            applications. My passion start from 2012 by discovering the main
            parts that a computer is based on.
          </p>
          <p className="about_me_paragraphe">
            In 2018 , i started my bachelor's degree majoring in computer
            science from The National School of Applied Sciences.Fast-forward to
            today, I'hve had built many projects and become more focus on best
            practices.
          </p>
          <h6 className="about_me_paragraphe">
            Here are a few technologies I've been working with recently:
          </h6>
          <Row>
            <Col md={4}>
              <ul className="skills">
                <li>Java/JEE</li>
                <li>Spring</li>
                <li>NodeJS</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul className="skills">
                <li>ReactJS</li>
                <li>React Native</li>
                <li>Redux</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Image className="about_me_image" src={"./assets/pic.jpeg"} rounded />
        </Col>
      </Row>
    </div>
  );
};

export default About;
