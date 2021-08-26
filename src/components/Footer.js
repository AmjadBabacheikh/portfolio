import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Container className="my-3">
        <Row>
          <Col className="text-center py-1 footer">
            Designed & Built by BABACHEIKH AMJAD
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
