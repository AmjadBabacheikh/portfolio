import React from "react";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <Navbar className="nav-color" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Image src={"./assets/logo.jpg"} className="logo" />
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/experience">
                <Nav.Link>Experience</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/work">
                <Nav.Link>Work</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
