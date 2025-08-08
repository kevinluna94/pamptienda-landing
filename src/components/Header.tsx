// src/components/Header.tsx
'use client'; // Esta directiva es necesaria para manejar eventos de clic

import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Link from 'next/link';

interface HeaderProps {
  setShowLogin: (show: boolean) => void;
  setShowRegister: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setShowLogin, setShowRegister }) => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm fixed-top">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="fw-bold text-primary">
            <span className="text-secondary">Pamp</span>Tienda
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#caracteristicas" className="mx-2">Características</Nav.Link>
            <Nav.Link href="#precios" className="mx-2">Precios</Nav.Link>
            <Nav.Link href="#testimonios" className="mx-2">Testimonios</Nav.Link>
            <Nav.Link href="#faq" className="mx-2">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary" className="me-2" onClick={() => setShowLogin(true)}>Iniciar Sesión</Button>
            <Button variant="primary" onClick={() => setShowRegister(true)}>Registrarse</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;