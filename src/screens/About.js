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
            Lorem Ipsum est simplement du faux texte employé dans la composition
            et la mise en page avant impression. Le Lorem Ipsum est le faux
            texte standard de l'imprimerie depuis les années 1500, quand un
            imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte.
          </p>
          <p className="about_me_paragraphe">
            Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à
            la bureautique informatique, sans que son contenu n'en soit modifié.
            Il a été popularisé dans les années 1960 grâce à la vente de
            feuilles Letraset contenant des passages du Lorem Ipsum.
          </p>
          <h6 className="about_me_paragraphe">
            Here are a few technologies I've been working with recently:
          </h6>
          <Row>
            <Col md={4}>
              <ul className="skills">
                <li>Java/JEE</li>
                <li>ReactJS</li>
                <li>Redux</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul className="skills">
                <li>Java/JEE</li>
                <li>ReactJS</li>
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
