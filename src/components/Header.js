import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Experience</Nav.Link>
            <Nav.Link href="#pricing">Work</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="primary">Resume</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
