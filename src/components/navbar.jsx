import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavigationBar = () => {
  return (
    <Navbar className="navbar-custom" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to="/">kladslk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Instrucciones</Nav.Link>
            <Nav.Link as={Link} to="/services">Teorema de Paco Pico</Nav.Link>
            <Nav.Link as={Link} to="/contact">La Leyenda de la Puchaina Matediva</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
