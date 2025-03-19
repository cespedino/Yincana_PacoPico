import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../images/logo.png';
import Olac from '../images/Olac.png';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar className="navbar-custom" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/Yincana_PacoPico" onClick={handleClose}>
          <img src={Olac} alt="Olac" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/Yincana_PacoPico" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/instrucciones" onClick={handleClose}>Instrucciones</Nav.Link>
            <Nav.Link as={Link} to="/teorema_PP" onClick={handleClose}>La Teoría de Paco Pico</Nav.Link>
            <Nav.Link as={Link} to="/leyenda" onClick={handleClose}>La Leyenda de las Matedivas</Nav.Link>
            <Nav.Link as={Link} to="/zombie" onClick={handleClose}>La Invasión Zombie</Nav.Link>
            <Nav.Link as={Link} to="/city" onClick={handleClose}>Escape the City</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

