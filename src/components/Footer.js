import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-1 footer">
            Made With <span> ❤️ </span> By BABACHEIKH AMJAD
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-2 my-1 footer">
            Copyright &copy; BooksShop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
