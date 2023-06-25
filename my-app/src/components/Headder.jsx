import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Headder.scss';

const Headder = () => {

  const { dark } = useSelector((store) => store.theme);

    const [expanded, setExpanded] = useState(false);
  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar className={ `my_navbar ${dark ? 'dark_mode' : ''}`} sticky="top" expand="lg" expanded={expanded}>
    <Container>
      <Navbar.Brand href="#home">Curly</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Headder;
