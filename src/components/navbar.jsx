import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../images/logo.png';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar className="navbar-custom" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleClose}>
          <img src={logo} alt="Logo" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/Yincana_PacoPico" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose}>Instrucciones</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleClose}>Teorema de Paco Pico</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose}>La Leyenda de la Puchaina Matediva</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

